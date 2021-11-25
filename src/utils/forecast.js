const request = require('request');
const dotenv = require('dotenv');
dotenv.config();

const forecast = (latitude, longitude, callback) => {
    const token = process.env.WEATHER_TOKEN;
    console.log('AAA', token);
    const url = `http://api.weatherstack.com/current?access_key=${token}&query=${latitude},${longitude}`
    request({ url, json: true }, (error, response) => {
        if (error) {
            callback('something wrong with the connection', undefined);
        } else if (response.body.success = false) {
            callback('cannot find location, please insert a valid location', undefined);
        } else {
            callback(undefined, response.body.location.region + ': ' + response.body.current.weather_descriptions[0] + '. its currently ' + response.body.current.temperature + ' celecius and it feels like ' + response.body.current.feelslike + ' celecius. Note that the last' 
            + ' observation time: ' + response.body.current.observation_time);
        }
    });
}

module.exports = forecast;
