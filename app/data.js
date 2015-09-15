var React = require('react-native');

var BRACELETS = [
  {
    name  : 'None selected',
    image : require('image!_blank'),
    image_detail: require('image!_blank'),
    description: '',
    price : '',
    link  : ''
  },
  {
    name  : 'Luna',
    image : require('image!bracelet1'),
    image_detail: require('image!bracelet1-luna'),
    description: 'Triple wrap bracelet of woven faceted glass beads in white bronze and satin gold finishes suspended on a brass box chain creates instant layering.',
    price : '$10',
    link  : 'http://prettybracelet.com'
  },
  {
    name  : 'Piper',
    image : require('image!bracelet2'),
    image_detail: require('image!bracelet2-piper'),
    description: 'Large natural stones wrap around your wrist for an organic, bohemian vibe.',
    price : '$20',
    link  : 'http://prettybracelet.com'
  },
  {
    name  : 'Abby',
    image : require('image!bracelet3'),
    image_detail: require('image!bracelet3-abby'),
    description: 'Slip on these chic bangle bracelets for a vibrant finishing touch.',
    price : '$30',
    link  : 'http://prettybracelet.com'
  },
  {
    name  : 'Renegade',
    image : require('image!bracelet4'),
    image_detail: require('image!bracelet4-renegade'),
    description: 'White bronze or gold plated spikes and black diamond pave beads adorn this Renegade cluster studded bracelet.',
    price : '$40',
    link  : 'http://prettybracelet.com'
  },
  {
    name  : 'Layne',
    image : require('image!bracelet5'),
    image_detail: require('image!bracelet5-layne'),
    description: 'Statement cuff bracelet crafted from brass and wood. Features a bold design and rich gold-tone finish.',
    price : '$50',
    link  : 'http://prettybracelet.com'
  },
  {
    name  : 'Amelie',
    image : require('image!bracelet6'),
    image_detail: require('image!bracelet6-amelie'),
    description: 'Faceted circular glass crystals sparkle in this staple arm piece.',
    price : '$60',
    link  : 'http://prettybracelet.com'
  },
  {
    name  : 'Becca',
    image : require('image!bracelet7'),
    image_detail: require('image!bracelet7-becca'),
    description: 'Bright and bold. This bracelet features beautiful design details accented with a mix of hand-set colorful enamel and neutral glass stones. ',
    price : '$70',
    link  : 'http://prettybracelet.com'
  },
  {
    name  : 'Isabelle',
    image : require('image!bracelet8'),
    image_detail: require('image!bracelet8-isabelle'),
    description: 'Silver coil bracelet with accents of neutral sparkle.',
    price : '$80',
    link  : 'http://prettybracelet.com'
  },
  {
    name  : 'Sally',
    image : require('image!bracelet9'),
    image_detail: require('image!bracelet9-sally'),
    description: 'From a romantic evening out to a dinner party with friends, these gorgeous, cream-colored pearlized glass bead bracelets bring timeless elegance to any occasion.',
    price : '$90',
    link  : 'http://prettybracelet.com'
  }
];

var NECKLACES = [
  {
    name  : 'None selected',
    image : require('image!_blank'),
    image_detail: require('image!_blank'),
    description: '',
    price : '',
    link  : ''
  },
  {
    name  : 'Pegasus',
    image : require('image!necklace1'),
    image_detail: require('image!necklace1-pegasus'),
    description: 'A striking bib of intricate feathers hand sewn to silk organza cascade.',
    price : '$10',
    link  : 'http://prettynecklace.com'
  },
  {
    name  : 'Alexis',
    image : require('image!necklace2'),
    image_detail: require('image!necklace2-alexis'),
    description: 'Webbed angles give a minimalist touch to a versatile strand of modern pewter links.',
    price : '$20',
    link  : 'http://prettynecklace.com'
  },
  {
    name  : 'Courtney',
    image : require('image!necklace3'),
    image_detail: require('image!necklace3-courtney'),
    description: 'Bold, rich magenta stones link together in this gorgeous statement necklace, and is the perfect accoutrement for any look, day to night.',
    price : '$30',
    link  : 'http://prettynecklace.com'
  },
  {
    name  : 'Fanella',
    image : require('image!necklace4'),
    image_detail: require('image!necklace4-fanella'),
    description: 'An explosion of color incorporating deep shades of navy and green contrasted with soft pinks and citrine hand-set stones.',
    price : '$40',
    link  : 'http://prettynecklace.com'
  },
  {
    name  : 'Kendra',
    image : require('image!necklace5'),
    image_detail: require('image!necklace5-kendra'),
    description: 'This long necklace features dainty oval stones of naturally variegated banded agate, bringing a chic edge to your everyday style.',
    price : '$50',
    link  : 'http://prettynecklace.com'
  },
  {
    name  : 'Sadie',
    image : require('image!necklace6'),
    image_detail: require('image!necklace6-sadie'),
    description: 'Ace the luxe boho look: Try on wooded acrylic shapes with luxe crystal accents and bold yellow beaded fringe.',
    price : '$60',
    link  : 'http://prettynecklace.com'
  },
  {
    name  : 'Livvy',
    image : require('image!necklace7'),
    image_detail: require('image!necklace7-livvy'),
    description: 'A gold Y-shaped silhouette with hints of mint enamel and cognac sparkle on a smooth gold plated chain.',
    price : '$70',
    link  : 'http://prettynecklace.com'
  },
  {
    name  : 'Amanda',
    image : require('image!necklace8'),
    image_detail: require('image!necklace8-amanda'),
    description: 'Long chain tassels add serious drama to any outfit--the perfect way to tone down spring brights.',
    price : '$80',
    link  : 'http://prettynecklace.com'
  },
  {
    name  : 'Lauren',
    image : require('image!necklace9'),
    description: 'Double or triple this endless strand up for a chic, layered look.',
    price : '$90',
    link  : 'http://prettynecklace.com'
  }
];

var OUTFITS = [
  {
    name  : 'Coachella',
    image : require('image!outfit1'),
    description: 'Description',
    price : '$10',
    link  : 'http://prettyoutfit.com'
  },
  {
    name  : 'Drinks After Work',
    image : require('image!outfit2'),
    description: 'Description 2',
    price : '$20',
    link  : 'http://prettyoutfit.com'
  },
  {
    name  : 'Baby Shower',
    image : require('image!outfit3'),
    description: 'Description 3',
    price : '$30',
    link  : 'http://prettyoutfit.com'
  },
  {
    name  : 'Concert',
    image : require('image!outfit4'),
    description: 'Description 4',
    price : '$40',
    link  : 'http://prettyoutfit.com'
  },
  {
    name  : 'Date Night',
    image : require('image!outfit5'),
    description: 'Description 5',
    price : '$50',
    link  : 'http://prettyoutfit.com'
  },
  {
    name  : 'a Wedding',
    image : require('image!outfit6'),
    description: 'Description 6',
    price : '$60',
    link  : 'http://prettyoutfit.com'
  },
  {
    name  : 'Yacht Club',
    image : require('image!outfit7'),
    description: 'Description 7',
    price : '$70',
    link  : 'http://prettyoutfit.com'
  },
  {
    name  : 'Out and About',
    image : require('image!outfit8'),
    description: 'Description 8',
    price : '$80',
    link  : 'http://prettyoutfit.com'
  },
  {
    name  : 'Office',
    image : require('image!outfit9'),
    description: 'Description 9',
    price : '$90',
    link  : 'http://prettyoutfit.com'
  },
  {
    name  : 'Lunch with the Girls',
    image : require('image!outfit10'),
    description: 'Description 10',
    price : '$100',
    link  : 'http://prettyoutfit.com'
  }
];

var PURSES = [
  {
    name  : 'None selected',
    image : require('image!_blank'),
    image_detail: require('image!_blank'),
    description: '',
    price : '',
    link  : ''
  },
  {
    name: 'Goldie',
    image: require('image!purses1'),
    image_detail: require('image!purses1-goldie'),
    description: 'Add some sleek shimmer to your look with this classic envelope clutch. You can even try it during the day with a chic crisp button-down and denim.',
    price : '$10',
    link: 'http://prettypurses.com'
  },
  {
    name: 'Lizzy',
    image: require('image!purses2'),
    image_detail: require('image!purses2-lizzy'),
    description: 'Sleek and refined, the 440 Envelope Clutch is the silhouette of the season. Perfect for day or night in elegant embossed croc. Interior zip pocket and exterior back pocket. Magnetic closure.',
    price : '$20',
    link: 'http://prettypurses.com'
  },
  {
    name: 'Martha',
    image: require('image!purses3'),
    image_detail: require('image!purses3-martha'),
    description: 'Perfect for date nights and late nights, shiny hardware gives this quilted clutch from a modern look.',
    price : '$30',
    link: 'http://prettypurses.com'
  },
  {
    name: 'Sparkle',
    image: require('image!purses4'),
    image_detail: require('image!purses4-sparkle'),
    description: 'the perfect clutch to carry at your reception or after-party, this shining clutch makes a subtle nod to your newlywed status with its (tie the) knot closure; the printed lining, which reads “two of a kind,” is more overtly romantic.',
    price : '$40',
    link: 'http://prettypurses.com'
  },
  {
    name: 'Leona',
    image: require('image!purses5'),
    image_detail: require('image!purses5-leona'),
    description: 'Calf hair clutch with gold tone accents on sides. Magnetic closure with studded cheetah ornament at closure. Optional chain strap.        ',
    price : '$50',
    link: 'http://prettypurses.com'
  },
  {
    name: 'Blanca',
    image: require('image!purses6'),
    image_detail: require('image!purses6-blanca'),
    description: 'An elegant hand-beaded clutch is lined in lustrous satin and framed by polished metal.',
    price : '$60',
    link: 'http://prettypurses.com'
  },
  {
    name: 'Citron',
    image: require('image!purses7'),
    image_detail: require('image!purses7-citron'),
    description: 'Features our unique perforated technique inspired by our Avalon jewelry styles. In need of a touch up? Hello gorgeous! Simply unsnap and use the mirror to check yourself out!',
    price : '$70',
    link: 'http://prettypurses.com'
  },
  {
    name: 'Elaine',
    image: require('image!purses8'),
    image_detail: require('image!purses8-elaine'),
    description: 'Signature multi-colored print handbag makes the ultimate fashion statement whether paired with a jeans or a cocktail dress.',
    price : '$80',
    link: 'http://prettypurses.com'
  },
  {
    name: 'Azure',
    image: require('image!purses9'),
    image_detail: require('image!purses9-azure'),
    description: 'Custom designed Stella & Dot hardware inspired by our laser cut Avalon jewelry styles, plus an oversized pyramid accent for just a little edge. Removeable strap can also be worn as a wrap bracelet.',
    price : '$90',
    link: 'http://prettypurses.com'
  }
];

var SCARVES = [
  {
    name  : 'None selected',
    image : require('image!_blank'),
    image_detail: require('image!_blank'),
    description: '',
    price : '',
    link  : ''
  },
  {
    name: 'Christine',
    image: require('image!scarves1'),
    image_detail: require('image!scarves1-christine'),
    description: 'Taupe and gold windowpane print extra long scarf.',
    price : '$10',
    link: 'http://prettyscarves.com'
  },
  {
    name: 'Carrie',
    image: require('image!scarves2'),
    image_detail: require('image!scarves2-carrie'),
    description: 'Signature Drummond plaid of red and green.',
    price : '$20',
    link: 'http://prettyscarves.com'
  },
  {
    name: 'Jill',
    image: require('image!scarves3'),
    image_detail: require('image!scarves3-jill'),
    description: 'Find your wild side in this red and pink animal print scarf with gold sequins.',
    price : '$30',
    link: 'http://prettyscarves.com'
  },
  {
    name: 'Nina',
    image: require('image!scarves4'),
    image_detail: require('image!scarves4-nina'),
    description: 'Soft pewter infinity scarf.',
    price : '$40',
    link: 'http://prettyscarves.com'
  },
  {
    name: 'Katy',
    image: require('image!scarves5'),
    image_detail: require('image!scarves5-katy'),
    description: 'Solid black scarf with tiny gold stars.',
    price : '$50',
    link: 'http://prettyscarves.com'
  },
  {
    name: 'Jessica',
    image: require('image!scarves6'),
    image_detail: require('image!scarves6-jessica'),
    description: 'Light weight tan and taupe animal print scarf. Gauze-like texture.',
    price : '$60',
    link: 'http://prettyscarves.com'
  },
  {
    name: 'Ashley',
    image: require('image!scarves7'),
    image_detail: require('image!scarves7-ashley'),
    description: 'Mint floral infinity to brighten up any ensemble.',
    price : '$70',
    link: 'http://prettyscarves.com'
  },
  {
    name: 'Lilly',
    image: require('image!scarves8'),
    image_detail: require('image!scarves8-lilly'),
    description: 'Solid hot pink scarf, large enough to use as a wrap.',
    price : '$80',
    link: 'http://prettyscarves.com'
  },
  {
    name: 'Mary',
    image: require('image!scarves9'),
    image_detail: require('image!scarves9-mary'),
    description: 'Cobalt blue and gray windowpane print scarf. Tassel ends.',
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