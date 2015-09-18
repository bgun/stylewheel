'use babel';

import React from 'react-native';

var { Image, TouchableOpacity, View } = React;

import styles from './styles.js';


export default class PurseView extends React.Component {

  render() {
    return (
      <TouchableOpacity onPress={ this.props.handlePress }>
        <View style={ styles.itemViewStyle }>
          <Image style={ styles.bottomImageStyle } source={ this.props.item.image } />
        </View>
      </TouchableOpacity>
    );
  }

}