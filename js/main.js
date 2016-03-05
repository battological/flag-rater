var React = require('react');
var ReactDOM = require('react-dom');
var Router = require('react-router').Router;
var Route = require('react-router').Route;
var hashHistory = require('react-router').hashHistory;

var App = require('./App');
var Grader = require('./Grader');
var Results = require('./Results');

ReactDOM.render((
  <Router history={hashHistory}>
    <Route path='/' component={App} />
    <Route path='/g/:flag1/:flag2' component={Grader} />
    <Route path='/r' component={Results} />
  </Router>),
  document.getElementById('render-point')
);
