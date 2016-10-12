var React = require('react');
var {Link} = require('react-router');

// var Examples = React.createClass({
//   render: function () {
//     return (<h3>Examples component</h3>);
//   }
// });

var Examples = (props) => {
  return (
    <div>
      <h1 className="text-center">Examples</h1>
      <p>Here are a few example location to try out:</p>
      <ol>
        <li><Link to="/?location=North Lakes">North Lakes</Link></li>
        <li><Link to="/?location=Port Elizabeth">Port Elizabeth</Link></li>
        <li><Link to="/?location=Perth">Perth</Link></li>
      </ol>
    </div>
  );
};

module.exports = Examples;