var React   = require('react-native');

var { Image, View } = React;

var styles = require('./styles.js');


module.exports = PurseView = React.createClass({
  render: function() {
    return (
      <View style={ styles.itemViewStyle }>
        <Image style={ styles.purseImageStyle } source={ this.props.item.image } />
      </View>
    );
  }
});