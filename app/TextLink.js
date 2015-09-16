var React = require('react-native');

var { LinkingIOS, Text, TouchableOpacity, View } = React;

var styles = require('./styles.js');

module.exports = React.createClass({
  doLink: function() {
    LinkingIOS.openURL(this.props.url);
  },
  render: function() {
    return <TouchableOpacity onPress={ this.doLink }><Text style={ styles.link }>{ this.props.children }</Text></TouchableOpacity>
  }
});