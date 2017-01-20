
import React, { Component } from 'react';
import { View } from 'react-native';

class Spacer extends Component {
  render() {
    return (
      <View style={styles.boxStyle} />
    );
  }
}

const styles = {
  boxStyle: {
    borderWidth: 1,
    borderRadius: 2,
    height: 10,
    borderColor: '#ddd',
    borderBottomWidth: 0,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10
  }
};

export default Spacer;
