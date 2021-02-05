import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  Dimensions,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import {Header, Icon} from 'react-native-elements';
import { TouchableHighlight } from 'react-native-gesture-handler';

const {height, width} = Dimensions.get('window');
export function ShowData(props) {
  return (
    <ImageBackground
      source={require('../assets/bg6.jpg')}
      style={{flex: 1, marginTop: 0}}>
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
          View Details
        </Text>
        <TouchableOpacity>
        </TouchableOpacity>
      </View>
      <View
        style={{
          height: height * 0.9,
          width: width * 0.8,
          width: width,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <View
          style={{
            height: height * 0.7,
            width: width * 0.8,
            backgroundColor: '#d3dbd5',
            borderBottomWidth: height * 0.02,
            borderBottomColor: '#9c5d40',
            borderRightWidth: height * 0.02,
            borderRightColor: '#dec676',
            borderTopLeftRadius: height * 0.05,
            alignItems: 'center',
          }}>
          <TouchableOpacity style={{position: 'absolute', bottom: 10, left: 10}}>
            <Icon name="create" type="ionicon" color="black" raised />
          </TouchableOpacity>
          <TouchableOpacity style={{position: 'absolute', bottom: 10, right: 10}}>
            <Icon name="trash" type="ionicon" color="darkred" raised />
          </TouchableOpacity>
          <View style={{borderBottomWidth: 2, width: width * 0.7}}>
            <Text
              style={{
                color: '#000',
                fontSize: height * 0.04,
                fontWeight: 'bold',
                textAlign: 'center',
              }}>
              Title
            </Text>
          </View>
          <View
            style={{
              alignItems: 'center',
              flexDirection: 'row',
              justifyContent: 'space-between',
              width: width * 0.5,
            }}>
            <View>
              <Text style={{fontSize: height * 0.03}}>Name</Text>
            </View>
            <View>
              <Text style={{fontSize: height * 0.03}}> :</Text>
            </View>
            <View>
              <Text style={{fontSize: height * 0.03, fontWeight: 'bold'}}>
                Title Name
              </Text>
            </View>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
}
