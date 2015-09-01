var React = require('react-native');

var { Image, StyleSheet, View } = React;

var styles = StyleSheet.create({
  braceletViewStyle: {
    alignItems: 'flex-start',
    flex: 1
  },
  braceletImageStyle: {
    alignItems: 'stretch',
    flex: 1,
    width: 320,
    top: -275,
    left: 6
  },
});


module.exports = BraceletView = React.createClass({
  render: function() {
    return (
      <View style={ styles.braceletViewStyle }>
        <Image style={ styles.braceletImageStyle } source={ this.props.item.image } />
      </View>
    );
  }
});