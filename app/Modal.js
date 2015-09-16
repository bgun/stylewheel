var React = require('react-native');

var { Image, TouchableOpacity, View } = React;

var styles = require('./styles.js');

module.exports = React.createClass({
  render() {
    return (
      <View style={ styles.modal }>
        <View style={ styles.modalContent }>
          { this.props.children }
        </View>
        <TouchableHighlight onPress={ this.props.onClose }><Text style={ styles.modalCloseButton }>Close</Text></TouchableHighlight>
      </View>
    );
  }
});
