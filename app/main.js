var React = require('react-native');
var _     = require('lodash');

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

var data = require('./data.js');

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
      left: 520,
      bottom: 0,
      right: 120,
  },
  descriptionContainerOpen: {
    backgroundColor: 'transparent',
    position: 'absolute',
    top: 0,
    left: 200,
    bottom: 0,
    right: -200,
  },
  description: {
    backgroundColor: 'rgba(0,0,0,0.6)',
    borderBottomColor: 'rgba(255,255,255,0.2)',
    borderBottomWidth: 0.5,
    flex: 1,
    padding: 20
  },
  descriptionName: {
    color: '#FFFFFF',
    fontSize: 30
  },
  descriptionCopy: {
    color: '#FFFFFF'
  },
  descriptionLink: {
    color: '#3355FF'
  },
  descriptionPrice: {
    color: '#DDDDDD',
    fontSize: 24
  }
});


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
        <TouchableHighlight onPress={ this.handlePress.bind(this, 'SCARVES', 1) }>
          <Text style={{ padding: 10 }}>TOP: Scarf</Text>
        </TouchableHighlight>
        <TouchableHighlight onPress={ this.handlePress.bind(this, 'NECKLACES', 1) }>
          <Text style={{ padding: 10 }}>TOP: Necklace</Text>
        </TouchableHighlight>
        <TouchableHighlight onPress={ this.handlePress.bind(this, 'BRACELETS', 2) }>
          <Text style={{ padding: 10 }}>BOTTOM: Bracelet</Text>
        </TouchableHighlight>
        <TouchableHighlight onPress={ this.handlePress.bind(this, 'PURSES', 2) }>
          <Text style={{ padding: 10 }}>BOTTOM: Purse</Text>
        </TouchableHighlight>
      </View>
    );
  }
})

module.exports = React.createClass({

  getInitialState: function() {
    return {
      outfitIndex: 0,
      showMenu   : false,
      showDesc   : false,
      topType    : 'NECKLACES',
      topIndex   : 0,
      bottomType : 'PURSES',
      bottomIndex: 0
    }
  },

  componentDidMount() {
    StatusBarIOS.setHidden(true);
  },

  scrolledTop: function(e, state, context) {
    this.setState({
      topIndex: context.state.index
    });
  },

  scrolledBottom: function(e, state, context) {
    this.setState({
      bottomIndex: context.state.index
    });
  },

  toggleMenu: function() {
    LayoutAnimation.easeInEaseOut();
    this.setState({
      showMenu: !this.state.showMenu
    });
  },

  toggleDesc: function() {
    LayoutAnimation.easeInEaseOut();
    this.setState({
      showDesc: !this.state.showDesc
    });
  },

  chooseOutfit: function() {
    ActionSheetIOS.showActionSheetWithOptions({
      options: data['OUTFITS'].map(o => o.name),
      destructiveButtonIndex: this.state.outfitIndex // used for highlighting!
    },
    (buttonIndex) => {
      this.setState({ outfitIndex: buttonIndex });
    });
  },

  selectItem: function(itemGroup, track) {
    // track can be 1 or 2
    this.setState({
      topType   : track === 1 ? itemGroup : this.state.topType,
      bottomType: track === 2 ? itemGroup : this.state.bottomType,
    });
    this.toggleMenu();
  },

  render: function() {

    var itemGroups = {
      BRACELETS: data['BRACELETS'].map((item, index) => <BraceletView key={ index } item={ item }/>),
      NECKLACES: data['NECKLACES'].map((item, index) => <NecklaceView key={ index } item={ item }/>),
      PURSES   : data['PURSES'   ].map((item, index) => <PurseView    key={ index } item={ item }/>),
      SCARVES  : data['SCARVES'  ].map((item, index) => <ScarfView    key={ index } item={ item }/>)
    };

    var topItems    = itemGroups[this.state.topType];
    var bottomItems = itemGroups[this.state.bottomType];

    var topItem    = data[this.state.topType   ][this.state.topIndex   ];
    var bottomItem = data[this.state.bottomType][this.state.bottomIndex];
    var outfitItem = data['OUTFITS'][this.state.outfitIndex];

    return (
      <View style={ this.state.showMenu ? styles.appContainerWithMenu : styles.appContainer }>
        <Menu onSelect={ this.selectItem } />
        <View style={ styles.outfitContainer }>
          <Image style={ styles.outfitStyle } source={ outfitItem.image }>
            <Swiper showsPagination={false} contentContainerStyle={ styles.swiperTopStyle } onMomentumScrollEnd={ this.scrolledTop }>
              { topItems }
            </Swiper>
            <Swiper contentContainerStyle={ styles.swiperBotStyle } onMomentumScrollEnd={ this.scrolledBottom }>
              { bottomItems }
            </Swiper>
          </Image>

          <TouchableHighlight onPress={ this.toggleMenu } style={{ position: 'absolute', left: 10, top: 10, width: 40, height: 40 }}>
            <Image style={{ width: 40, height: 40 }} source={ require('image!ic_handbag') } />
          </TouchableHighlight>

          <TouchableHighlight onPress={ this.toggleDesc } style={{ position: 'absolute', right: 10, top: 10, width: 40, height: 40 }}>
            <Image style={{ width: 40, height: 40 }} source={ require('image!ic_info') } />
          </TouchableHighlight>

          <OutfitButton onPress={ this.chooseOutfit } />
        </View>
        <View style={ this.state.showDesc ? styles.descriptionContainerOpen : styles.descriptionContainer }>
          <View style={ styles.description }>
            <Text style={ styles.descriptionName  }>{ topItem.name }</Text>
            <Text style={ styles.descriptionCopy  }>{ topItem.description }</Text>
            <Text style={ styles.descriptionLink  }>{ topItem.link }</Text>
            <Text style={ styles.descriptionPrice }>{ topItem.price }</Text>
          </View>
          <View style={ styles.description }>
            <Text style={ styles.descriptionName  }>{ bottomItem.name }</Text>
            <Text style={ styles.descriptionCopy  }>{ bottomItem.description }</Text>
            <Text style={ styles.descriptionLink  }>{ bottomItem.link }</Text>
            <Text style={ styles.descriptionPrice }>{ bottomItem.price }</Text>
          </View>
          <View style={ styles.description }>
            <Text style={ styles.descriptionName  }>{ outfitItem.name }</Text>
            <Text style={ styles.descriptionCopy  }>{ outfitItem.description }</Text>
            <Text style={ styles.descriptionLink  }>{ outfitItem.link }</Text>
            <Text style={ styles.descriptionPrice }>{ outfitItem.price }</Text>
          </View>
        </View>
      </View>
    );
  }
});

