const request = require("request");

const forecast = (latitude, longitude, callback) => {
    const url = `http://api.weatherstack.com/current?access_key=9758d3d126300bbf3550b7113655ec2a&query=${latitude},${longitude}`
    request({ url, json: true }, (error, response) => {
        if (error) {
            callback('something wrong with the connection', undefined);
        } else if (response.body.success = false) {
            callback('cannot find location, please insert a valid location', undefined);
        } else {
            callback(undefined, response.body.location.region + ': ' + response.body.current.weather_descriptions[0] + '. its currently ' + response.body.current.temperature + ' celcius and it feels like ' + response.body.current.feelslike + ' celecius');
        }
    });
}

module.exports = forecast;






















  // const url = 'http://api.weatherstack.com/current?access_key=9758d3d126300bbf3550b7113655ec2a&query=59.3293,18.0686'
// request({ url , json: true }, (error, response)=>{
//   const data = response.body;
// console.log(data.location.region + ': ' + data.current.weather_descriptions[0] +'. its currently ' + data.current.temperature + ' celcius and it feels like ' + data.current.feelslike + ' celecius' );
// });
