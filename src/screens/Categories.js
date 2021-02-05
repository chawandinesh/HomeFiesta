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
export function Categories(props) {
  const renderItem = ({item}) => {
    return (
      <TouchableOpacity
        onPress={() => props.navigation.navigate('Details', {item: item})}
        style={{
          height: height * 0.16,
          backgroundColor: '#f7e9c3',
          marginBottom: height * 0.02,
          borderRadius: height * 0.05,
          borderWidth: 2,
          borderColor: 'gold',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text style={{fontWeight: 'bold', fontSize: height * 0.03}}>
          Category{item}
        </Text>
      </TouchableOpacity>
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
          Category
        </Text>
        <Text style={{paddingHorizontal: height * 0.03}}> </Text>
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
