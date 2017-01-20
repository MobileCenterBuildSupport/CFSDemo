// CircleView.js

// import a library to create a component
import React, { StyleSheet } from 'react';
import { Text, View } from 'react-native';

const CircleView = (props) => {
  return (
    <View
      style={[styles.circle,
      {
        width: props.width,
        height: props.height,
        backgroundColor: props.backgroundColor,
      }
    ]}
    >
      <Text
        style={[styles.circleTextStyle,
        {
          color: props.textColor,
          height: props.textHeight,
          fontSize: props.fontSize
        }
        ]}
      >
        {props.circleText}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  circle: {
     width: 32,
     height: 32,
     borderRadius: 32 / 2,
     backgroundColor: 'grey',
     justifyContent: 'center',
     alignItems: 'center',
   },
  circleTextStyle: {
    backgroundColor: 'rgba(0,0,0,0)',
    color: 'yellow',
    fontSize: 16
  },
 });

export { CircleView };
