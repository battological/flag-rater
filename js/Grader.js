var React = require('react');

var Grader = React.createClass({
  render() {
    return (
      <div className='grader'>
        <h1>Grader!</h1>
	<p>
	  {this.props.params.flag}
	</p>
      </div>
    )
  }
});

module.exports = Grader;
