import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  Dimensions,
  TouchableOpacity,
} from 'react-native';

const {height, width} = Dimensions.get('window');
export function HomeScreen(props) {
  return (
    <ImageBackground source={require('../assets/bg4.jpg')} style={{flex: 1}}>
      <View style={{flex: 1}}>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <View
            style={{
              height: height * 0.15,
              width: width * 0.8,
              borderWidth: 1,
              borderColor: '#fff',
              borderRadius: height * 0.02,
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: height * 0.01,
            }}>
            <TouchableOpacity>
              <Text
                style={{
                  fontSize: height * 0.04,
                  color: '#fff',
                  fontWeight: 'bold',
                }}>
                Home Celebrations
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{flex: 2, alignItems: 'center', justifyContent: 'center'}}>
          <View
            style={{
              height: height * 0.08,
              borderWidth: 2,
              borderRadius: height * 0.1,
              width: width * 0.7,
              backgroundColor: 'rgb(255,215,0)',
              marginBottom: height * 0.01,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <TouchableOpacity
              onPress={() => props.navigation.navigate('Categories') }
              style={{
                height: height * 0.07,
                borderRadius: height * 0.1,
                width: width * 0.68,
                backgroundColor: 'rgb(218,165,32)',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text style={{fontSize: height * 0.03, fontWeight: 'bold'}}>
                Add Details
              </Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              height: height * 0.08,
              borderWidth: 2,
              borderRadius: height * 0.1,
              width: width * 0.7,
              backgroundColor: 'rgb(255,215,0)',
              marginBottom: height * 0.01,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <TouchableOpacity
             onPress={() => props.navigation.navigate('ViewAllDetails', {items: null})}
              style={{
                height: height * 0.07,
                borderRadius: height * 0.1,
                width: width * 0.68,
                backgroundColor: 'rgb(218,165,32)',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text style={{fontSize: height * 0.03, fontWeight: 'bold'}}>
                View Details
              </Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              height: height * 0.08,
              borderWidth: 2,
              borderRadius: height * 0.1,
              width: width * 0.7,
              backgroundColor: 'rgb(255,215,0)',
              marginBottom: height * 0.01,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <TouchableOpacity
              style={{
                height: height * 0.07,
                borderRadius: height * 0.1,
                width: width * 0.68,
                backgroundColor: 'rgb(218,165,32)',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text style={{fontSize: height * 0.03, fontWeight: 'bold'}}>
                Rate App
              </Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              height: height * 0.08,
              borderWidth: 2,
              borderRadius: height * 0.1,
              width: width * 0.7,
              backgroundColor: 'rgb(255,215,0)',
              marginBottom: height * 0.01,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <TouchableOpacity
              style={{
                height: height * 0.07,
                borderRadius: height * 0.1,
                width: width * 0.68,
                backgroundColor: 'rgb(218,165,32)',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text style={{fontSize: height * 0.03, fontWeight: 'bold'}}>
                About Us
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
}
