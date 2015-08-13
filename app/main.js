var React = require('react-native');

var { Image, StyleSheet, Text, View } = React;

var Swiper = require('react-native-swiper');

var styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
  },
});
var outfitStyle = {
  flex: 1,
  width: 320,
  height: 568
}
var swiperTopStyle = {
  alignItems: 'stretch',
  flex: 1
};
var swiperBotStyle = {
  alignItems: 'stretch',
  flex: 1
};
var imageStyle = {
  alignItems: 'stretch',
  flex: 1,
  width: 520,
  height: 1000,
};

module.exports = React.createClass({
  render: function() {
    return (
      <View style={styles.container}>
        <Image style={ outfitStyle } source={ require('image!outfit1') }>
          <Swiper height={ 400 }>
            <View style={ swiperTopStyle }><Image style={ imageStyle } source={ require('image!scarves1') } /></View>
            <View style={ swiperTopStyle }><Image style={ imageStyle } source={ require('image!scarves2') } /></View>
            <View style={ swiperTopStyle }><Image style={ imageStyle } source={ require('image!scarves3') } /></View>
            <View style={ swiperTopStyle }><Image style={ imageStyle } source={ require('image!scarves4') } /></View>
            <View style={ swiperTopStyle }><Image style={ imageStyle } source={ require('image!scarves5') } /></View>
            <View style={ swiperTopStyle }><Image style={ imageStyle } source={ require('image!scarves6') } /></View>
            <View style={ swiperTopStyle }><Image style={ imageStyle } source={ require('image!scarves7') } /></View>
            <View style={ swiperTopStyle }><Image style={ imageStyle } source={ require('image!scarves8') } /></View>
            <View style={ swiperTopStyle }><Image style={ imageStyle } source={ require('image!scarves9') } /></View>
          </Swiper>
          <Swiper style={{ height: 400, top: -200 }}>
            <View style={ swiperBotStyle }><Image style={ imageStyle } source={ require('image!purses1') } /></View>
            <View style={ swiperBotStyle }><Image style={ imageStyle } source={ require('image!purses2') } /></View>
            <View style={ swiperBotStyle }><Image style={ imageStyle } source={ require('image!purses3') } /></View>
            <View style={ swiperBotStyle }><Image style={ imageStyle } source={ require('image!purses4') } /></View>
            <View style={ swiperBotStyle }><Image style={ imageStyle } source={ require('image!purses5') } /></View>
            <View style={ swiperBotStyle }><Image style={ imageStyle } source={ require('image!purses6') } /></View>
            <View style={ swiperBotStyle }><Image style={ imageStyle } source={ require('image!purses7') } /></View>
            <View style={ swiperBotStyle }><Image style={ imageStyle } source={ require('image!purses8') } /></View>
            <View style={ swiperBotStyle }><Image style={ imageStyle } source={ require('image!purses9') } /></View>
          </Swiper>
        </Image>
      </View>
    );
  }
});

