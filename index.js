/**
 * Makes a single API request to retrieve the user's IP address.
 * Input:
 *   - A callback (to pass back an error or the IP string)
 * Returns (via Callback):
 *   - An error, if any (nullable)
 *   - The IP address as a string (null if error). Example: "162.245.144.188"
 */
const { fetchMyIP } = require('./iss');
fetchMyIP((error, ip) => {
  // use request to fetch IP address from JSON API
  if (error) {
    console.log("It didn't work!" , error);
    return;
  }

  console.log('It worked! Returned IP:' , ip);
  
// {"ip":"174.119.175.95"}
});

module.exports = { fetchMyIP };