var React = require('react-native');

var { ActionSheetIOS, Image, StyleSheet, Text, TouchableHighlight, View } = React;

var Swiper = require('react-native-swiper');

var styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    flexDirection: 'row',
    left: -80
  },
  appContainerWithMenu: {
    flex: 1,
    flexDirection: 'row',
    left: 0
  },
  outfitContainer: {
    flex: 1,
    flexDirection: 'column'
  },
  menu: {
    backgroundColor: 'rgba(0,0,0,0.3)',
    width: 80
  },
  outfitStyle: {
    alignItems: 'stretch',
    flex: 1,
    justifyContent: 'center',
    width: 320
  },
  swiperTopStyle: {
    alignItems: 'flex-start',
    borderWidth: 5
  },
  swiperBotStyle: {
    alignItems: 'flex-start',
    height: 200
  },
  scarfViewStyle: {
    alignItems: 'flex-start',
    flex: 1
  },
  purseViewStyle: {
    alignItems: 'flex-start',
    flex: 1
  },
  scarfImageStyle: {
    alignItems: 'stretch',
    flex: 1,
    width: 320,
    top: 285,
    left: 2
  },
  purseImageStyle: {
    alignItems: 'stretch',
    flex: 1,
    width: 320,
    top: -295
  },
  numberStyle: {
    fontSize: 20,
    height: 20,
    position: 'absolute',
      bottom: 200,
      right: 0,
    textAlign: 'center',
    width: 40
  }
});

var images = {
  outfit1 : require('image!outfit1'),
  outfit2 : require('image!outfit2'),
  outfit3 : require('image!outfit3'),
  outfit4 : require('image!outfit4'),
  outfit5 : require('image!outfit5'),
  outfit6 : require('image!outfit6'),
  outfit7 : require('image!outfit7'),
  outfit8 : require('image!outfit8'),
  outfit9 : require('image!outfit9'),
  outfit10: require('image!outfit10'),
  // scarves
  scarf1: require('image!scarves1'),
  scarf2: require('image!scarves2'),
  scarf3: require('image!scarves3'),
  scarf4: require('image!scarves4'),
  scarf5: require('image!scarves5'),
  scarf6: require('image!scarves6'),
  scarf7: require('image!scarves7'),
  scarf8: require('image!scarves8'),
  scarf9: require('image!scarves9'),
  // purses
  purse1: require('image!purses1'),
  purse2: require('image!purses2'),
  purse3: require('image!purses3'),
  purse4: require('image!purses4'),
  purse5: require('image!purses5'),
  purse6: require('image!purses6'),
  purse7: require('image!purses7'),
  purse8: require('image!purses8'),
  purse9: require('image!purses9'),
}

var ScarfView = React.createClass({
  render: function() {
    return (
      <View style={ styles.scarfViewStyle }>
        <Text style={ styles.numberStyle }>{ this.props.index }</Text>
        <Image style={ styles.scarfImageStyle } source={ images['scarf'+this.props.index] } />
      </View>
    );
  }
});

var PurseView = React.createClass({
  render: function() {
    return (
      <View style={ styles.purseViewStyle }>
        <Text style={ styles.numberStyle }>{ this.props.index }</Text>
        <Image style={ styles.purseImageStyle } source={ images['purse'+this.props.index] } />
      </View>
    );
  }
});

var OUTFITS = [
  'pink dress 1',
  'pink blazer',
  'pink dress 2',
  'black and gold',
  'black dress',
  'white and black stripes',
  'cape cod',
  'green',
  'leopard',
  'white'
];

module.exports = React.createClass({
  getInitialState: function() {
    return {
      outfit: 1,
      scarf: 0,
      showMenu: false
    }
  },
  scrolled: function(e, state, context) {
    this.setState({
      scarf: context.state.index
    });
  },
  toggleMenu: function() {
    this.setState({
      showMenu: !this.state.showMenu
    });
  },
  chooseOutfit: function() {
    console.log("click");
    this.setState({
      showMenu: true
    });
    ActionSheetIOS.showActionSheetWithOptions({
      options: OUTFITS,
      destructiveButtonIndex: this.state.outfit-1 // used for highlighting!
    },
    (buttonIndex) => {
      this.setState({ outfit: buttonIndex+1 });
    });
  },

  render: function() {
    return (
      <View style={ this.state.showMenu ? styles.appContainerWithMenu : styles.appContainer }>
        <View style={ styles.menu }>
          <Text>Hello Menu!</Text>
        </View>
        <View style={styles.outfitContainer}>
          <Image style={ styles.outfitStyle } source={ images['outfit'+(this.state.outfit)]}>
            <Swiper contentContainerStyle={ styles.swiperTopStyle } onMomentumScrollEnd={ this.scrolled.bind(this) }>
              { [1,2,3,4,5,6,7,8,9].map(function(i) {
                return <ScarfView key={ i } index={ i } />;
              }) }
            </Swiper>
            <Swiper contentContainerStyle={ styles.swiperBotStyle }>
              { [1,2,3,4,5,6,7,8,9].map(function(i) {
                return <PurseView key={ i } index={ i } />;
              }) }
            </Swiper>
          </Image>
          <TouchableHighlight onPress={ this.toggleMenu } style={{ backgroundColor: '#00FF00', position: 'absolute', left: 10, top: 10, width: 50, height: 50 }}>
            <Text>hiii</Text>
          </TouchableHighlight>
          <TouchableHighlight onPress={ this.chooseOutfit }>
            <Text style={{ flex: 1, backgroundColor: '#FF0000', height: 30 }}>choose an outfit</Text>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
});

