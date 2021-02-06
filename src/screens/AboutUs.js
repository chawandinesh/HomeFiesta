import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import {Icon} from 'react-native-elements';

const {height, width} = Dimensions.get('window');
export function AboutUs(props) {
  return (
    <ImageBackground source={require('../assets/bg4.jpg')} style={{flex: 1}}>
      <View style={{flex: 1}}>
        <View
          style={{
            width,
            height: height * 0.07,
            backgroundColor: '#ebcc7a',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <TouchableOpacity>
            <Icon
              onPress={() => props.navigation.goBack()}
              name="ios-arrow-back"
              type="ionicon"
              style={{paddingHorizontal: 5}}
              size={height * 0.04}
            />
          </TouchableOpacity>
          <Text style={{fontWeight: 'bold', fontSize: height * 0.03}}>
            About Us
          </Text>
          <Text style={{paddingHorizontal: height * 0.03}}> </Text>
        </View>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <View
            style={{
              height: height * 0.7,
              width: width * 0.8,
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: '#222',
              borderWidth: 2,
              borderColor: 'gold',
            }}>
            <View
              style={{
                paddingHorizontal: height * 0.02,
              }}>
              <Text
                style={{
                  fontSize: height * 0.03,
                  fontWeight: 'bold',
                  color: '#ebe459',
                  textAlign: 'center',
                }}>
                This is simple, amazing and ads free app for functions.
              </Text>
              <Text
                style={{
                  fontSize: height * 0.03,
                  fontWeight: 'bold',
                  color: '#fff',
                  textAlign: 'center',
                  paddingTop: height * 0.04,
                }}>
                In this app, there are various types of places like Bengal,
                Uttarakhand, Lucknow, New Delhi etc.
              </Text>
              <Text
                style={{
                  fontSize: height * 0.03,
                  fontWeight: 'bold',
                  color: '#fff',
                  textAlign: 'center',
                  paddingTop: height * 0.05,
                }}>
                Also in this app, you can manage your function details.
              </Text>
              <Text
                style={{
                  fontSize: height * 0.03,
                  fontWeight: 'bold',
                  color: '#eb6f59',
                  textAlign: 'center',
                  paddingTop: height * 0.01,
                }}>
                Enjoy the App
              </Text>
            </View>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
}
