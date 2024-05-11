import bcrypt from 'bcrypt';
import User from '../../dbModels/userModel.js';
import httpError from '../../auxiliary/httpError.js';
import ctrlWrapper from '../../auxiliary/ctrlWrapper.js';
import authMsg from '../../auxiliary/constants/authMsg.js';

const register = ctrlWrapper(async (req, res, next) => {
  const { name, email, password } = req.body;
  const emailInLowerCase = email.toLowerCase();
  const user = await User.findOne({ email: emailInLowerCase });
  if (user) {
    throw httpError(409, authMsg.EMAIL_USE_MSG);
  }
  const hashPassword = await bcrypt.hash(password, 10);

  const newUser = await User.create({
    name,
    email: emailInLowerCase,
    password: hashPassword,
  });
  res.status(201).json({
    user: {
      name,
      email,
      subscription: newUser.subscription,
    },
  });
});

export default register;
