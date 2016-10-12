var React = require('react');

// stateless component used for presentation only
// only contains a render method
// var About = React.createClass({
//   render: function () {
//     return (<h3>About component</h3>);
//   }
// });

// alternative syntax
var About = (props) => {
  return (
    <div>
      <h1 className="text-center">About</h1>
      <p>This is a weather application built on React.</p>
      <p>Here are some of the tools that have been used</p>
      <ul>
        <li><a href="http://facebook.github.io/react">React</a></li>
        <li><a href="http://openweathermap.org">Open Weather Map</a></li>
      </ul>
    </div>
  );
};

module.exports = About;