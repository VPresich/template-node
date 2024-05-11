import User from '../../dbModels/userModel.js';
import ctrlWrapper from '../../auxiliary/ctrlWrapper.js';

const logout = ctrlWrapper(async (req, res) => {
  const { id } = req.user;
  await User.findByIdAndUpdate(id, { token: '' });
  res.status(204).end();
});

export default logout;
