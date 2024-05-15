import User from '../../dbModels/userModel.js';
import httpError from '../../auxiliary/httpError.js';
import ctrlWrapper from '../../auxiliary/ctrlWrapper.js';
import path from 'node:path';
import fs from 'fs/promises';

const avatarsDir = path.resolve('public', 'avatars');

const updateAvatar = ctrlWrapper(async (req, res, next) => {
  const { id } = req.user;

  const { path: tempUpload, originalname } = req.file;
  const fileName = `${id}${originalname}`;
  const resultUpload = path.resolve(avatarsDir, fileName);

  await fs.rename(tempUpload, resultUpload);
  const avatarUrl = path.resolve('avatars', fileName);

  const updatedUser = await User.findByIdAndUpdate(
    id,
    { avatarUrl },
    { new: true }
  );
  if (!updatedUser) {
    throw httpError(404);
  }
  res.status(200).json({
    name: updatedUser.name,
    email: updatedUser.email,
    subscription: updatedUser.subscription,
    avatarUrl: updatedUser.avatarUrl,
  });
});

export default updateAvatar;
