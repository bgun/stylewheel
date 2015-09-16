'use babel';

import React from 'react-native';

var { Image, TouchableOpacity, View } = React;

import styles from './styles.js';


export default class BraceletView extends React.Component {

  render() {
    return (
      <TouchableOpacity onPress={ this.props.handlePress }>
        <View style={ styles.itemViewStyle }>
          <Image style={ styles.braceletImageStyle } source={ this.props.item.image } />
        </View>
      </TouchableOpacity>
    );
  }

}