export default {
  secret: process.env.JWT_KEY,
  expiresIn: process.env.JWT_EXPIRES_IN,
};
