import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from './src/screens/Login';
import Register from './src/screens/Register';
import Home from './src/screens/HomeScreen';

// import bbb from 'bigbluebutton-js';

let config = {
  host: 'meet-api.shareslate.com',
  serverUrl: 'http://meet-api.shareslate.com/bigbluebutton/',
  secret: 'iqooI2hOvBal583Ykyafabo8HaXxtAGGjKvIsLiyIQ',
  app: '/bigbluebutton/api/',
};

// const api = bbb.api(config.serverUrl, config.secret);

// const HTTP = bbb.http;

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});
