import * as React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {enableScreens} from 'react-native-screens';
import Ebull from './Source/Screen/Ebull/Ebull';

const Stack = createNativeStackNavigator();

function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Ebull" component={Ebull} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default Routes;
