import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  Dimensions,
  TouchableOpacity,
  SafeAreaView,
  FlatList,
} from 'react-native';
import {Header, Icon} from 'react-native-elements';
import {HomeFiestaContext} from './context'
const {height, width} = Dimensions.get('window');
export function Categories(props) {
  const {state,setState} = React.useContext(HomeFiestaContext)
  const renderItem = ({item}) => {
    return (
      <TouchableOpacity
        onPress={() => props.navigation.navigate('Details', {category: item})}
        style={{
          height: height * 0.16,
          backgroundColor: '#f7e9c3',
          marginBottom: height * 0.02,
          // borderRadius: height * 0.05,
          borderTopRightRadius: height * 0.04,
          borderBottomLeftRadius: height * 0.04,
          // borderWidth: 2,
          borderWidth: 10,
          borderColor: 'gold',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text style={{fontWeight: 'bold', fontSize: height * 0.03}}>
          {/* Category{item} */}
          {item}
        </Text>
      </TouchableOpacity>
    );
  };
  return (
    <SafeAreaView style={{flex:1}}>
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
          data={Object.keys(state).sort()}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    </ImageBackground>
    </SafeAreaView>
  );
}
