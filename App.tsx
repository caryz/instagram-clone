import { StatusBar } from 'expo-status-bar';
import React from 'react';

import * as firebase from 'firebase'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCkiLsPTWO1S3o6PvQIG51cqulXpUDIfJE",
  authDomain: "instagram-dev-af3ce.firebaseapp.com",
  projectId: "instagram-dev-af3ce",
  storageBucket: "instagram-dev-af3ce.appspot.com",
  messagingSenderId: "121380685983",
  appId: "1:121380685983:web:e84fe4bdb06b8a7facbaaa",
  measurementId: "G-ERRKM2TR42"
};

if(firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig)
}

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import LandingScreen from './components/auth/Landing'
import RegisterScreen from './components/auth/Register';

const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Landing'>
        <Stack.Screen 
          name='Landing' 
          component={ LandingScreen }
          options={{ headerShown: false }}
        />
        <Stack.Screen 
          name="Register"
          component={ RegisterScreen }
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
