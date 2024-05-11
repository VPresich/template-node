import Contact from '../../dbModels/contactModel.js';
import httpError from '../../auxiliary/httpError.js';
import ctrlWrapper from '../../auxiliary/ctrlWrapper.js';
import contactMsg from '../../auxiliary/constants/contactMsg.js';

const updateContactFavoriteStatus = ctrlWrapper(async (req, res, next) => {
  const { id } = req.params;
  const { id: userId } = req.user;
  const updatedContact = await Contact.findByIdAndUpdate(id, req.body, {
    new: true,
  });
  if (!updatedContact) {
    throw httpError(404);
  }
  if (!userId.equals(updatedContact.owner)) {
    throw httpError(403, contactMsg.REMOVE_MSG);
  }
  res.status(200).json(updatedContact);
});

export default updateContactFavoriteStatus;
