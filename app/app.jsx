var React = require('react');
var ReactDOM = require('react-dom');

var objOne = {
  name: 'Dee',
  location: 'Malaysia'
};

var objTwo = {
  age: 23,
  ...objOne
};

console.log(objTwo);

ReactDOM.render(
  <h1>Boilerplate app</h1>,
  document.getElementById('app')
);
