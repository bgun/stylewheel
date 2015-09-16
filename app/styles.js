var React   = require('react-native');
var Dimensions = require('Dimensions');

var { PixelRatio, StyleSheet } = React;


console.log("menu width", menuWidth);

var wh = Dimensions.get('window').height;
var ww = Dimensions.get('window').width;
var menuWidth = ww / PixelRatio.get();
console.log(wh, ww);

var SW_GREEN  = '#9acdb2';
var SW_ORANGE = '#f6bb84';
var SW_PINK   = '#c07aaa';
var SW_PURPLE = '#362045';

module.exports = StyleSheet.create({
  visible: {

  },
  appContainer: {
    backgroundColor: '#FFFFFF',
    position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0
  },
  menu: {
    backgroundColor: '#FEF',
    height: wh,
    position: 'absolute',
      top: 0,
      right: menuWidth,
      bottom: 0,
    width: menuWidth
  },
  link: {
    color: '#6688FF',
    fontFamily: 'EkMukta-Light',
  },
  menuOutfits: {
    backgroundColor: SW_ORANGE,
  },
  menuAccessories: {
    backgroundColor: SW_PINK,
  },
  menuHeading: {
    fontSize: 13,
    marginTop: 20,
    marginBottom: 5,
    textAlign: 'center',
  },
  menuButton: {
    backgroundColor: 'rgba(255,255,255,0.5)',
    color: SW_PURPLE,
    fontSize: 17,
    fontWeight: '300',
    marginBottom: 1,
    paddingHorizontal: 12,
    paddingVertical: 10
  },
  menuButtonContact: {
    backgroundColor: 'rgba(0,0,0,0.1)',
    color: SW_PURPLE,
    fontSize: 16,
    fontWeight: '300',
    paddingHorizontal: 12,
    paddingVertical: 20
  },

  mainContainer: {
    position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0
  },
  withMenu: {
    left: menuWidth,
    right: -menuWidth
  },
  outfitContainer: {
    flexDirection: 'column',
    position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0
  },
  outfitImageStyle: {
    height: wh,
    position: 'absolute',
      top: 0,
      left: 0,
    width: ww,
  },
  swipers: {
    backgroundColor: 'transparent',
    flexDirection: 'column',
    position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0
  },
  swiperTopStyle: {
  },
  swiperBottomStyle: {
  },

  outfitButton: {
    backgroundColor: 'rgba(255,255,255,0.8)',
    borderColor: 'rgba(50,100,150,0.2)',
    borderRadius: 10,
    borderWidth: 5,
    height: 45,
    padding: 8,
    position: 'absolute',
      bottom: 0,
      left: ww * 0.1,
      top: wh - 80,
      right: 0,
    width: ww * 0.8
  },
  outfitButtonText: {
    color: '#3366FF',
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center'
  },




  // Description panel
  descriptionContainer: {
    backgroundColor: 'transparent',
    position: 'absolute',
      top: 0,
      left: ww,
      bottom: 0,
    width: ww,
  },
  descriptionContainerOpen: {
    backgroundColor: 'transparent',
    position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
    width: ww,
  },
  description: {
    backgroundColor: 'rgba(10,0,10,0.7)',
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
  },



  // images
  itemViewStyle: {
  },
  topItemImageStyle: {
    height: wh,
    width: ww,
    position: 'absolute',
      top: -4,
      left: 4
  },
  purseImageStyle: {
    height: wh,
    width: ww,
    position: 'absolute',
      top: -(ww * 0.8)-8,
      left: 0
  },
  braceletImageStyle: {
    alignItems: 'stretch',
    height: wh,
    width: ww,
    position: 'absolute',
      top: -(ww * 0.83),
      left: 3
  },
  modal: {
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
    height: wh,
    justifyContent: 'center',
    position: 'absolute',
      top: 0,
      left: 0,
    width: ww,
  },
  savingText: {
    color: '#FFFFFF',
    fontSize: 20,
  },
  modalCloseButton: {
    backgroundColor: 'rgba(0,0,0,0.2)',
    borderColor: '#FFFFFF',
    borderWidth: 1,
    borderRadius: 3,
    color: '#FFFFFF',
    marginTop: 10,
    paddingVertical: 6,
    paddingHorizontal: 12
  },
  modalContent: {
    backgroundColor: '#FFFFFF',
    borderRadius: 5,
    margin: 20,
    padding: 50
  },

  startingOutfitPicker: {
    alignItems: 'center',
    backgroundColor: SW_PURPLE,
    flexDirection: 'column',
    height: wh,
    justifyContent: 'center',
    position: 'absolute',
      top: 0,
      left: 0,
    width: ww
  },
  startingOutfitPickerTouchable: {
    backgroundColor: '#FFFFFF',
    borderColor: SW_PINK,
    borderBottomWidth: 1,
    flex: 2,
  },
  startingOufitPickerHeading: {
    color: '#FFFFFF',
    flex: 3,
    fontSize: 20,
    fontWeight: "600",
    lineHeight: wh/12,
    marginBottom: 1,
    textAlign: 'center'
  },
  startingOufitPickerButton: {
    borderColor: '#FF0000',
    color: SW_PURPLE,
    fontSize: 18,
    fontWeight: '300',
    lineHeight: wh/17,
    textAlign: 'center',
    width: ww
  },

  instructions: {
    backgroundColor: 'transparent'
  },
  instructionImage: {
    height: wh,
    position: 'absolute',
      top: 0,
      left: 0,
    width: ww
  }
});