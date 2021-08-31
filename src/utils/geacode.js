const request = require('request');

const geacode = (address, callback) => {
  const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${address}.json?access_token=pk.eyJ1IjoieWF6YW5uLWFiYmFzIiwiYSI6ImNrbXowb3MyNTA5Y3Iybm80Z2x1aDB5Y3MifQ.Z2fE45KkQ7CxQj8gFdVUsw&limit=1`
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



















// const url1 = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Stockholm.json?access_token=pk.eyJ1IjoieWF6YW5uLWFiYmFzIiwiYSI6ImNrbXowb3MyNTA5Y3Iybm80Z2x1aDB5Y3MifQ.Z2fE45KkQ7CxQj8gFdVUsw&limit=1'
// request({url: url1, json:true }, (error, response)=>{
//     const data = response.body;
//     const features = data.features;
//     if(error){
//       console.log('unable to connect to the location app');
//     }else if(features.length === 0){
//       console.log('didnt find location, make sure you insert location')
//     }else{

//       const latitude = features[0].center[1];
//       const longitude = features[0].center[0];
//       console.log(longitude, latitude);
//     }
// })