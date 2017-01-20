import React from 'react';
import { View, Image, Text } from 'react-native';

const Title = (props) => {   
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }} >
      <Text>{props.headerText}</Text>
      <Image
        source={require('../../assets/circle-64.png')}
        style={{ width: 40, height: 40 }}
      />
    </View>
  );
};

export default Title;
