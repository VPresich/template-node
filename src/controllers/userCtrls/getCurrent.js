import ctrlWrapper from '../../auxiliary/ctrlWrapper.js';

const getCurrent = ctrlWrapper(async (req, res, next) => {
  const { name, email, subscription, avatarUrl } = req.user;
  res.json({ name, email, subscription, avatarUrl });
});

export default getCurrent;
