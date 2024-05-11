import Joi from 'joi';
import contactMsg from '../auxiliary/constants/contactMsg';
import patterns from '../auxiliary/constants/patterns';

export const createContactSchema = Joi.object({
  name: Joi.string().required().messages({
    'any.required': contactMsg.NAME_MSG,
    'string.empty': contactMsg.NAME_EMPTY_MSG,
  }),

  phone: Joi.string().required().pattern(patternsPHONE_PATTERN).messages({
    'any.required': contactMsg.PHONE_MSG,
    'string.empty': contactMsg.PHONE_EMPTY_MSG,
    'string.pattern.base': patterns.PHONE_PATTERN_MSG,
  }),

  email: Joi.string().required().pattern(patterns.EMAIL_PATTERN).messages({
    'string.pattern.base': patterns.EMAIL_PATTERN_MSG,
  }),

  favorite: Joi.boolean(),
  'string.pattern.base': 'Invalid email format',
});

export const updateContactSchema = Joi.object({
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

export const updateFavoriteSchema = Joi.object({
  favorite: Joi.boolean()
    .required()
    .messages({ 'any.required': contactMsg.FAVORITE_MSG }),
});

export const idSchema = Joi.string().length(24).hex().messages({
  'string.length': contactMsg.ID_LENGTH_MSG,
  'string.hex': contactMsg.ID_TYPE_MSG,
});
