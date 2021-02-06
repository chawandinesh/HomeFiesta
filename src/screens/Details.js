import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  SafeAreaView,
  Dimensions,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import {Header, Icon} from 'react-native-elements';
import {useIsFocused} from '@react-navigation/native';
import {HomeFiestaContext} from './context';
const {height, width} = Dimensions.get('window');
export function Details(props) {
  const {state, setState} = React.useContext(HomeFiestaContext);
  const {category} = props.route.params;
  const isFocused = useIsFocused();
  const getInitialData = async () => {};
  React.useEffect(() => {
    getInitialData();
  }, [props, isFocused]);
  const renderItem = ({item, index}) => {
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
              {item.name}
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
              {item.date}
            </Text>
          </View>
        </View>
        <View>
          <TouchableOpacity>
            <Icon
              name="arrowright"
              type="antdesign"
              size={height * 0.04}
              onPress={() => {
                props.navigation.navigate('ShowData', {
                  category: category,
                  data: state[category],
                  index: index,
                });
              }}
            />
          </TouchableOpacity>
        </View>
      </View>
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
          Details
        </Text>
        <TouchableOpacity>
          <Icon
            onPress={() =>
              props.navigation.navigate('AddDetails', {category: category})
            }
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
        {state[category].length ? (
          <FlatList
            showsVerticalScrollIndicator={false}
            data={state[category]}
            renderItem={renderItem}
            keyExtractor={(item, index) => index.toString()}
          />
        ) : (
          <View
            style={{
              borderWidth: 2,
              borderColor: 'gold',
              padding: height * 0.02,
            }}>
            <Text
              style={{
                fontSize: height * 0.03,
                fontWeight: 'bold',
                color: '#fff',
                textAlign: 'center',
              }}>
              No data Found , Please click on + to add data
            </Text>
          </View>
        )}
      </View>
    </ImageBackground>
    </SafeAreaView>
  );
}
