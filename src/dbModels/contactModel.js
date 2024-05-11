import mongoose from 'mongoose';
import co from '../auxiliary/constants/userMsg';

const contactSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, userMsg.CONTACT_NAME_MSG],
    },

    phone: {
      type: String,
      required: [true, userMsg.CONTACT_PHONE_MSG],
    },

    email: {
      type: String,
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
