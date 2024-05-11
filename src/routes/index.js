import express from 'express';
import authRouter from './authRouter.js';
import contactsRouter from './contactsRouter.js';
import usersRouter from './usersRouter.js';

const routes = express.Router();

routes.use('/auth', authRouter);
routes.use('/contacts', contactsRouter);
routes.use('/users', usersRouter);

export default routes;
