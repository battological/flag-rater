var React = require('react');

var Grader = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },

  componentWillMount() {
    var key = this.formatLocalStorage(this.props.params.flag1, this.props.params.flag2);
    if (localStorage.getItem(key)) {
      this.setState({
        pref: localStorage.getItem(key)
      });
    }
  },

  isPreferred(e) {
    return this.state && this.state.pref == e;
  },

  handleClick(e) {
    this.setState({
      pref: e.target.value
    })
  },

  next() {
    this.storePreference();
    
  },

  end() {
    this.storePreference();
    this.context.router.push('/');
  },
    
  storePreference() {
    var preferred = this.state.pref;
    var notPreferred = this.props.params.flag1;
    if (preferred == notPreferred) {
      notPreferred = this.props.params.flag2;
    }

    var key = this.formatLocalStorage(preferred, notPreferred);

    localStorage.setItem(key, preferred); 
  },

  formatLocalStorage(a, b) {
    var min = Math.min(a, b);
    var max = Math.max(a, b);
    return min+'/'+max;
  },

  render() {
    return (
      <div className='grader'>
        <h2>Which flag to you prefer?</h2>
	<div className='flag-grade'>
	  <img 
	    className='flag' 
	    src={'public/images/flags/'+flags[this.props.params.flag1].image} 
	    style={{width: '30%'}} />
	  <input 
	    type='radio' 
	    name='pref-flag' 
	    value={this.props.params.flag1}
            checked={this.isPreferred(this.props.params.flag1)}
	    onChange={this.handleClick} />
	</div>
	<div className='flag-grade'>
	  <img 
	    className='flag' 
	    src={'public/images/flags/'+flags[this.props.params.flag2].image} 
	    style={{width: '30%'}} />
	  <input 
	    type='radio' 
	    name='pref-flag' 
	    value={this.props.params.flag2} 
            checked={this.isPreferred(this.props.params.flag2)}
	    onChange={this.handleClick} />
	</div>
	<button
	  className='next'
	  onClick={this.next}>
	  Next
	</button>
	<button
	  className='next'
	  onClick={this.end} >
	  Finish
	</button>
      </div>
    )
  }
});

module.exports = Grader;
