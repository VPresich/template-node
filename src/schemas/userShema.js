export const subscriptionSchema = Joi.object({
  subscription: Joi.required().valid('starter', 'pro', 'business'),
});
