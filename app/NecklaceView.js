'use babel';

import React from 'react-native';

var { Image, View } = React;

import styles from './styles.js';


module.exports = NecklaceView = React.createClass({
  render: function() {
    return (
      <View style={ styles.itemViewStyle }>
        <Image style={ styles.topItemImageStyle } source={ this.props.item.image } />
      </View>
    );
  }
});