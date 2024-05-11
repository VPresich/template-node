import Joi from 'joi';
import ptrn from '../../auxiliary/constants/patterns.js';
import userMsg from '../../auxiliary/constants/userMsg.js';

const registerSchema = Joi.object({
  name: Joi.string().required().messages({
    'any.required': userMsg.NAME_MSG,
    'string.empty': userMsg.NAME_EMPTY_MSG,
  }),

  email: Joi.string().required().pattern(ptrn.EMAIL_PATTERN).messages({
    'any.required': userMsg.EMAIL_MSG,
    'string.empty': userMsg.EMAIL_EMPTY_MSG,
    'string.pattern.base': ptrn.EMAIL_PATTERN_MSG,
  }),
  password: Joi.string().required().min(6).messages({
    'any.required': userMsg.PASSWORD_MSG,
    'string.min': userMsg.PASSWORD_LENGTH_MSG,
  }),
});

export default registerSchema;
