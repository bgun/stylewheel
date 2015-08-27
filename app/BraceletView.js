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

var images = {
  bracelet1: require('image!bracelet1'),
  bracelet2: require('image!bracelet2'),
  bracelet3: require('image!bracelet3'),
  bracelet4: require('image!bracelet4'),
  bracelet5: require('image!bracelet5'),
  bracelet6: require('image!bracelet6'),
  bracelet7: require('image!bracelet7'),
  bracelet8: require('image!bracelet8'),
  bracelet9: require('image!bracelet9')
};

module.exports = BraceletView = React.createClass({
  render: function() {
    return (
      <View style={ styles.braceletViewStyle }>
        <Image style={ styles.braceletImageStyle } source={ images['bracelet'+this.props.index] } />
      </View>
    );
  }
});