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

const {height, width} = Dimensions.get('window');
export function Details(props) {
  const {item} = props.route.params;
  console.log(item, 'item');
  const renderItem = ({item}) => {
    return (
      <View
        style={{
          height: height * 0.16,
          backgroundColor: '#fef',
          marginBottom: height * 0.02,
          borderTopRightRadius: height * 0.03,
          borderBottomLeftRadius: height * 0.03,
          borderWidth: 3,
          borderColor: 'gold',
          justifyContent: 'space-around',
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <View>
          <View
            style={{
              borderRadius: height * 0.01,
              borderWidth: 1,
              width: width * 0.6,
              height: height * 0.05,
              backgroundColor: '#fff',
              alignItems: 'center',
              paddingHorizontal: height * 0.01,
              paddingVertical: height * 0.01,
              justifyContent: 'center',
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginBottom: height * 0.01,
            }}>
            <Text
              style={{
                fontSize: height * 0.024,
                fontWeight: 'bold',
                color: '#fc0373',
              }}>
              Name
            </Text>
            <Text style={{fontSize: height * 0.024, fontWeight: 'bold'}}>
              :
            </Text>
            <Text style={{fontSize: height * 0.024, fontWeight: 'bold'}}>
              name{item}
            </Text>
          </View>
          <View
            style={{
              borderRadius: height * 0.01,
              borderWidth: 1,
              width: width * 0.6,
              height: height * 0.05,
              backgroundColor: '#fff',
              paddingHorizontal: height * 0.01,
              paddingVertical: height * 0.01,
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <Text
              style={{
                fontSize: height * 0.024,
                fontWeight: 'bold',
                color: '#419147',
              }}>
              Date
            </Text>
            <Text style={{fontSize: height * 0.024, fontWeight: 'bold'}}>
              :
            </Text>
            <Text style={{fontSize: height * 0.024, fontWeight: 'bold'}}>
              date{item}
            </Text>
          </View>
        </View>
        <View>
          <TouchableOpacity>
            <Icon name="arrowright" type="antdesign" size={height * 0.04}  onPress={() => props.navigation.navigate('ShowData', {data: item})}/>
          </TouchableOpacity>
        </View>
      </View>
    );
  };
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
          Details
        </Text>
        <TouchableOpacity>
          <Icon
            onPress={() => props.navigation.navigate('AddDetails')}
            name="ios-add-circle-sharp"
            type="ionicon"
            style={{paddingHorizontal: 5}}
            size={height * 0.04}
          />
        </TouchableOpacity>
      </View>
      <View
        style={{
          width: width * 0.9,
          justifyContent: 'center',
          alignSelf: 'center',
          height: height * 0.9,
          marginTop: height * 0.02,
        }}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 12, 123, 345, 432, 456]}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    </ImageBackground>
  );
}
