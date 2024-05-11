import 'dotenv/config';
import express from 'express';
import morgan from 'morgan';
import cors from 'cors';

import './src/db.js';
import routers from './routes/index.js';
import appMsg from './src/auxiliary/constants/appMsg.js';

const app = express();

app.use(morgan('tiny'));
app.use(cors());
app.use(express.json());

app.use('/api', routers);

app.use((_, res) => {
  res.status(404).json({ message: appMsg.ROUTE_ERR_MSG });
});

app.use((err, req, res, next) => {
  const { status = 500, message = appMsg.SERVER_ERR_MSG } = err;
  res.status(status).json({ message });
});

app.listen(3000, () => {
  console.log(appMsg.SERVER_SUCCESS_MSG);
});
