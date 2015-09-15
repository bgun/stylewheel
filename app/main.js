var React        = require('react-native');
var Swiper       = require('react-native-swiper');
var Dimensions   = require('Dimensions');
var ActivityView = require('react-native-activity-view');
var _            = require('lodash');

var {
  ActionSheetIOS,
  Image,
  LayoutAnimation,
  LinkingIOS,
  PixelRatio,
  StatusBarIOS,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  View
} = React;


var wh = Dimensions.get('window').height;
var ww = Dimensions.get('window').width;

var BraceletView = require('./BraceletView');
var NecklaceView = require('./NecklaceView');
var PurseView    = require('./PurseView');
var ScarfView    = require('./ScarfView');

var styles = require('./styles.js');
var data = require('./data.js');

var ICON_SIZE = 50;

var Modal = React.createClass({
  render() {
    return (
      <View style={ styles.modal }>
        <View style={ styles.modalContent }>
        { this.props.children }
        </View>
        <TouchableHighlight onPress={ this.props.onClose }><Text style={ styles.modalCloseButton }>Close</Text></TouchableHighlight>
      </View>
    );
  }
});

var TextLink = React.createClass({
  doLink: function() {
    LinkingIOS.openURL(this.props.url);
  },
  render: function() {
    return <TouchableOpacity onPress={ this.doLink }><Text style={ styles.link }>{ this.props.children }</Text></TouchableOpacity>
  }
});

var OutfitButton = React.createClass({
  render: function() {
    return (
      <TouchableOpacity onPress={ this.props.onPress }>
        <View style={ styles.outfitButton }>
          <Text style={ styles.outfitButtonText }>Select an outfit...</Text>
        </View>
      </TouchableOpacity>
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
        <Text style={ styles.menuHeading }>TOP</Text>
        <TouchableOpacity onPress={ this.handlePress.bind(this, 'SCARVES', 1) }>
          <Text style={ styles.menuButton }>Scarf</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={ this.handlePress.bind(this, 'NECKLACES', 1) }>
          <Text style={ styles.menuButton }>Necklace</Text>
        </TouchableOpacity>

        <Text style={ styles.menuHeading }>BOTTOM</Text>
        <TouchableOpacity onPress={ this.handlePress.bind(this, 'BRACELETS', 2) }>
          <Text style={ styles.menuButton }>Bracelet</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={ this.handlePress.bind(this, 'PURSES', 2) }>
          <Text style={ styles.menuButton }>Purse</Text>
        </TouchableOpacity>

        <Text style={ styles.menuHeading }>ABOUT US</Text>
        <TouchableOpacity onPress={ this.props.handleContactButton }>
          <Text style={ styles.menuButtonContact }>Contact</Text>
        </TouchableOpacity>
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
      showContactModal: null,
      topType    : 'NECKLACES',
      topIndex   : 0,
      bottomType : 'BRACELETS',
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

  getRenderImage: function() {
    var topItemType = this.state.topType    === 'SCARVES' ? 'scarves' : 'necklace';
    var botItemType = this.state.bottomType === 'PURSES'  ? 'purses'  : 'bracelet';
    var layer1 = 'outfit' +    (this.state.outfitIndex+1);
    var layer2 = topItemType + (this.state.topIndex);
    var layer3 = botItemType + (this.state.bottomIndex);
    return 'http://stylewheel-backend.herokuapp.com/render?layer1='+layer1+'&layer2='+layer2+'&layer3='+layer3;
  },

  selectItem: function(itemGroup, track) {
    // track can be 1 or 2
    this.setState({
      topType    : track === 1 ? itemGroup : this.state.topType,
      topIndex   : track === 1 ? 1         : this.state.topIndex, // reset to first (non-blank) image when you choose from menu
      bottomType : track === 2 ? itemGroup : this.state.bottomType,
      bottomIndex: track === 2 ? 1         : this.state.bottomIndex // reset to first (non-blank) image when you choose from menu
    });
    console.log(this.state);
    this.toggleMenu();
  },

  handleContactButton: function() {
    console.log("contact us button pressed");
    this.setState({
      showContactModal: true
    });
  },

  closeModal: function() {
    this.setState({
      showMenu   : false,
      showContactModal: false
    });
  },

  handleItemPress: function() {
    console.log("press bracelet");
  },

  handleShare: function() {
    var t = this;
    ActivityView.show({
      text: "Check out the look I created using the Style Wheel app!",
      url: "http://thestylewheel.com",
      imageUrl: t.getRenderImage()
    });
    t.setState({
      rendering: true
    });
    setTimeout(function() {
      t.setState({
        rendering: false
      });
    }, 5000);
  },

  render: function() {

    var itemGroups = {
      BRACELETS: data['BRACELETS'].map((item, index) => <BraceletView key={ index } item={ item } handlePress={ this.handleItemPress } />),
      NECKLACES: data['NECKLACES'].map((item, index) => <NecklaceView key={ index } item={ item } handlePress={ this.handleItemPress } />),
      PURSES   : data['PURSES'   ].map((item, index) => <PurseView    key={ index } item={ item } handlePress={ this.handleItemPress } />),
      SCARVES  : data['SCARVES'  ].map((item, index) => <ScarfView    key={ index } item={ item } handlePress={ this.handleItemPress } />)
    };

    var topItems    = itemGroups[this.state.topType];
    var bottomItems = itemGroups[this.state.bottomType];

    var topItem    = data[this.state.topType   ][this.state.topIndex   ];
    var bottomItem = data[this.state.bottomType][this.state.bottomIndex];
    var outfitItem = data['OUTFITS'][this.state.outfitIndex];

    return (
      <View style={ styles.appContainer }>
        <Menu onSelect={ this.selectItem } handleContactButton={ this.handleContactButton } />
        <View style={[ styles.mainContainer, (this.state.showMenu ? styles.withMenu : null)]}>
          <View ref='outfit' style={ styles.outfitContainer }>
            <Image style={ styles.outfitImageStyle } source={ outfitItem.image } />
            <View style={ styles.swipers }>
              <Swiper height={wh/2-20} key='top' showsPagination={false} style={ styles.swiperTopStyle    } onMomentumScrollEnd={ this.scrolledTop }>
                { topItems }
              </Swiper>
              <Swiper height={wh/2-20} key='bot' showsPagination={false} style={ styles.swiperBottomStyle } onMomentumScrollEnd={ this.scrolledBottom }>
                { bottomItems }
              </Swiper>
            </View>
          </View>

          <TouchableHighlight onPress={ this.chooseOutfit } style={{ position: 'absolute', left: 10, top: 10, width: ICON_SIZE, height: ICON_SIZE }}>
            <Image style={{ width: ICON_SIZE, height: ICON_SIZE }} source={ require('image!ic_hanger') } />
          </TouchableHighlight>

          <TouchableHighlight onPress={ this.toggleMenu } style={{ position: 'absolute', left: 10, top: 70, width: ICON_SIZE, height: ICON_SIZE }}>
            <Image style={{ width: ICON_SIZE, height: ICON_SIZE }} source={ require('image!ic_handbag') } />
          </TouchableHighlight>

          <View style={ this.state.showDesc ? styles.descriptionContainerOpen : styles.descriptionContainer }>
            <View style={ styles.description }>
              <Text style={ styles.descriptionName  }>{ topItem.name }</Text>
              <Text style={ styles.descriptionCopy  }>{ topItem.description }</Text>
              <TextLink style={ styles.descriptionLink } url={ topItem.link }>{ topItem.link }</TextLink>
              <Text style={ styles.descriptionPrice }>{ topItem.price }</Text>
            </View>
            <View style={ styles.description }>
              <Text style={ styles.descriptionName  }>{ bottomItem.name }</Text>
              <Text style={ styles.descriptionCopy  }>{ bottomItem.description }</Text>
              <TextLink style={ styles.descriptionLink } url={ bottomItem.link }>{ bottomItem.link }</TextLink>
              <Text style={ styles.descriptionPrice }>{ bottomItem.price }</Text>
            </View>
            <View style={ styles.description }>
              <Text style={ styles.descriptionName  }>{ outfitItem.name }</Text>
              <Text style={ styles.descriptionCopy  }>{ outfitItem.description }</Text>
              <TextLink style={ styles.descriptionLink } url={ outfitItem.link }>{ outfitItem.link }</TextLink>
              <Text style={ styles.descriptionPrice }>{ outfitItem.price }</Text>
            </View>
          </View>

          <TouchableHighlight onPress={ this.toggleDesc } style={{ position: 'absolute', right: 10, top: 10, width: ICON_SIZE, height: ICON_SIZE }}>
            <Image style={{ width: ICON_SIZE, height: ICON_SIZE }} source={ require('image!ic_tag') } />
          </TouchableHighlight>

          <TouchableHighlight onPress={ this.handleShare } style={{ position: 'absolute', right: 10, top: 70, width: ICON_SIZE, height: ICON_SIZE }}>
            <Image style={{ width: ICON_SIZE, height: ICON_SIZE }} source={ require('image!ic_heart') } />
          </TouchableHighlight>

          { this.state.rendering ?
              <View style={ styles.modal }>
                <Text style={ styles.savingText }>Saving your look...</Text>
              </View>
              : null }

        </View>
        { this.state.showContactModal ?
            <Modal onClose={ this.closeModal }>
              <Text style={{ fontSize: 16 }}>For all business inquiries and licensing questions, please contact us directly at</Text>
              <TextLink url={ 'mailto:info@thestylewheel.com' }>info@thestylewheel.com</TextLink>
            </Modal>
            : null }

        { this.state.showDetailModal ?
          <Modal onClose={ this.closeModal }>
            <Image style={{ fontSize: 16 }} source={ require('image!bracelet9-sally') } />
          </Modal>
          : null }
      </View>
    );
  }
});

