import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  Dimensions,
  Image,
  Modal,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {Divider, Rating, AirbnbRating} from 'react-native-elements';

const {height, width} = Dimensions.get('window');
export function HomeScreen(props) {
  const [modalVisible, setModalVisible] = React.useState(false);
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
              onPress={() => props.navigation.navigate('Categories')}
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
              onPress={() =>
                props.navigation.navigate('ViewAllDetails', {items: null})
              }
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
              onPress={() => setModalVisible(true)}
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
              onPress={() => props.navigation.navigate('AboutUs')}
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

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Image
              style={{
                width: width * 0.2,
                height: width * 0.2,
                margin: height * 0.01,
              }}
              resizeMode="stretch"
              source={require('../assets/background1.jpg')}
            />
            <Text
              style={[{...styles.modalText, fontSize: 20, fontWeight: 'bold'}]}>
              Enjoying Home Celebrations?
            </Text>
            <Text style={{fontSize: 15}}>Tap a star to rate it on the</Text>
            <Text style={{fontSize: 15}}>App Store.</Text>
            <Divider
              style={{backgroundColor: 'black', height: 1, width: width * 0.8}}
            />

            <View style={{paddingVertical: 10}}>
              <AirbnbRating showRating={false} />
            </View>
            <Divider
              style={{backgroundColor: 'black', height: 1, width: width * 0.8}}
            />
            <TouchableOpacity
              onPress={() => {
                setModalVisible(!modalVisible);
              }}>
              <Text
                style={[
                  {
                    ...styles.textStyle,
                    color: '#000',
                    fontSize: height * 0.024,
                    paddingTop: height * 0.012,
                  },
                ]}>
                Not Now
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    width: width * 0.9,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },

  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});
