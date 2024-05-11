import mongoose from 'mongoose';
import { EMAIL_PATTERN } from '../auxiliary/constants/patterns';
import {
  NAME_MSG,
  EMAIL_MSG,
  PASSWORD_MSG,
} from '../auxiliary/constants/userMsg';

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, NAME_MSG],
    },

    email: {
      type: String,
      required: [true, EMAIL_MSG],
      unique: true,
      match: EMAIL_PATTERN,
    },

    password: {
      type: String,
      required: [true, PASSWORD_MSG],
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
  },
  { versionKey: false, timestamps: true }
);

export default mongoose.model('User', userSchema);
