const request = require('request');
const dotenv = require('dotenv');
dotenv.config();

const geacode = (address, callback) => {
  const token = process.env.GEOCODE_TOKEN;
  const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${address}.json?access_token=${token}&limit=1`;
  request({ url, json: true }, (error, response) => {
    if (error) {
      callback('unable to connect', undefined);
    } else if (response.body.features.length === 0) {
      callback('cannot find location, make sure you insert a valid location', undefined);
    } else {
      callback(undefined, {
        latitude: response.body.features[0].center[1],
        longitude: response.body.features[0].center[0],
        location: response.body.features[0].place_name,
      });
    }
  });
};

module.exports = geacode;
