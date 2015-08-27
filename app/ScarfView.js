var React = require('react-native');

var { Image, StyleSheet, View } = React;

var styles = StyleSheet.create({
  scarfViewStyle: {
    alignItems: 'flex-start',
    flex: 1
  },
  scarfImageStyle: {
    alignItems: 'stretch',
    flex: 1,
    width: 320,
    top: 290,
    left: 2
  }
});

var images = {
  scarf1: require('image!scarves1'),
  scarf2: require('image!scarves2'),
  scarf3: require('image!scarves3'),
  scarf4: require('image!scarves4'),
  scarf5: require('image!scarves5'),
  scarf6: require('image!scarves6'),
  scarf7: require('image!scarves7'),
  scarf8: require('image!scarves8'),
  scarf9: require('image!scarves9')
};

module.exports = ScarfView = React.createClass({
  render: function() {
    return (
      <View style={ styles.scarfViewStyle }>
        <Image style={ styles.scarfImageStyle } source={ images['scarf'+this.props.index] } />
      </View>
    );
  }
});