import express from 'express';
import validateBody from '../middlewares/validateBody.js';
import authMiddleware from '../middlewares/authMiddleware.js';
import sch from '../schemas/userSchema/index.js';
import ctrl from '../controllers/userCtrls/index.js';

const usersRouter = express.Router();

usersRouter.get('/current', authMiddleware, ctrl.getCurrent);

usersRouter.patch(
  '/',
  validateBody(sch.subscriptionSchema),
  authMiddleware,
  ctrl.updateSubscription
);

export default usersRouter;
