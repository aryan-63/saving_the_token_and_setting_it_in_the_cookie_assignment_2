const jwt = require('jsonwebtoken');

/**
 * Generate a JWT with a payload and expiry time
 * @param {Object} payload - The data to encode in the JWT
 * @param {string} secret - The secret key used to sign the token
 * @param {string} [expiresIn='1h'] - Expiry duration (default: 1 hour)
 * @returns {string} - The generated JWT
 */
const encrypt = (payload, secret, expiresIn = '1h') => {
  try {
    // Generate a JWT token with the provided payload, secret, and expiry
    const token = jwt.sign(payload, secret, { expiresIn });
    return token;
  } catch (error) {
    console.error('Error generating JWT:', error.message);
    throw new Error('JWT generation failed');
  }
};

module.exports = encrypt;