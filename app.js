import 'dotenv/config';
import express from 'express';
import morgan from 'morgan';
import cors from 'cors';

import './src/db.js';
import routes from './src/routes/index.js';
import appMsg from './src/auxiliary/constants/appMsg.js';

const app = express();

app.use(morgan('tiny'));
app.use(cors());
app.use(express.json());

app.use('/api', routes);

app.use((_, res) => {
  res.status(404).json({ message: appMsg.ROUTE_ERR_MSG });
});

app.use((err, req, res, next) => {
  const { status = 500, message = appMsg.SERVER_ERR_MSG } = err;
  res.status(status).json({ message });
});
const { PORT = 3000 } = process.env;
app.listen(PORT, () => {
  console.log(appMsg.SERVER_SUCCESS_MSG + PORT);
});
