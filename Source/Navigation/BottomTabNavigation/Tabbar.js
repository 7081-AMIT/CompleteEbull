import * as React from 'react';
import {View, Text, Image, StyleSheet, style, Dimensions} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
//import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {enableScreens} from 'react-native-screens';
import Ebull from './Source/Screen/Ebull/Ebull';
import LoginEmail1 from './Source/Screen/LoginEmail/LoginEmail1';
import LoginEmail from './Source/Screen/LoginEmail/LoginEmail';
import LoginPhone from './Source/Screen/LoginPhone/LoginPhone';
import Register from './Source/Screen/Register/Register';
import Account from './Source/Screen/Account/Account';
import Referal from './Source/Screen/Referal/Referal';
import Personal from './Source/Screen/Personal/Personal';
import Personalinfo from './Source/Screen/Personalinfo/Personalinfo';
import PersonalVer from './Source/Screen/PersonalVer/PersonalVer';
import Pver from './Source/Screen/Pver/Pver';
import Pver1 from './Source/Screen/Pver1/Pver1';
const {height, width} = Dimensions.get('window');

//const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function Tabbar() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Ebull"
          component={Ebull}
          options={{
            tabBarIcon: ({color}) => (
              <Image
                style={{height: height * 0.02, width: width * 0.04}}
                source={require('../AmitM/Source/Assets/Image/hom.png')}
              />
            ),
            tabBarLabel: 'Ebull',
          }}
        />
        <Tab.Screen
          name="LoginEmail"
          component={LoginEmail}
          options={{
            tabBarIcon: ({color}) => (
              <Image
                style={{height: height * 0.02, width: width * 0.06}}
                source={require('../AmitM/Source/Assets/Image/gmail.png')}
              />
            ),
          }}
        />
        <Tab.Screen
          name="LoginPhone"
          component={LoginPhone}
          options={{
            tabBarIcon: ({color}) => (
              <Image
                style={{height: height * 0.02, width: width * 0.04}}
                source={require('../AmitM/Source/Assets/Image/phon.png')}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Register"
          component={Register}
          options={{
            tabBarIcon: ({color}) => (
              <Image
                style={{height: height * 0.04, width: width * 0.06}}
                source={require('../AmitM/Source/Assets/Image/reg.jpeg')}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Account"
          component={Account}
          options={{
            tabBarIcon: ({color}) => (
              <Image
                style={{height: height * 0.035, width: width * 0.06}}
                source={require('../AmitM/Source/Assets/Image/ac.png')}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Referal"
          component={Referal}
          options={{
            tabBarIcon: ({color}) => (
              <Image
                style={{height: height * 0.0235, width: width * 0.06}}
                source={require('../AmitM/Source/Assets/Image/referal.png')}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Personal"
          component={Personal}
          options={{
            tabBarIcon: ({color}) => (
              <Image
                style={{height: height * 0.025, width: width * 0.04}}
                source={require('../AmitM/Source/Assets/Image/ver.png')}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Personalinfo"
          component={Personalinfo}
          options={{
            tabBarIcon: ({color}) => (
              <Image
                style={{height: height * 0.025, width: width * 0.04}}
                source={require('../AmitM/Source/Assets/Image/ver.png')}
              />
            ),
          }}
        />
        <Tab.Screen
          name="PersonalVer"
          component={PersonalVer}
          options={{
            tabBarIcon: ({color}) => (
              <Image
                style={{height: height * 0.025, width: width * 0.04}}
                source={require('../AmitM/Source/Assets/Image/ver.png')}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Pver"
          component={Pver}
          options={{
            tabBarIcon: ({color}) => (
              <Image
                style={{height: height * 0.035, width: width * 0.05}}
                source={require('../AmitM/Source/Assets/Image/otp.jpeg')}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Pver1"
          component={Pver1}
          options={{
            tabBarIcon: ({color}) => (
              <Image
                style={{height: height * 0.035, width: width * 0.05}}
                source={require('../AmitM/Source/Assets/Image/otp.jpeg')}
              />
            ),
          }}
        />

        <Tab.Screen
          name="LoginEmail1"
          component={LoginEmail1}
          options={{
            tabBarIcon: ({color}) => (
              <Image
                style={{height: height * 0.02, width: width * 0.06}}
                source={require('../AmitM/Source/Assets/Image/gmail.png')}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
export default Tabbar;
