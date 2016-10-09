var React = require('react');

var WeatherMessage = React.createClass({
  render: function () {
    // ES6 destructuring syntax
    var {temp, location} = this.props;
    return (
      <div>It is {temp} in {location}.</div>
    );
  }
});

module.exports = WeatherMessage;