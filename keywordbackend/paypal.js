const paypal = require("@paypal/checkout-server-sdk");

// Configure PayPal environment (Sandbox or Live)
function environment() {
  let clientId = process.env.PAYPAL_CLIENT_ID;
  let clientSecret = process.env.PAYPAL_CLIENT_SECRET;

  // Switch between SandboxEnvironment and LiveEnvironment
  return new paypal.core.SandboxEnvironment(clientId, clientSecret);
  // For production, use LiveEnvironment:
  // return new paypal.core.LiveEnvironment(clientId, clientSecret);
}

// Create and export PayPal HTTP client
function client() {
  return new paypal.core.PayPalHttpClient(environment());
}

module.exports = { client };
