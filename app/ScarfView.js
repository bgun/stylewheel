'use babel';

import React from 'react-native';

var { Image, PixelRatio, StyleSheet, View } = React;

import styles from './styles.js';


export default class ScarfView extends React.Component {

  render() {
    return (
      <View style={ styles.itemViewStyle }>
        <Image style={ styles.topItemImageStyle } source={ this.props.item.image } />
      </View>
    );
  }

}