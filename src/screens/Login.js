import React, {useState} from 'react';
import {
  StyleSheet,
  ImageBackground,
  Dimensions,
  StatusBar,
  TouchableWithoutFeedback,
  ActivityIndicator,
  Keyboard,
  useWindowDimensions,
  TouchableOpacity,
  Image,
  KeyboardAvoidingView,
  Alert,
  View,
  ScrollView,
  // TextInput as Input,
  Image as Icon,
} from 'react-native';
import {Block, Checkbox, Text} from 'galio-framework';
import {useSelector, useDispatch} from 'react-redux';
import {_onAPLogin} from '../redux/reducers/ap-user/ap_user_actions';
import Input from '../components/Input';
import Axios from 'axios';
// import { Images, argonTheme } from "../constants";
// import Loading from "../constants/loading";
// import { ScrollView, State } from "react-native-gesture-handler";
// import SweetAlert from "../components/SweetAlert";
const window = Dimensions.get('window');

let height = window.height;
let width = window.width;
const DismissKeyboard = ({children}) => (
  <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    {children}
  </TouchableWithoutFeedback>
);
function Login({navigation, route}) {
  // let param=route.params?.value;
  // console.log(param,")))))))))login")

  const [email, setemail] = useState(null);
  const [password, setpassword] = useState(null);
  const [loading, setloading] = useState(false);
  const dispatch = useDispatch();

  // for Guest
  var GuestData = new FormData();
  GuestData.append('email', 'guest@shareslate.com');
  GuestData.append('password', '123456');
  // for user
  var bodyFormData = new FormData();
  bodyFormData.append('email', email);
  bodyFormData.append('password', password);
  // windows height width
  let windo = useWindowDimensions('windows');
  // console.log(windo, height, width, window);
  const {aplogin_loading} = useSelector(state => state.ap_user);

  const handleLogin = () => {
    const url = 'https://meet-api.shareslate.com/api/sessions/sign_in_api';

    let params = new FormData();

    params.append('email', email);
    params.append('password', password);

    Axios.post(url, params)
      .then(res => {
        console.log('res', res.data);

        alert('Login successfully');

        navigation.navigate('Home', {
          user: res.data.user,
        });
      })
      .catch(err => alert(err));
  };

  return (
    <KeyboardAvoidingView
      keyboardVerticalOffset={2}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{flex: 1, backgroundColor: '#222020'}}>
      <ScrollView>
        <Block flex center>
          <StatusBar hidden />
          <View
            source={require('../assets/bg.jpeg')}
            style={{width, height, zIndex: 1, paddingVertical: 100}}>
            <Block
              center
              style={{
                height: '10%',
              }}>
              <Image
                source={require('../assets/home.png')}
                resizeMode={'contain'}
                style={{width: width * 0.7, marginBottom: -4}}
              />
            </Block>

            <Block center style={styles.registerContainer}>
              <Block flex={0.2} middle>
                <Text
                  style={{
                    fontFamily: 'open-sans-regular',
                    textAlign: 'center',
                  }}
                  color="#8898AA"
                  size={20}>
                  LOGIN
                </Text>
              </Block>
              <Block flex space="around">
                <Block width={width * 0.8} style={[{marginBottom: 10}]}>
                  <Input
                    onChangeText={e => {
                      setemail(e);
                    }}
                    // style={styles.textInput}
                    borderless
                    value={email}
                    placeholder="Email"
                    // placeholderTextColor={'grey'}
                    // iconContent={
                    //   <Icon
                    //     size={16}
                    //     color="#ADB5BD"
                    //     name="ic_mail_24px"
                    //     family="ArgonExtra"
                    //     style={styles.inputIcons}
                    //   />
                    // }
                  />
                </Block>
                <Block width={width * 0.8}>
                  <Input
                    onChangeText={e => {
                      setpassword(e);
                    }}
                    // style={styles.textInput}
                    value={password}
                    placeholder="Password"
                    placeholderTextColor="grey"
                    password
                    iconName="lock"
                    // iconContent={
                    //   <Icon
                    //     size={16}
                    //     color="#ADB5BD"
                    //     name="padlock-unlocked"
                    //     family="ArgonExtra"
                    //     style={styles.inputIcons}
                    //   />
                    // }
                  />
                </Block>

                <TouchableOpacity
                  onPress={() => navigation.navigate('ResetPassword')}>
                  <Block
                    center
                    style={styles.passwordCheck}
                    width={width * 0.8}>
                    <Text
                      style={{
                        fontFamily: 'open-sans-bold',
                        fontWeight: 'bold',
                        alignSelf: 'center',
                      }}
                      size={15}
                      color="#8898AA">
                      Forgot Password?
                    </Text>
                  </Block>
                </TouchableOpacity>

                <Block center>
                  <TouchableOpacity
                    onPress={() => {
                      setloading(!loading);
                      if (email == null || password == null) {
                        Alert.alert('Missing required fields!');
                      } else {
                        // dispatch(_onAPLogin(bodyFormData, navigation));

                        handleLogin();
                      }
                    }}
                    color="primary"
                    style={styles.createButton}>
                    {aplogin_loading == false ? (
                      <Text
                        style={{fontFamily: 'open-sans-bold'}}
                        size={14}
                        color={'#fff'}>
                        Login
                      </Text>
                    ) : (
                      <ActivityIndicator color={'white'} />
                    )}
                  </TouchableOpacity>
                </Block>
                <Block row center style={{marginVertical: 10}}>
                  <Text
                    style={{
                      fontFamily: 'open-sans-regular',
                      alignSelf: 'center',
                    }}
                    size={13}
                    color="#8898AA">
                    Not on Share Slate?{' '}
                  </Text>
                  <TouchableOpacity
                    onPress={() => {
                      navigation.navigate('Register');
                    }}>
                    <Text
                      size={14}
                      style={{
                        fontFamily: 'open-sans-bold',
                        fontWeight: 'bold',
                        color: '#3366BB',
                      }}>
                      Click here
                    </Text>
                  </TouchableOpacity>
                  <Text
                    style={{
                      fontFamily: 'open-sans-regular',
                      alignSelf: 'center',
                    }}
                    size={13}
                    color="#8898AA">
                    {' '}
                    to Register
                  </Text>
                </Block>
                <Block row center style={{marginBottom: 20}}>
                  <TouchableOpacity
                    style={{flexDirection: 'row'}}
                    onPress={() => {
                      dispatch(_onAPLogin(GuestData, navigation));
                      setemail(null);
                      setpassword(null);
                    }}>
                    <Text
                      style={{
                        fontFamily: 'open-sans-bold',
                        alignSelf: 'center',
                      }}
                      size={13}
                      color="#3366BB">
                      Continue as{' '}
                    </Text>

                    <Text
                      size={14}
                      style={{
                        fontFamily: 'open-sans-bold',
                        fontWeight: 'bold',
                        color: '#3366BB',
                      }}>
                      Guest
                    </Text>
                  </TouchableOpacity>
                </Block>
              </Block>
            </Block>
          </View>
        </Block>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  registerContainer: {
    width: width * 0.9,
    // backgroundColor: 'red',
    marginTop: height * 0.15,
    height: height * 0.5,
    backgroundColor: '#F4F5F7',
    borderRadius: 4,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 8,
    shadowOpacity: 0.1,
    elevation: 1,
    overflow: 'hidden',
  },

  inputIcons: {
    marginRight: 12,
  },
  passwordCheck: {
    paddingTop: height * 0.02,
  },
  createButton: {
    width: width * 0.6,
    height: height < 812 ? height * 0.06 : 48,

    marginVertical: height * 0.03,
    backgroundColor: '#4263D8',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textInput: {
    // height: 50,
    shadowColor: 'grey',
    shadowOffset: {
      height: 3,
      width: 3,
    },
    shadowRadius: 20,
    // borderWidth: 1,
    shadowOpacity: 0.5,
    color: 'grey',
    elevation: 3,
  },
});

export default Login;
