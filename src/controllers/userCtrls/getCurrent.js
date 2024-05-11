import ctrlWrapper from '../../auxiliary/ctrlWrapper.js';

const getCurrent = ctrlWrapper(async (req, res, next) => {
  const { name, email, subscription } = req.user;
  res.json({ name, email, subscription });
});

export default getCurrent;
