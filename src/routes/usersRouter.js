import express from 'express';
import validateBody from '../middlewares/validateBody.js';
import authMiddleware from '../middlewares/authMiddleware.js';
import sch from '../schemas/userSchema/index.js';
import ctrl from '../controllers/userCtrls/index.js';
import upload from '../middlewares/uploadMiddleware.js';

const usersRouter = express.Router();

usersRouter.get('/current', authMiddleware, ctrl.getCurrent);

usersRouter.patch(
  '/',
  authMiddleware,
  validateBody(sch.subscriptionSchema),
  ctrl.updateSubscription
);

usersRouter.patch(
  '/avatars',
  authMiddleware,
  upload.single('avatar'),
  ctrl.updateAvatar
);

export default usersRouter;
