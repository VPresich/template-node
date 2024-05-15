import jwt from 'jsonwebtoken';
import User from '../dbModels/userModel.js';
import httpError from '../auxiliary/httpError.js';

const authMiddleware = async (req, _, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    return next(httpError(401));
  }
  const [bearer, token] = authHeader.split(' ');
  if (bearer !== 'Bearer') {
    return next(httpError(401));
  }
  jwt.verify(token, process.env.JWT_SECRET, async (err, decode) => {
    if (err) {
      return next(httpError(401));
    }
    try {
      const user = await User.findById(decode.id);
      if (!user || user.token !== token) {
        throw httpError(401);
      }
      if (!user._id || !user.name || !user.email || !user.subscription) {
        throw httpError(401);
      }
      req.user = {
        id: user._id,
        name: user.name,
        email: user.email,
        subscription: user.subscription,
        avatarUrl: user.avatarUrl,
      };
      next();
    } catch (error) {
      next(error);
    }
  });
};

export default authMiddleware;
