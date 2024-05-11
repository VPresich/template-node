import Joi from 'joi';
import contactMsg from '../../auxiliary/constants/contactMsg.js';

const idSchema = Joi.string().length(24).hex().messages({
  'string.length': contactMsg.ID_LENGTH_MSG,
  'string.hex': contactMsg.ID_TYPE_MSG,
});

export default idSchema;
