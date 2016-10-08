var React = require('react');
var ReactDOM = require('react-dom');

// ES6 destructuring syntax
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

var Main = require('Main');
var Weather = require('Weather');
var About = require('About');
var Examples = require('Examples');

ReactDOM.render(
  // router component setup
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
      <Route path="about" component={About} />
      <Route path="examples" component={Examples} />
      // don't use Link for navigation links use IndexLink instead for the root route
      <IndexRoute component={Weather} />
    </Route>
  </Router>,
  document.getElementById('app')
);