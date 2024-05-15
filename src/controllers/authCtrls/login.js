import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import User from '../../dbModels/userModel.js';
import httpError from '../../auxiliary/httpError.js';
import ctrlWrapper from '../../auxiliary/ctrlWrapper.js';
import authMsg from '../../auxiliary/constants/authMsg.js';

const login = ctrlWrapper(async (req, res, next) => {
  const { email, password } = req.body;
  const emailInLowerCase = email.toLowerCase();
  const user = await User.findOne({ email: emailInLowerCase });

  if (!user) {
    throw httpError(401, authMsg.AUTH_WRONG_MSG);
  }

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    throw httpError(401, authMsg.AUTH_WRONG_MSG);
  }

  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
    expiresIn: 60 * 60,
  });
  await User.findByIdAndUpdate(user._id, { token });
  res.status(200).json({
    token,
    user: {
      name: user.subscription,
      email,
      subscription: user.subscription,
      avatarUrl: user.subscription,
    },
  });
});

export default login;
