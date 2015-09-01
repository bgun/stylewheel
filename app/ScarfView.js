var React = require('react-native');

var { Image, StyleSheet, View } = React;

var styles = StyleSheet.create({
  scarfViewStyle: {
    alignItems: 'flex-start',
    flex: 1
  },
  scarfImageStyle: {
    alignItems: 'stretch',
    flex: 1,
    width: 320,
    top: 290,
    left: 2
  }
});

module.exports = ScarfView = React.createClass({
  render: function() {
    return (
      <View style={ styles.scarfViewStyle }>
        <Image style={ styles.scarfImageStyle } source={ this.props.item.image } />
      </View>
    );
  }
});