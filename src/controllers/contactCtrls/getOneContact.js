import Contact from '../../dbModels/contactModel.js';
import httpError from '../../auxiliary/httpError.js';
import ctrlWrapper from '../../auxiliary/ctrlWrapper.js';
import contactMsg from '../../auxiliary/constants/contactMsg.js';

const getOneContact = ctrlWrapper(async (req, res, next) => {
  const { id } = req.params;
  const { id: userId } = req.user;
  const contact = await Contact.findById(id).populate(
    'owner',
    '_id name email subscription'
  );
  if (!contact) {
    throw httpError(404);
  }
  if (!userId.equals(contact.owner._id)) {
    throw httpError(403, contactMsg.ACCESS_MSG);
  }
  res.status(200).json(contact);
});

export default getOneContact;
