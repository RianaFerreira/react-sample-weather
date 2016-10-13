var React = require('react');

var WeatherForm = React.createClass({
  onFormSubmit: function (e) {
    e.preventDefault();
    
    var location = this.refs.inputElement.value;

    if (location.length > 0) {
      this.refs.inputElement.value = '';
      this.props.onSearch(location);
    }
  },
  render: function () {
    return (
      <form onSubmit={this.onFormSubmit}>
        <div>
          <input type='text' ref='inputElement' placeholder='Enter city name' />
        </div>
        <div>
          <button className="button expanded hollow">Get Weather</button>
        </div>
      </form>
    );
  }
});

module.exports = WeatherForm;