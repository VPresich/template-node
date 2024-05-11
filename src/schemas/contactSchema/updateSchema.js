import Joi from 'joi';
import contactMsg from '../../auxiliary/constants/contactMsg.js';
import patterns from '../../auxiliary/constants/patterns.js';

export const updateSchema = Joi.object({
  name: Joi.string(),
  phone: Joi.string().pattern(patterns.PHONE_PATTERN).messages({
    'string.pattern.base': patterns.PHONE_PATTERN_MSG,
  }),
  email: Joi.string().pattern(patterns.EMAIL_PATTERN).messages({
    'string.pattern.base': patterns.EMAIL_PATTERN_MSG,
  }),
  favorite: Joi.boolean(),
})
  .min(1)
  .messages({ 'object.min': contactMsg.EMPTY_BODY_MSG });

export default updateSchema;
