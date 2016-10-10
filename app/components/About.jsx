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
  return (<h3>About Component</h3>);
};

module.exports = About;