import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  Dimensions,
  TouchableOpacity,
  Image,
  SafeAreaView,
  ScrollView,
  FlatList,
} from 'react-native';
import {useIsFocused} from '@react-navigation/native'
import {Header, Icon} from 'react-native-elements';
import {TouchableHighlight} from 'react-native-gesture-handler';
import {HomeFiestaContext} from './context';
const {height, width} = Dimensions.get('window');
export function ViewAllData(props) {
  const {data} = props.route.params;
  const isFocused = useIsFocused();
  const getInitialData = async () => {};
  React.useEffect(() => {
    getInitialData();
  }, [props, isFocused]);
  return (
    <SafeAreaView>
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
          View All Details
        </Text>
        <Text></Text>
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
          {/* <TouchableOpacity
            onPress={() => handleUpdate()}
            style={{position: 'absolute', bottom: 10, left: 10}}>
            <Icon name="create" type="ionicon" color="black" raised />
          </TouchableOpacity>
          <TouchableOpacity
             onPress={() => handleRemove()}
            style={{position: 'absolute', bottom: 10, right: 10}}>
            <Icon name="trash" type="ionicon" color="darkred" raised />
          </TouchableOpacity> */}
          <View style={{borderBottomWidth: 2, width: width * 0.7}}>
            <Text
              style={{
                color: '#000',
                fontSize: height * 0.04,
                fontWeight: 'bold',
                textAlign: 'center',
              }}>
              {/* {category} */}
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
                {data.name ? data.name : null}
              </Text>
            </View>
          </View>

          <View
            style={{
              alignItems: 'center',
              flexDirection: 'row',
              justifyContent: 'space-between',
              width: width * 0.5,
            }}>
            <View>
              <Text style={{fontSize: height * 0.03}}>date</Text>
            </View>
            <View>
              <Text style={{fontSize: height * 0.03}}> :</Text>
            </View>
            <View>
              <Text style={{fontSize: height * 0.03, fontWeight: 'bold'}}>
                {data.date ? data.date : null}
              </Text>
            </View>
          </View>

          <View
            style={{
              alignItems: 'center',
              flexDirection: 'row',
              justifyContent: 'space-between',
              width: width * 0.5,
            }}>
            <View>
              <Text style={{fontSize: height * 0.03}}>Guest Count</Text>
            </View>
            <View>
              <Text style={{fontSize: height * 0.03}}> :</Text>
            </View>
            <View>
              <Text style={{fontSize: height * 0.03, fontWeight: 'bold'}}>
                {data.guestCount ? data.guestCount : null}
              </Text>
            </View>
          </View>

          <View
            style={{
              alignItems: 'center',
              flexDirection: 'row',
              justifyContent: 'space-between',
              width: width * 0.5,
            }}>
            <View>
              <Text style={{fontSize: height * 0.03}}>details</Text>
            </View>
            <View>
              <Text style={{fontSize: height * 0.03}}> :</Text>
            </View>
            <View>
              <Text style={{fontSize: height * 0.03, fontWeight: 'bold'}}>
                {data.details ? data.details : null}
              </Text>
            </View>
          </View>

          <View
            style={{
              alignItems: 'center',
              flexDirection: 'row',
              justifyContent: 'space-between',
              width: width * 0.5,
            }}>
            <View>
              <Text style={{fontSize: height * 0.03}}>Notes</Text>
            </View>
            <View>
              <Text style={{fontSize: height * 0.03}}> :</Text>
            </View>
            <ScrollView
              style={{
                width: width * 0.4,
                height: width * 0.3,
                marginLeft: width * 0.05,
              }}>
              <Text style={{fontSize: height * 0.02}}>
                {data.specialNotes ? data.specialNotes : null}
              </Text>
            </ScrollView>
          </View>

          <View>
            {data.image ? (
              <View
                style={{
                  width: width * 0.3,
                  borderWidth: 2,
                  height: width * 0.3,
                  backgroundColor: '#fff',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginTop: height * 0.07,
                }}>
                <Image
                  source={{uri: data.image}}
                  resizeMode="stretch"
                  style={{width: width * 0.29, height: width * 0.29}}
                />
              </View>
            ) : (
              <View
                style={{
                  width: width * 0.3,
                  borderWidth: 2,
                  height: width * 0.3,
                  backgroundColor: '#fff',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginTop: height * 0.07,
                }}>
                <Text>No Image</Text>
              </View>
            )}
          </View>
        </View>
      </View>
    </ImageBackground>
    </SafeAreaView>
  );
}
