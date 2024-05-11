import Joi from 'joi';
import contactMsg from '../../auxiliary/constants/contactMsg.js';

const updateFavoriteSchema = Joi.object({
  favorite: Joi.boolean()
    .required()
    .messages({ 'any.required': contactMsg.FAVORITE_MSG }),
});

export default updateFavoriteSchema;
