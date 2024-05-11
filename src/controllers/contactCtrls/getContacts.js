import Contact from '../../dbModels/contactModel.js';
import httpError from '../../auxiliary/httpError.js';
import ctrlWrapper from '../../auxiliary/ctrlWrapper.js';
import contactMsg from '../../auxiliary/constants/contactMsg.js';

const getContacts = ctrlWrapper(async (req, res, next) => {
  const { page = 1, limit = 10, ...filters } = req.query;
  const { id: userId } = req.user;

  const pageNumber = parseInt(page);
  const limitNumber = parseInt(limit);

  const startIndex = (pageNumber - 1) * limitNumber;

  const query = {};

  Object.keys(filters).forEach(key => {
    if (filters[key] === 'true' || filters[key] === 'false') {
      query[key] = filters[key] === 'true';
    } else {
      query[key] = filters[key];
    }
  });

  const result = {};

  result.totalRecords = await Contact.countDocuments({
    ...query,
    owner: userId,
  }).exec();
  result.totalPages = Math.ceil(result.totalRecords / limitNumber);

  if (pageNumber > result.totalPages) {
    throw httpError(404, contactMsg.PAGE_NOTFOUND_MSG);
  }

  result.page = pageNumber;
  result.limit = limitNumber;

  result.contacts = await Contact.find({ ...query, owner: userId })
    .limit(limitNumber)
    .skip(startIndex)
    .exec();

  res.status(200).json(result);
});

export default getContacts;
