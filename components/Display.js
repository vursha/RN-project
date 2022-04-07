/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/self-closing-comp */
import {
  ImageBackground,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';

const Display = () => {
  return (
    <View style={{flex: 1}}>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 60,
        }}></View>
      <View>
        <ImageBackground
          style={{width: '100%', height: 100}}
          source={{
            uri: 'https://image.shutterstock.com/image-vector/welcome-colorful-letters-banner-can-260nw-1313361116.jpg',
          }}
        />
      </View>
      <TouchableOpacity
        style={{
          width: 400,
          marginTop: 400,
          padding: 20,
          borderRadius: 10,
          flexDirection: 'row',
          justifyContent: 'space-between',
          backgroundColor: 'skyblue',
        }}
        //onpress={() => navigation.navigate("flatEx")}
      >
        <Text>Start</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Display;


