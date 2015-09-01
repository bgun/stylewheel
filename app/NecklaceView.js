var React = require('react-native');

var { Image, StyleSheet, View } = React;

var styles = StyleSheet.create({
  necklaceViewStyle: {
    alignItems: 'flex-start',
    flex: 1
  },
  necklaceImageStyle: {
    alignItems: 'stretch',
    flex: 1,
    width: 320,
    top: 280,
    left: 3
  },
});

var images = {
  necklace1: require('image!necklace1'),
  necklace2: require('image!necklace2'),
  necklace3: require('image!necklace3'),
  necklace4: require('image!necklace4'),
  necklace5: require('image!necklace5'),
  necklace6: require('image!necklace6'),
  necklace7: require('image!necklace7'),
  necklace8: require('image!necklace8'),
  necklace9: require('image!necklace9')
};

module.exports = NecklaceView = React.createClass({
  render: function() {
    return (
      <View style={ styles.necklaceViewStyle }>
        <Image style={ styles.necklaceImageStyle } source={ this.props.item.image } />
      </View>
    );
  }
});