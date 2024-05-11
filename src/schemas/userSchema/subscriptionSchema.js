import Joi from 'joi';
import userMsg from '../../auxiliary/constants/userMsg.js';

const subscriptionSchema = Joi.object({
  subscription: Joi.string()
    .required()
    .valid('starter', 'pro', 'business')
    .messages({
      'any.required': userMsg.SUBSCRIPTION_MSG,
      'any.only': userMsg.SUBSCRIPTION_ONLY_MSG,
    }),
});

export default subscriptionSchema;
