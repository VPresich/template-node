import Contact from '../../dbModels/contactModel.js';
import ctrlWrapper from '../../auxiliary/ctrlWrapper.js';

const createContact = ctrlWrapper(async (req, res, next) => { 
  const { id } = req.user;
  const contact = await Contact.create({
    ...req.body,
    owner: id,
  });
  res.status(201).json(contact);
});

export default createContact;
