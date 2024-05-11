import Contact from '../../dbModels/contactModel.js';
import httpError from '../../auxiliary/httpError.js';
import ctrlWrapper from '../../auxiliary/ctrlWrapper.js';

const updateContact = ctrlWrapper(async (req, res, next) => {
  const { id } = req.params;
  const { id: userId } = req.user;
  const updatedContact = await Contact.findByIdAndUpdate(id, req.body, {
    new: true,
  });
  if (!updatedContact) {
    throw httpError(404);
  }
  res.status(200).json(updatedContact);
});

export default updateContact;
