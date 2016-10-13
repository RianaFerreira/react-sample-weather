var React = require('react');

var ErrorModal = React.createClass({
  getDefaultProps: function () {
    return { title: 'Error' };
  },
  propTypes: {
    title: React.PropTypes.string,
    message: React.PropTypes.string.isRequired
  },
  componentDidMount: function () {
    // create new instance of modal that won't be displayed yet
    var modal = new Foundation.Reveal($('#error-modal'));
    modal.open();
  },
  render: function () {
    var {title, message} = this.props;
    
    return (
      <div id="error-modal" className="reveal tiny text-center" data-reveal="">
        <h4>{ title }</h4>
        <p>{ message }</p>
        <div>
          <button className="button hollow" data-close="">OK</button>
        </div>
      </div>
    );
  }
});

module.exports = ErrorModal;