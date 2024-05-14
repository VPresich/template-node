const EMAIL_PATTERN = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const PHONE_PATTERN = /^\(\d{3}\) \d{3}-\d{4}$/;

const EMAIL_PATTERN_MSG = 'Invalid email format';
const PHONE_PATTERN_MSG = 'Invalid phone format';

export default {
  EMAIL_PATTERN,
  EMAIL_PATTERN_MSG,
  PHONE_PATTERN,
  PHONE_PATTERN_MSG,
};
