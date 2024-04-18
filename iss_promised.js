const request = require('request-promise-native');

const fetchMyIP = function (callback) {
  return request('https://api.ipify.org?format=json');
};

const fetchCoordsByIP = (ip, callback) => {
  const ip = JSON.parse(body).ip;
  return request(`http://ipwho.is/${ip}`);
}

fetchMyIP()
  .then(fetchCoordsByIP)
  .then(body => console.log(body));

module.exports = { fetchMyIP };