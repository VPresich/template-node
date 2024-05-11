import Contact from '../../dbModels/contactModel.js';
import httpError from '../../auxiliary/httpError.js';
import ctrlWrapper from '../../auxiliary/ctrlWrapper.js';
import contactMsg from '../../auxiliary/constants/contactMsg.js';

const deleteContact = ctrlWrapper(async (req, res, next) => {
  const { id } = req.params;
  const { id: userId } = req.user;
  const removedContact = await Contact.findByIdAndDelete(id);
  if (!removedContact) {
    throw httpError(404);
  }
  if (!userId.equals(removedContact.owner)) {
    throw httpError(403, contactMsg.REMOVE_MSG);
  }
  res.status(200).json(removedContact);
});

export default deleteContact;
