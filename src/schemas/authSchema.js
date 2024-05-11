import Joi from 'joi';
import { EMAIL_PATTERN } from '../helpers/constants.js';
import userMsg from '../auxiliary/constants/userMsg.js';

export const authRegisterSchema = Joi.object({
  name: Joi.string().required().messages({
    'any.required': userMsg.NAME_MSG,
    'string.empty': userMsg.NAME_EMPTY_MSG,
  }),

  email: Joi.string().required().pattern(EMAIL_PATTERN).messages({
    'any.required': userMsg.EMAIL_MSG,
    'string.empty': userMsg.EMAIL_EMPTY_MSG,
    'string.pattern.base': 'Invalid email format',
  }),
  password: Joi.string().required().min(6).messages({
    'any.required': userMsg.PASSWORD_MSG,
    'string.min': userMsg.PASSWORD_LENGTH_MSG,
  }),
});

export const authLoginSchema = Joi.object({
  email: Joi.string().required().pattern(EMAIL_PATTERN).messages({
    'any.required': userMsg.EMAIL_MSG,
    'string.empty': userMsg.EMAIL_EMPTY_MSG,
    'string.pattern.base': 'Invalid email format',
  }),
  password: Joi.string().required().min(6).messages({
    'any.required': userMsg.PASSWORD_MSG,
    'string.min': userMsg.PASSWORD_LENGTH_MSG,
  }),
});
