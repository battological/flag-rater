var React = require('react');
var Link = require('react-router').Link;

var App = React.createClass({
  render() {
    return (
      <div className='app'>
        <h1>Welcome to Flag Rater!</h1>
        <Link to='/g/1'>Let's get started</Link>
      </div>
    )
  }
})

module.exports = App;
