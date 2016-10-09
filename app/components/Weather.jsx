var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');

var Weather = React.createClass({
  getInitialState: function () {
    return {
      location: 'Brisbane',
      temp: 24
    }
  },
  handleSearch: function (location) {
    // this.setState({
    //   location: location,
    //   temp: 27
    // })
  },
  render: function () {
    // ES6 destructuring syntax
    var {temp, location} = this.state;

    return (
      <div>
        <h3>Get Weather</h3>
        <WeatherForm onSearch={this.handleSearch} />
        <WeatherMessage location={location} temp={temp} />
      </div>
    );
  }
});

module.exports = Weather;