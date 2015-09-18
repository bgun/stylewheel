var React = require('react-native');

var { Text, TouchableOpacity, View } = React;

var styles = require('./styles.js');

module.exports = React.createClass({
  render() {
    return (
      <View style={ styles.modal }>
        <TouchableOpacity onPress={ this.props.onClose }>
          <View style={ styles.modalContent }>
            { this.props.children }
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={ this.props.onClose }><Text style={ styles.modalCloseButton }>Close</Text></TouchableOpacity>
      </View>
    );
  }
});
