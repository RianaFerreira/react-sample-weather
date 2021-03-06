var React = require('react');

// ES6 destructuring syntax
var {Link, IndexLink} = require('react-router');

// var Nav = React.createClass({
//   render: function () {
//     return (
//       <div>
//         <h2>Nav Component</h2>
//         <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Get Weather</IndexLink>
//         <span> | </span>
//         <Link to="/about" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>About</Link>
//         <span> | </span>
//         <Link to="/examples" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Examples</Link>
//       </div>
//     );
//   }
// });

var Nav = React.createClass({
  onSearch: function (event) {
    event.preventDefault();
    
    var location = this.refs.searchInput.value;
    // encode location string before adding it to the url
    var encodedLocation = encodeURIComponent(location);

    if (location.length > 0) {
      this.refs.searchInput.value = '';
      // '#/' query string for home page
      window.location.hash = '#/?location=' + encodedLocation;
    }
  },
  render: function () {
    return (
      <div className="top-bar">
        <div className="top-bar-left">
          <ul className="menu">
            <li className="menu-text">React Weather App</li>
            <li><IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Get Weather</IndexLink></li>
            <li><Link to="/about" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>About</Link></li>
            <li><Link to="/examples" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Examples</Link></li>
          </ul>
        </div>

        <div className="top-bar-right">
          <form onSubmit={ this.onSearch }>
            <ul className="menu">
              <li><input type="search" ref="searchInput" placeholder="Search weather by city" /></li>
              <li><input type="submit" className="button" value="Get Weather" /></li>
            </ul>
          </form>
        </div>
      </div>
    );
  }
});

module.exports = Nav;

var oldStatelessNavComponent = (
  <div>
    <h2>Nav Component</h2>
    <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Get Weather</IndexLink>
    <span> | </span>
    <Link to="/about" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>About</Link>
    <span> | </span>
    <Link to="/examples" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Examples</Link>
  </div>
);