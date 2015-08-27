var React = require('react-native');

var {
  ActionSheetIOS,
  Image,
  LayoutAnimation,
  StatusBarIOS,
  StyleSheet,
  Text,
  TouchableHighlight,
  View
} = React;

var Swiper = require('react-native-swiper');

var BraceletView = require('./BraceletView');
var NecklaceView = require('./NecklaceView');
var PurseView    = require('./PurseView');
var ScarfView    = require('./ScarfView');

var styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    flexDirection: 'row',
    left: -200
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
    backgroundColor: 'rgba(0,0,0,0.1)',
    width: 200
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
  outfitButton: {
    backgroundColor: 'rgba(255,255,255,0.8)',
    borderColor: 'rgba(50,100,150,0.2)',
    borderRadius: 10,
    borderWidth: 5,
    flex: 1,
    padding: 8,
    position: 'absolute',
      bottom: 10,
      left: 60,
      right: -140
  },
  outfitButtonText: {
    color: '#3366FF',
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  descriptionContainer: {
    backgroundColor: 'transparent',
    position: 'absolute',
      top: 0,
      left: 200,
      bottom: 0,
      right: -200,
  },
  description: {
    backgroundColor: 'rgba(0,0,0,0.6)',
    borderRadius: 10,
    flex: 1,
    margin: 10,
    marginBottom: 0,
    padding: 20
  },
  descriptionCopy: {
    color: '#FFFFFF'
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
};

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

var OutfitButton = React.createClass({
  render: function() {
    return (
      <TouchableHighlight onPress={ this.props.onPress }>
        <View style={ styles.outfitButton }>
          <Text style={ styles.outfitButtonText }>Select an outfit...</Text>
        </View>
      </TouchableHighlight>
    );
  }
});

var Menu = React.createClass({
  handlePress: function(itemGroup, track) {
    this.props.onSelect(itemGroup, track);
  },
  render: function() {
    return (
      <View style={ styles.menu }>
        <TouchableHighlight onPress={ this.handlePress.bind(this, 'scarf', 1) }>
          <Text style={{ padding: 10 }}>TOP: Scarf</Text>
        </TouchableHighlight>
        <TouchableHighlight onPress={ this.handlePress.bind(this, 'necklace', 1) }>
          <Text style={{ padding: 10 }}>TOP: Necklace</Text>
        </TouchableHighlight>
        <TouchableHighlight onPress={ this.handlePress.bind(this, 'bracelet', 2) }>
          <Text style={{ padding: 10 }}>BOTTOM: Bracelet</Text>
        </TouchableHighlight>
        <TouchableHighlight onPress={ this.handlePress.bind(this, 'purse', 2) }>
          <Text style={{ padding: 10 }}>BOTTOM: Purse</Text>
        </TouchableHighlight>
      </View>
    );
  }
})

module.exports = React.createClass({

  getInitialState: function() {
    return {
      outfit: 1,
      showMenu: false,
      topItem: 'scarf',
      bottomItem: 'purse'
    }
  },

  componentDidMount() {
    StatusBarIOS.setHidden(true);
  },

  scrolled: function(e, state, context) {
    this.setState({
      scarf: context.state.index
    });
  },

  toggleMenu: function() {
    LayoutAnimation.easeInEaseOut();
    this.setState({
      showMenu: !this.state.showMenu
    });
  },

  chooseOutfit: function() {
    ActionSheetIOS.showActionSheetWithOptions({
      options: OUTFITS,
      destructiveButtonIndex: this.state.outfit-1 // used for highlighting!
    },
    (buttonIndex) => {
      this.setState({ outfit: buttonIndex+1 });
    });
  },

  selectItem: function(itemGroup, track) {
    // track can be 1 or 2
    this.setState({
      topItem   : track === 1 ? itemGroup : this.state.topItem,
      bottomItem: track === 2 ? itemGroup : this.state.bottomItem,
    });
    this.toggleMenu();
  },

  render: function() {

    var itemGroups = {
      bracelet: [1, 2, 3, 4, 5, 6, 7, 8, 9].map(i => <BraceletView key={ i } index={ i }/>),
      necklace: [1, 2, 3, 4, 5, 6, 7, 8, 9].map(i => <NecklaceView key={ i } index={ i }/>),
      purse   : [1, 2, 3, 4, 5, 6, 7, 8, 9].map(i => <PurseView key={ i } index={ i }/>),
      scarf   : [1, 2, 3, 4, 5, 6, 7, 8, 9].map(i => <ScarfView key={ i } index={ i }/>)
    };

    var topItems    = itemGroups[this.state.topItem];
    var bottomItems = itemGroups[this.state.bottomItem];

    return (
      <View style={ this.state.showMenu ? styles.appContainerWithMenu : styles.appContainer }>
        <Menu onSelect={ this.selectItem } />
        <View style={styles.outfitContainer}>
          <Image style={ styles.outfitStyle } source={ images['outfit'+(this.state.outfit)]}>
            <Swiper showsPagination={false} contentContainerStyle={ styles.swiperTopStyle } onMomentumScrollEnd={ this.scrolled }>
              { topItems }
            </Swiper>
            <Swiper contentContainerStyle={ styles.swiperBotStyle }>
              { bottomItems }
            </Swiper>
          </Image>

          <TouchableHighlight onPress={ this.toggleMenu } style={{ position: 'absolute', left: 10, top: 10, width: 40, height: 40 }}>
            <Image style={{ width: 40, height: 40 }} source={ require('image!ic_handbag') } />
          </TouchableHighlight>

          <OutfitButton onPress={ this.chooseOutfit } />
        </View>
        <View style={ styles.descriptionContainer }>
          <View style={ styles.description }><Text style={ styles.descriptionCopy }>Here is a description of the top item. It's a scarf, or maybe it's a necklace.</Text></View>
          <View style={ styles.description }><Text style={ styles.descriptionCopy }>Here is a description of the bottom item. It's either a bracelet or a purse.</Text></View>
          <View style={ styles.description }><Text style={ styles.descriptionCopy }>Here is a description of the outfit. Looks very nice!</Text></View>
        </View>
      </View>
    );
  }
});

