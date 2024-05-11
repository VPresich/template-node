import Joi from 'joi';
import contactMsg from '../../auxiliary/constants/contactMsg.js';
import ptrn from '../../auxiliary/constants/patterns.js';

const createSchema = Joi.object({
  name: Joi.string().required().messages({
    'any.required': contactMsg.NAME_MSG,
    'string.empty': contactMsg.NAME_EMPTY_MSG,
  }),

  phone: Joi.string().required().pattern(ptrn.PHONE_PATTERN).messages({
    'any.required': contactMsg.PHONE_MSG,
    'string.empty': contactMsg.PHONE_EMPTY_MSG,
    'string.pattern.base': ptrn.PHONE_PATTERN_MSG,
  }),

  email: Joi.string().required().pattern(ptrn.EMAIL_PATTERN).messages({
    'string.pattern.base': ptrn.EMAIL_PATTERN_MSG,
  }),

  favorite: Joi.boolean(),
});

export default createSchema;
