var React = require('react');
var Link = require('react-router').Link;

var App = React.createClass({
  getInitialState() {
    return ({
      flags: this.getRandomFlags(0, 206)
    });
  },

  getRandomFlags(min, max) {
    var f1 = this.getRandomNumber(min, max);
    var f2;
    do {
      f2 = this.getRandomNumber(min, max);
    } while (f2 == f1);
    return [f1, f2];
  },

  getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  },

  render() {
    var judgments = []
    for (var i = 0; i < localStorage.length; i++) {
      var key = localStorage.key(i);
      var pref = localStorage.getItem(key);
      var notPref = key.split('/').filter(function(e) { return e != pref; });
      judgments.push(
        <li key={pref}>
          <Link to={'/g/'+pref+'/'+notPref}>
            <span className='winner'>{flags[pref].country}</span> vs.&nbsp;
            <span className='loser'>{flags[notPref].country}</span>
          </Link>
        </li>
      );
    }

    return (
      <div className='app'>
        <h2>Welcome to Flag Rater!</h2>
        <Link to={'/g/'+this.state.flags[0]+'/'+this.state.flags[1]}>Let's get started</Link>
	{localStorage.length > 0 && (
          <div className='judged'>
	    <h3>Flags you've judged</h3>
            <ul>
              {judgments}
             </ul>
          </div>
	)}
      </div>
    )
  } 
})

module.exports = App;
