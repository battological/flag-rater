var React = require('react');

var Grader = React.createClass({
  render() {
    return (
      <div className='grader'>
        <h2>Grade this flag!</h2>
	<div className='flag-grade'>
	  <img src={'public/images/flags/'+flags[this.props.params.flag]} className='flag' />
	  <form>
	    <input type='radio' name='grade' value='A'/>A
	    <input type='radio' name='grade' value='B'/>B
	    <input type='radio' name='grade' value='C'/>C
	    <input type='radio' name='grade' value='D'/>D
	    <input type='radio' name='grade' value='F'/>F
	  </form>
	</div>
      </div>
    )
  }
});

module.exports = Grader;
