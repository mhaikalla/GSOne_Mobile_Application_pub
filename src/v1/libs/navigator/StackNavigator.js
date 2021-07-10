import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import Screen from "dips-v1/screen";


import DrawerNavigator from "./DrawerNavigator";

const Stack = createStackNavigator();


function StackNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}>
      <Stack.Screen
        name="Home"
        component={DrawerNavigator}
      />
      <Stack.Screen
        name="ArticleList"
        component={Screen.ArticleList}
      />
        <Stack.Screen
        name="ProductList"
        component={Screen.ProductList}
      />
      <Stack.Screen
        name="ProductDetail"
        component={Screen.ProductDetail}
      />
      <Stack.Screen
        name="ScanScreen"
        component={Screen.ScanScreen}
      />
      <Stack.Screen
      name="FAQScreen"
      component={Screen.FAQ}
      />
      <Stack.Screen
        name="ContactUsScreen"
        component={Screen.ContactUs}
      />
      <Stack.Screen
        name="AboutUsScreen"
        component={Screen.AboutUs}
      />
      <Stack.Screen
        name="ArticleDetailScreen"
        component={Screen.ArticleDetail}
      />
    </Stack.Navigator>
  );
}



export default StackNavigator;
