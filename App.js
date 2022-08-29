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

function App() {
  return (
    <NavigationContainer
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Navigator>
        <Stack.Screen
          name="Ebull"
          component={Ebull}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="LoginEmail"
          component={LoginEmail}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="LoginPhone"
          component={LoginPhone}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Register"
          component={Register}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Account"
          component={Account}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Referal"
          component={Referal}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Personal"
          component={Personal}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Personalinfo"
          component={Personalinfo}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="PersonalVer"
          component={PersonalVer}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Pver"
          component={Pver}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Pver1"
          component={Pver1}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="LoginEmail1"
          component={LoginEmail1}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;

