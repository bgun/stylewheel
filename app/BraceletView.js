var React   = require('react-native');

var { Image, View } = React;

var styles = require('./styles.js');


module.exports = BraceletView = React.createClass({
  render: function() {
    return (
      <View style={ styles.itemViewStyle }>
        <Image style={ styles.braceletImageStyle } source={ this.props.item.image } />
      </View>
    );
  }
});