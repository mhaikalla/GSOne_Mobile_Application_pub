import { NavigationContainer } from '@react-navigation/native';
import React from 'react';


import DrawerNavigator from "./DrawerNavigator";
import StackNavigator from "./StackNavigator";


function AppNavigator() {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
}



export default AppNavigator;
