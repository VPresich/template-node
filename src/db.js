import mongoose from 'mongoose';
import dbMsg from './auxiliary/constants/dbMsg';

const DB_URI = process.env.DB_URI;
mongoose
  .connect(DB_URI)
  .then(() => console.log(dbMsg.DB_SUCCESS_MSG))
  .catch(error => {
    console.log(error.message);
    process.exit(1);
  });
