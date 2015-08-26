var React = require('react-native');

var { Image, StyleSheet, Text, View } = React;

var Swiper = require('react-native-swiper');

var styles = StyleSheet.create({
  container: {
    flex: 1
  },
  outfitStyle: {
    flex: 1,
    height: 580,
    position: 'absolute',
      top: 0,
    width: 320
  },
  swiperTopStyle: {
    borderColor: '#FF0000',
    borderWidth: 5,
    height: 240,
    position: 'absolute',
      left: 50,
    width: 320
  },
  swiperBotStyle: {
    borderColor: '#0000FF',
    borderWidth: 10,
    flex: 1,
    height: 80,
    position: 'absolute',
      top: 0,
      left: 0,
    width: 320
  },
  scarfStyle: {
    alignItems: 'stretch',
    flex: 1
  },
  purseStyle: {
    alignItems: 'stretch',
    flex: 1
  },
  scarfImageStyle: {
    alignItems: 'stretch',
    flex: 1,
    width: 320,
    height: 200,
    top: 285,
    left: 2
  },
  purseImageStyle: {
    alignItems: 'stretch',
    flex: 1,
    width: 320,
    height: 200,
    top: -295
  }
});

var ScarfView = React.createClass({
  render: function() {
    return (
      <View style={ styles.scarfStyle }>
        <Image style={ styles.scarfImageStyle } source={ require('image!scarves'+this.props.index) } />
      </View>
    );
  }
});

var PurseView = React.createClass({
  render: function() {
    return (
      <View style={ styles.purseStyle }>
        <Image style={ styles.purseImageStyle } source={ require('image!purses'+this.props.index) } />
      </View>
    );
  }
});

module.exports = React.createClass({
  render: function() {
    return (
      <View style={styles.container}>
        <Image style={ styles.outfitStyle } source={ require('image!outfit1') } />
        <Swiper style={ styles.swiperTopStyle }>
          { [1,2,3,4,5,6,7,8,9].map(function(i) {
            <ScarfView index={ i } />
          }) }
        </Swiper>
        <Swiper style={ styles.swiperBotStyle }>
          { [1,2,3,4,5,6,7,8,9].map(function(i) {
            <PurseView index={ i } />
          }) }
        </Swiper>
      </View>
    );
  }
});

