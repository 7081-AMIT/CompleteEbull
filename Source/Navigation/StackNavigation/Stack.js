import * as React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
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

const Stack = createNativeStackNavigator();

function Stack() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Ebull" component={Ebull} />
        <Stack.Screen name="LoginEmail" component={LoginEmail} />
        <Stack.Screen name="LoginPhone" component={LoginPhone} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Account" component={Account} />
        <Stack.Screen name="Referal" component={Referal} />
        <Stack.Screen name="Personal" component={Personal} />
        <Stack.Screen name="Personalinfo" component={Personalinfo} />
        <Stack.Screen name="PersonalVer" component={PersonalVer} />
        <Stack.Screen name="Pver" component={Pver} />
        <Stack.Screen name="Pver1" component={Pver1} />

        <Stack.Screen name="LoginEmail1" component={LoginEmail1} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default Stack;
