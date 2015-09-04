var React   = require('react-native');
var Display = require('react-native-device-display');

var { PixelRatio, StyleSheet } = React;


var menuWidth = Display.width / PixelRatio.get();
console.log("menu width", menuWidth);

module.exports = StyleSheet.create({
  appContainer: {
    backgroundColor: '#FFFFFF',
    flex: 1
  },
  rendering: {

  },
  menu: {
    backgroundColor: '#C6C1C8',
    height: Display.height,
    position: 'absolute',
      top: 0,
      right: menuWidth,
      bottom: 0,
    width: menuWidth
  },
  link: {
    color: '#6688FF',
    fontWeight: 'bold'
  },
  menuHeading: {
    fontSize: 13,
    marginTop: 20,
    marginBottom: 5,
    textAlign: 'center',
  },
  menuButton: {
    backgroundColor: 'rgba(0,0,0,0.2)',
    color: '#FFEEFF',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 1,
    paddingHorizontal: 12,
    paddingVertical: 16
  },
  menuButtonContact: {
    backgroundColor: 'rgba(0,0,0,0.2)',
    color: '#FFEEFF',
    fontSize: 15,
    fontWeight: 'bold',
    paddingHorizontal: 12,
    paddingVertical: 12
  },

  mainContainer: {
    flex: 1
  },
  mainContainerWithMenu: {
    flex: 1,
    left: menuWidth
  },
  outfitContainer: {
    alignItems: 'center',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  outfitImageStyle: {
    flex: 1,
    height: Display.height,
    position: 'absolute',
      top: 0,
      left: 0,
    width: Display.width
  },
  swiperTopStyle: {
    flex: 100
  },
  swiperBottomStyle: {
    flex: 100
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
      left: (Display.width - 200) / 2,
    width: 200
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
      left: Display.width,
      bottom: 0,
    width: Display.width
  },
  descriptionContainerOpen: {
    backgroundColor: 'transparent',
    position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
    width: Display.width
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
    alignItems: 'flex-start',
    flex: 1
  },
  topItemImageStyle: {
    flex  : 1,
    height: Display.height,
    width: Display.width,
    top: (Display.percentage('height', 89)),
    left: 4
  },
  bottomItemImageStyle: {
    alignItems: 'stretch',
    flex: 1,
    height: Display.height,
    width: Display.width,
    top: -(Display.percentage('height', 85)),
    left: 10
  },
  modal: {
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
    height: Display.height,
    justifyContent: 'center',
    position: 'absolute',
      top: 0,
      left: 0,
    width: Display.width
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
  }
});