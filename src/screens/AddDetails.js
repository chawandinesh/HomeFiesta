import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  Dimensions,
  TouchableOpacity,
  SafeAreaView,
  TextInput,
  Image,
  FlatList,
  StyleSheet,
} from 'react-native';
import {Header, Icon} from 'react-native-elements';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import ImagePicker from 'react-native-image-crop-picker';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import moment from 'moment';

// import DatePicker from 'react-native-date-picker'
import DatePicker from '../components/DatePIcker';
import {HomeFiestaContext} from '../screens/context'
const {height, width} = Dimensions.get('window');
export function AddDetails(props) {
  const {category, data,index} = props.route.params
  const {state, setState} = React.useContext(HomeFiestaContext)
  const [formState, setFormState] = React.useState({
    name: '',
    date: '',
    details: '',
    guestCount: '',
    specialNotes: '',
    image: '',
  });

  const [isDatePickerVisible, setDatePickerVisibility] = React.useState(false);


  React.useEffect(() => {
    if(data) {
      setFormState(data[index])
    }
  },[])

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    // console.warn("A date has been picked: ", moment(date).format("DD-MM-YYYY"));
    setFormState({...formState, date: moment(date).format('DD-MM-YYYY')});
    hideDatePicker();
  };

  const pickImage = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
    })
      .then((image) => {
        setFormState({...formState, image: image.path});
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleSubmit = () => {
    if(data){
       [...state[category].splice(index,1,formState)]
       setState(state)
    }else{
      setState({...state, [category]: [...state[category], formState]})

    }
    props.navigation.goBack()
  };
  return (
    <SafeAreaView>
    <ImageBackground
      resizeMode="stretch"
      source={require('../assets/bg5.jpg')}
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
          Add Details
        </Text>
        <TouchableOpacity></TouchableOpacity>
      </View>
      <KeyboardAwareScrollView
        style={{
          marginTop: height * 0.05,
        }}
        contentContainerStyle={{
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <View
          style={{
            borderColor: '#fff',
            borderWidth: 1,
            height: height * 0.07,
            width: width * 0.8,
            borderRadius: height * 0.03,
            paddingLeft: width * 0.03,
            marginBottom: height * 0.04,
          }}>
          <Text style={{color: 'gold'}}>Name:</Text>
          <TextInput
            style={{height: height * 0.05, color: '#fff'}}
            placeholder="Enter name.."
            onChangeText={(text) => setFormState({...formState, name: text})}
            value={formState.name}
            placeholderTextColor="gray"
          />
        </View>

        <View
          style={{
            borderColor: '#fff',
            borderWidth: 1,
            height: height * 0.07,
            width: width * 0.8,
            borderRadius: height * 0.03,
            paddingLeft: width * 0.03,
            marginBottom: height * 0.04,
          }}>
          <Text style={{color: 'gold'}}>Date:</Text>
          <View style={styles.searchSection}>
            <TextInput
              style={{height: height * 0.05, color: '#fff'}}
              editable={false}
              value={formState.date}
              placeholderTextColor="gray"
              placeholder="select Date"
              onChangeText={(text) => setFormState({...formState, date: text})}
              underlineColorAndroid="transparent"
            />
            <Icon
              style={styles.searchIcon}
              onPress={showDatePicker}
              name="date"
              type="fontisto"
              size={height * 0.03}
              color="gold"
            />
          </View>
        </View>

        <View
          style={{
            borderColor: '#fff',
            borderWidth: 1,
            height: height * 0.07,
            width: width * 0.8,
            borderRadius: height * 0.03,
            paddingLeft: width * 0.03,
            marginBottom: height * 0.04,
          }}>
          <Text style={{color: 'gold'}}>Details:</Text>
          <TextInput
            placeholder="Enter Details..."
            placeholderTextColor="gray"
            value={formState.details}
            style={{height: height * 0.05, color: '#fff'}}
            onChangeText={(text) => setFormState({...formState, details: text})}
          />
        </View>

        <View
          style={{
            borderColor: '#fff',
            borderWidth: 1,
            height: height * 0.07,
            width: width * 0.8,
            borderRadius: height * 0.03,
            paddingLeft: width * 0.03,
            marginBottom: height * 0.04,
          }}>
          <Text style={{color: 'gold'}}>Guest Count:</Text>
          <TextInput
            keyboardType="numeric"
            placeholderTextColor="gray"
            value={formState.guestCount}
            placeholder="Enter guest count"
            style={{height: height * 0.05, color: '#fff'}}
            onChangeText={(text) =>
              setFormState({...formState, guestCount: text})
            }
          />
        </View>

        <View
          style={{
            borderColor: '#fff',
            borderWidth: 1,
            height: height * 0.17,
            width: width * 0.8,
            borderRadius: height * 0.03,
            paddingLeft: width * 0.03,
            marginBottom: height * 0.04,
          }}>
          <Text style={{color: 'gold'}}>Special Notes:</Text>
          <TextInput
            multiline
            placeholder="Enter notes.."
            placeholderTextColor="gray"
            value={formState.specialNotes}
            onChangeText={(text) =>
              setFormState({...formState, specialNotes: text})
            }
            numberOfLines={4}
            style={{height: height * 0.12, color: '#fff'}}
          />
        </View>
        <View
          style={{
            height: height * 0.12,
            marginBottom: height * 0.01,
            width: width,
            flexDirection: 'row',
            justifyContent: 'space-around',
            alignItems: 'center',
          }}>
          <TouchableOpacity
            onPress={pickImage}
            style={{
              width: width * 0.24,
              height: width * 0.24,
              backgroundColor: '#000',
              borderWidth: 2,
              borderColor: 'darkgray',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            {formState.image ? (
              <Image
                source={{uri: formState.image}}
                style={{width: width * 0.24, height: width * 0.24}}
                resizeMode="stretch"
              />
            ) : (
              <Icon
                name="ios-images"
                type="ionicon"
                size={height * 0.05}
                color="gold"
              />
            )}
          </TouchableOpacity>
          <View>
            <Icon name="arrow-long-left" type="entypo" color="#fff" />
          </View>
          <View>
            <Text
              style={{
                fontSize: height * 0.03,
                fontWeight: 'bold',
                color: '#fff',
              }}>
              Add Image
            </Text>
          </View>
        </View>

        <View>
          <TouchableOpacity
            onPress={() => handleSubmit()}
            style={{
              borderWidth: 2,
              borderRadius: height * 0.02,
              borderColor: '#fff',
              height: height * 0.05,
              backgroundColor: 'gold',
              width: width * 0.5,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text
              style={{
                color: '#000',
                fontWeight: 'bold',
                fontSize: height * 0.02,
              }}>
              Submit
            </Text>
          </TouchableOpacity>
        </View>
      </KeyboardAwareScrollView>
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />
    </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  searchSection: {
    flex: 1,
    flexDirection: 'row',
    width: width * 0.73,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  searchIcon: {
    paddingRight: 15,
    paddingBottom: 20,
    // color:'#fff'
    // backgroundColor:'red'
  },
  input: {
    flex: 1,
    paddingTop: 10,
    paddingRight: 10,
    paddingBottom: 10,
    paddingLeft: 0,
    // backgroundColor: '#fff',
    color: '#424242',
  },
});
