var React = require('react-native');

var BRACELETS = [
  {
    name  : 'Bracelet 1',
    image : require('image!bracelet1'),
    description: 'this is a bracelet',
    price : '$10',
    link  : 'http://prettybracelet.com'
  },
  {
    name  : 'Bracelet 2',
    image : require('image!bracelet2'),
    description: 'this is a bracelet 2',
    price : '$20',
    link  : 'http://prettybracelet.com'
  },
  {
    name  : 'Bracelet 3',
    image : require('image!bracelet3'),
    description: 'this is a bracelet 3',
    price : '$30',
    link  : 'http://prettybracelet.com'
  },
  {
    name  : 'Bracelet 4',
    image : require('image!bracelet4'),
    description: 'this is a bracelet 4',
    price : '$40',
    link  : 'http://prettybracelet.com'
  },
  {
    name  : 'Bracelet 5',
    image : require('image!bracelet5'),
    description: 'this is a bracelet 5',
    price : '$50',
    link  : 'http://prettybracelet.com'
  },
  {
    name  : 'Bracelet 6',
    image : require('image!bracelet6'),
    description: 'this is a bracelet 6',
    price : '$60',
    link  : 'http://prettybracelet.com'
  },
  {
    name  : 'Bracelet 7',
    image : require('image!bracelet7'),
    description: 'this is a bracelet 7',
    price : '$70',
    link  : 'http://prettybracelet.com'
  },
  {
    name  : 'Bracelet 8',
    image : require('image!bracelet8'),
    description: 'this is a bracelet 8',
    price : '$80',
    link  : 'http://prettybracelet.com'
  },
  {
    name  : 'Bracelet 9',
    image : require('image!bracelet9'),
    description: 'this is a bracelet 9',
    price : '$90',
    link  : 'http://prettybracelet.com'
  }
];

var NECKLACES = [
  {
    name  : 'Necklace 1',
    image : require('image!necklace1'),
    description: 'This is a fancy necklace 1',
    price : '$10',
    link  : 'http://prettynecklace.com'
  },
  {
    name  : 'Necklace 2',
    image : require('image!necklace2'),
    description: 'This is a fancy necklace 2',
    price : '$20',
    link  : 'http://prettynecklace.com'
  },
  {
    name  : 'Necklace 3',
    image : require('image!necklace3'),
    description: 'This is a fancy necklace 3',
    price : '$30',
    link  : 'http://prettynecklace.com'
  },
  {
    name  : 'Necklace 4',
    image : require('image!necklace4'),
    description: 'This is a fancy necklace 4',
    price : '$40',
    link  : 'http://prettynecklace.com'
  },
  {
    name  : 'Necklace 5',
    image : require('image!necklace5'),
    description: 'This is a fancy necklace 5',
    price : '$50',
    link  : 'http://prettynecklace.com'
  },
  {
    name  : 'Necklace 6',
    image : require('image!necklace6'),
    description: 'This is a fancy necklace 6',
    price : '$60',
    link  : 'http://prettynecklace.com'
  },
  {
    name  : 'Necklace 7',
    image : require('image!necklace7'),
    description: 'This is a fancy necklace 7',
    price : '$70',
    link  : 'http://prettynecklace.com'
  },
  {
    name  : 'Necklace 8',
    image : require('image!necklace8'),
    description: 'This is a fancy necklace 8',
    price : '$80',
    link  : 'http://prettynecklace.com'
  },
  {
    name  : 'Necklace 9',
    image : require('image!necklace9'),
    description: 'This is a fancy necklace 9',
    price : '$90',
    link  : 'http://prettynecklace.com'
  }
];

var OUTFITS = [
  {
    name  : 'Outfit 1',
    image : require('image!outfit1'),
    description: 'Description',
    price : '$10',
    link  : 'http://prettyoutfit.com'
  },
  {
    name  : 'Outfit 2',
    image : require('image!outfit2'),
    description: 'Description 2',
    price : '$20',
    link  : 'http://prettyoutfit.com'
  },
  {
    name  : 'Outfit 3',
    image : require('image!outfit3'),
    description: 'Description 3',
    price : '$30',
    link  : 'http://prettyoutfit.com'
  },
  {
    name  : 'Outfit 4',
    image : require('image!outfit4'),
    description: 'Description 4',
    price : '$40',
    link  : 'http://prettyoutfit.com'
  },
  {
    name  : 'Outfit 5',
    image : require('image!outfit5'),
    description: 'Description 5',
    price : '$50',
    link  : 'http://prettyoutfit.com'
  },
  {
    name  : 'Outfit 6',
    image : require('image!outfit6'),
    description: 'Description 6',
    price : '$60',
    link  : 'http://prettyoutfit.com'
  },
  {
    name  : 'Outfit 7',
    image : require('image!outfit7'),
    description: 'Description 7',
    price : '$70',
    link  : 'http://prettyoutfit.com'
  },
  {
    name  : 'Outfit 8',
    image : require('image!outfit8'),
    description: 'Description 8',
    price : '$80',
    link  : 'http://prettyoutfit.com'
  },
  {
    name  : 'Outfit 9',
    image : require('image!outfit9'),
    description: 'Description 9',
    price : '$90',
    link  : 'http://prettyoutfit.com'
  },
  {
    name  : 'Outfit 10',
    image : require('image!outfit10'),
    description: 'Description 10',
    price : '$100',
    link  : 'http://prettyoutfit.com'
  }
];

var PURSES = [
  {
    name: 'Purse 1',
    image: require('image!purses1'),
    description: 'this is a very pretty purse',
    price : '$10',
    link: 'http://prettypurses.com'
  },
  {
    name: 'Purse 2',
    image: require('image!purses2'),
    description: 'this is a very pretty purse',
    price : '$20',
    link: 'http://prettypurses.com'
  },
  {
    name: 'Purse 3',
    image: require('image!purses3'),
    description: 'this is a very pretty purse',
    price : '$30',
    link: 'http://prettypurses.com'
  },
  {
    name: 'Purse 4',
    image: require('image!purses4'),
    description: 'this is a very pretty purse',
    price : '$40',
    link: 'http://prettypurses.com'
  },
  {
    name: 'Purse 5',
    image: require('image!purses5'),
    description: 'this is a very pretty purse',
    price : '$50',
    link: 'http://prettypurses.com'
  },
  {
    name: 'Purse 6',
    image: require('image!purses6'),
    description: 'this is a very pretty purse',
    price : '$60',
    link: 'http://prettypurses.com'
  },
  {
    name: 'Purse 7',
    image: require('image!purses7'),
    description: 'this is a very pretty purse',
    price : '$70',
    link: 'http://prettypurses.com'
  },
  {
    name: 'Purse 8',
    image: require('image!purses8'),
    description: 'this is a very pretty purse',
    price : '$80',
    link: 'http://prettypurses.com'
  },
  {
    name: 'Purse 9',
    image: require('image!purses9'),
    description: 'this is a very pretty purse',
    price : '$90',
    link: 'http://prettypurses.com'
  }
];

var SCARVES = [
  {
    name: 'Scarf 1',
    image: require('image!scarves1'),
    description: 'this is a very long scarf',
    price : '$10',
    link: 'http://prettyscarves.com'
  },
  {
    name: 'Scarf 2',
    image: require('image!scarves2'),
    description: 'this is a very long scarf',
    price : '$20',
    link: 'http://prettyscarves.com'
  },
  {
    name: 'Scarf 3',
    image: require('image!scarves3'),
    description: 'this is a very pretty purse',
    price : '$30',
    link: 'http://prettyscarves.com'
  },
  {
    name: 'Scarf 4',
    image: require('image!scarves4'),
    description: 'this is a very long scarf',
    price : '$40',
    link: 'http://prettyscarves.com'
  },
  {
    name: 'Scarf 5',
    image: require('image!scarves5'),
    description: 'this is a very long scarf',
    price : '$50',
    link: 'http://prettyscarves.com'
  },
  {
    name: 'Scarf 6',
    image: require('image!scarves6'),
    description: 'this is a very long scarf',
    price : '$60',
    link: 'http://prettyscarves.com'
  },
  {
    name: 'Scarf 7',
    image: require('image!scarves7'),
    description: 'this is a very long scarf',
    price : '$70',
    link: 'http://prettyscarves.com'
  },
  {
    name: 'Scarf 8',
    image: require('image!scarves8'),
    description: 'this is a very long scarf',
    price : '$80',
    link: 'http://prettyscarves.com'
  },
  {
    name: 'Scarf 9',
    image: require('image!scarves9'),
    description: 'this is a very long scarf',
    price : '$90',
    link: 'http://prettyscarves.com'
  }
];

module.exports = {
  BRACELETS : BRACELETS,
  NECKLACES : NECKLACES,
  OUTFITS   : OUTFITS,
  PURSES    : PURSES,
  SCARVES   : SCARVES
};