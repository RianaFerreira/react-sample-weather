var React = require('react');
var ReactDOM = require('react-dom');

var objOne = { 
  name: 'Ri', 
  location: 'Brisbane'
};

var objTwo = { 
  age: 37, 
  ...objOne
};

console.log(objTwo);

ReactDOM.render(
  <h1>Boilerplate React App!</h1>,
  document.getElementById('app')
);