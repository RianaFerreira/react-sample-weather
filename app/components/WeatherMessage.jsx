var React = require('react');

// var WeatherMessage = React.createClass({
//   render: function () {
//     // ES6 destructuring syntax
//     var {temp, location} = this.props;
//     return (
//       <div>It is {temp} in {location}.</div>
//     );
//   }
// });

// var WeatherMessage = (props) => {
//   var {temp, location} = props;
//   return (<div>It is {temp} in {location}.</div>);
// };

// destructuring props directly in args
var WeatherMessage = ({temp, location}) => {
  return (<div>It is {temp} in {location}.</div>);
};

module.exports = WeatherMessage;