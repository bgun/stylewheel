'use babel';

import React from 'react-native';

var { Image, View } = React;

import styles from './styles.js';


export default class PurseView extends React.Component {

  render() {
    return (
      <View style={ styles.itemViewStyle }>
        <Image style={ styles.purseImageStyle } source={ this.props.item.image } />
      </View>
    );
  }

}