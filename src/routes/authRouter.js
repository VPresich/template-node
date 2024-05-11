import express from 'express';
import validateBody from '../middlewares/validateBody.js';
import authMiddleware from '../middlewares/authMiddleware.js';
import sch from '../schemas/authSchema/index.js';
import ctrl from '../controllers/authCtrls/index.js';

const authRouter = express.Router();

authRouter.post('/register', validateBody(sch.registerSchema), ctrl.register);

authRouter.post('/login', validateBody(sch.loginSchema), ctrl.login);

authRouter.post('/logout', authMiddleware, ctrl.logout);

export default authRouter;
