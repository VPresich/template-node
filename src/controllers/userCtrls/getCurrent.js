import ctrlWrapper from '../../auxiliary/ctrlWrapper.js';

const getCurrent = ctrlWrapper(async (req, res, next) => {
  const { email, subscription } = req.user;
  res.json({ email, subscription });
});

export default getCurrent;
