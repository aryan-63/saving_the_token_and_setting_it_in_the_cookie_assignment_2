const encrypt = require('./script');

// Sample payload and secret key
const payload = { userId: 123, role: 'admin' };
const secret = 'your_secret_key';

// Generate a JWT with a 1-hour expiry
try {
  const token = encrypt(payload, secret, '1h');
  console.log('Generated JWT:', token);
} catch (error) {
  console.error('Failed to generate JWT:', error.message);
}