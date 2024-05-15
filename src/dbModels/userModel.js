import mongoose from 'mongoose';
import ptrn from '../auxiliary/constants/patterns.js';
import userMsg from '../auxiliary/constants/userMsg.js';

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, userMsg.NAME_MSG],
    },

    email: {
      type: String,
      required: [true, userMsg.EMAIL_MSG],
      unique: true,
      match: ptrn.EMAIL_PATTERN,
    },

    password: {
      type: String,
      required: [true, userMsg.PASSWORD_MSG],
    },

    subscription: {
      type: String,
      enum: ['starter', 'pro', 'business'],
      default: 'starter',
    },

    token: {
      type: String,
      default: null,
    },

    avatarUrl: {
      type: String,
      required: true,
    },
  },
  { versionKey: false, timestamps: true }
);

export default mongoose.model('User', userSchema);
