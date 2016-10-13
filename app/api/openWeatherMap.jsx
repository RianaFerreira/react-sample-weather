var axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=9974208d09a362b7ece2090c43aefde3&units=metric';

module.exports = {
  getTemp: function (location) {
    // convert spaces in the location string to % for browser
    var encodedLocation = encodeURIComponent(location);

    // ES6 template strings `${inject variables inside a string}`
    var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

    return axios.get(requestUrl).then(function (response) {
      // successfull request
      // JS function that works with DevTools
      if (response.data.cod && response.data.message) {
        console.log('successful axios request has failed');
        console.log(response);
        throw new Error(response.data.message);
      } else {
        return response.data.main.temp;
      }
    }, function (response) {
      // failed request
      throw new Error(response.response.data.message);
    })
  }
}