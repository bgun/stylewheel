var React = require('react-native');

var { Image, StyleSheet, View } = React;

var styles = StyleSheet.create({
  purseViewStyle: {
    alignItems: 'flex-start',
    flex: 1
  },
  purseImageStyle: {
    alignItems: 'stretch',
    flex: 1,
    width: 320,
    top: -285
  },
});


module.exports = PurseView = React.createClass({
  render: function() {
    return (
      <View style={ styles.purseViewStyle }>
        <Image style={ styles.purseImageStyle } source={ this.props.item.image } />
      </View>
    );
  }
});