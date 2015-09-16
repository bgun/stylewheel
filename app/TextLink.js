'use babel';

import React from 'react-native';

import styles from './styles.js';

var { LinkingIOS, Text, TouchableOpacity, View } = React;


export default class TextLink extends React.Component {

  doLink() {
    LinkingIOS.openURL(this.props.url);
  }

  render() {
    return (
      <TouchableOpacity onPress={ this.doLink }>
        <Text style={ styles.link }>{ this.props.children }</Text>
      </TouchableOpacity>
    );
  }

}