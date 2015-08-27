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

var images = {
  purse1: require('image!purses1'),
  purse2: require('image!purses2'),
  purse3: require('image!purses3'),
  purse4: require('image!purses4'),
  purse5: require('image!purses5'),
  purse6: require('image!purses6'),
  purse7: require('image!purses7'),
  purse8: require('image!purses8'),
  purse9: require('image!purses9')
};

module.exports = PurseView = React.createClass({
  render: function() {
    return (
      <View style={ styles.purseViewStyle }>
        <Image style={ styles.purseImageStyle } source={ images['purse'+this.props.index] } />
      </View>
    );
  }
});