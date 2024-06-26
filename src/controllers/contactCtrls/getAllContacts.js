import Contact from '../../dbModels/contactModel.js';
import ctrlWrapper from '../../auxiliary/ctrlWrapper.js';

const getAllContacts = ctrlWrapper(async (req, res) => {
  const { id: userId } = req.user;
  const contacts = await Contact.find({ owner: userId }).populate(
    'owner',
    '_id name email subscription'
  );
  res.status(200).json(contacts);
});

export default getAllContacts;
