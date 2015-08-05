var React = require('react-native');

var { Image, StyleSheet, Text, View } = React;

var Swiper = require('react-native-swiper');

module.exports = React.createClass({
  render: function() {
    return (
      <View style={styles.container}>
        <Image source={ require('image!layer_1') } style={{ flex: 1 }}>
          <Swiper height={ 284 }>
            <View style={{ alignItems: 'stretch', flex: 1 }}>
              <Image source={ require('image!layer_2') } />
            </View>
            <View style={{ alignItems: 'stretch', flex: 1 }}>
              <Image source={ require('image!layer_3') } />
            </View>
          </Swiper>
          <Swiper height={ 284 }>
            <View style={{ alignItems: 'stretch', flex: 1 }}>
              <Image source={ require('image!layer_3') } style={{ flex: 1 }} />
            </View>
            <View style={{ alignItems: 'stretch', flex: 1 }}>
              <Image source={ require('image!layer_2') } style={{ flex: 1 }} />
            </View>
          </Swiper>
        </Image>
      </View>
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch',
    justifyContent: 'center',
    backgroundColor: '#F5FCFF',
  },
});