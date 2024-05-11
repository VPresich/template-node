import httpError from '../auxiliary/httpError.js';

const validateId = schema => {
  const func = (req, _, next) => {
    const { error } = schema.validate(req.params.id);
    if (error) {
      next(httpError(400, error.message));
    }
    next();
  };
  return func;
};

export default validateId;
