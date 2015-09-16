var React        = require('react-native');
var Swiper       = require('react-native-swiper');
var Dimensions   = require('Dimensions');
var ActivityView = require('react-native-activity-view');
var _            = require('lodash');

var {
  Image,
  LayoutAnimation,
  PixelRatio,
  StatusBarIOS,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  View
} = React;


var wh = Dimensions.get('window').height;
var ww = Dimensions.get('window').width;

var Modal        = require('./Modal');
var TextLink     = require('./TextLink');

var BraceletView = require('./BraceletView');
var NecklaceView = require('./NecklaceView');
var PurseView    = require('./PurseView');
var ScarfView    = require('./ScarfView');

var styles = require('./styles.js');
var data = require('./data.js');

var ICON_SIZE = 50;


var Menu = React.createClass({
  displayName: 'Menu',
  handlePress: function(itemGroup, track) {
    this.props.onSelect(itemGroup, track);
  },
  render: function() {
    var outfitsSubmenu = (
      <View style={ styles.menuOutfits }>
        { data['OUTFITS'].map((outfit, index) => (
          <TouchableOpacity key={ index } onPress={ this.handlePress.bind(this, index, 3) }>
            <Text style={ styles.menuButton }>{ outfit.name }</Text>
          </TouchableOpacity>
        )) }
      </View>
    );
    var accessoriesSubmenu = (
      <View style={ styles.menuAccessories }>
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
      </View>
    );
    return (
      <View style={ styles.menu }>
        { this.props.menu === 'outfits'     ? outfitsSubmenu : null }
        { this.props.menu === 'accessories' ? accessoriesSubmenu : null }
        <Text style={ styles.menuHeading }>ABOUT US</Text>
        <TouchableOpacity onPress={ this.props.handleContactButton }>
          <Text style={ styles.menuButtonContact }>Contact</Text>
        </TouchableOpacity>
      </View>
    );
  }
})

module.exports = React.createClass({

  displayName: 'App',

  getInitialState: function() {
    return {
      shownInstructions: false,
      outfitIndex: -1,
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

  toggleMenu: function(menuType) {
    LayoutAnimation.easeInEaseOut();
    this.setState({
      showMenu: this.state.menuType ? null : menuType
    });
  },

  toggleDesc: function() {
    LayoutAnimation.easeInEaseOut();
    this.setState({
      showDesc: !this.state.showDesc
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
      bottomIndex: track === 2 ? 1         : this.state.bottomIndex, // reset to first (non-blank) image when you choose from menu
      outfitIndex: track === 3 ? itemGroup : this.state.outfitIndex
    });
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

  hideInstructions: function() {
    this.setState({
      shownInstructions: true
    });
  },

  render: function() {

    console.log("render", this.state);

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
    var outfitItem = this.state.outfitIndex >= 0 ? data['OUTFITS'][this.state.outfitIndex] : {};

    return (
      <View style={ styles.appContainer }>
        <Menu menu={ this.state.showMenu } onSelect={ this.selectItem } handleContactButton={ this.handleContactButton } />
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

          <TouchableHighlight onPress={ this.toggleMenu.bind(this, 'outfits') } style={{ position: 'absolute', left: 10, top: 10, width: ICON_SIZE, height: ICON_SIZE }}>
            <Image style={{ width: ICON_SIZE, height: ICON_SIZE }} source={ require('image!ic_hanger') } />
          </TouchableHighlight>

          <TouchableHighlight onPress={ this.toggleMenu.bind(this, 'accessories') } style={{ position: 'absolute', left: 10, top: 70, width: ICON_SIZE, height: ICON_SIZE }}>
            <Image style={{ width: ICON_SIZE, height: ICON_SIZE }} source={ require('image!ic_purse') } />
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

        { !this.state.shownInstructions ?
          <TouchableOpacity style={ styles.instructions } onPress={ this.hideInstructions }>
            <Image style={ styles.instructionImage } source={ require('image!instructions') } />
          </TouchableOpacity>
          : null }

        { this.state.outfitIndex === -1 ?
          <View style={ styles.startingOutfitPicker }>
            <Text style={ styles.startingOufitPickerHeading }>Where you headed?</Text>
            { data['OUTFITS'].map((outfit, index) => (
              <TouchableOpacity key={ index } style={ styles.startingOutfitPickerTouchable } onPress={ this.selectItem.bind(this, index, 3) }>
                <Text style={ styles.startingOufitPickerButton }>{ outfit.name }</Text>
              </TouchableOpacity>
            )) }
          </View>
          : null }

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

