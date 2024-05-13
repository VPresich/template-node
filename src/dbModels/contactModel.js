import mongoose from 'mongoose';
import contactMsg from '../auxiliary/constants/contactMsg.js';
import ptrn from '../auxiliary/constants/patterns.js';

const contactSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, contactMsg.NAME_MSG],
    },

    phone: {
      type: String,
      required: [true, contactMsg.PHONE_MSG],
      match: ptrn.PHONE_PATTERN,
    },

    email: {
      type: String,
      match: ptrn.EMAIL_PATTERN,
    },

    favorite: {
      type: Boolean,
      default: false,
    },

    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
  },
  { versionKey: false, timestamps: true }
);

export default mongoose.model('Contact', contactSchema);
