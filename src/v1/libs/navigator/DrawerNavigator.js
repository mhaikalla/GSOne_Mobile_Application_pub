import { createDrawerNavigator } from '@react-navigation/drawer';
import React from 'react';
import {View, StyleSheet, Text, Image, TouchableOpacity, Keyboard, Platform} from 'react-native';
import Resource from '../../res';
import StackNavigator from "./StackNavigator";

import { DrawerActions, useNavigation } from '@react-navigation/native';
import Screen from "dips-v1/screen";

const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  const navigation = useNavigation();
  return (
       <Drawer.Navigator
         drawerPosition="right"
         initialRouteName="Home"
         drawerContent={() => 
            <View>
            <View style={[ThisStyle.SideBarContainer, Platform.OS =='android' ? {marginTop: 0} : {marginTop : 20}  ]}>
            <View style={ThisStyle.Header}>
                <Image source={Resource.Images.Logo.Logo_Transparent_White} style={ThisStyle.LogoHeader}/>
                <TouchableOpacity style={ThisStyle.ExitBtn} onPress={() => {
                  navigation.dispatch(DrawerActions.closeDrawer());
                  }}>
                    <Image source={Resource.Images.Icon.ExitMenu} style={ThisStyle.IconExitBtn}/>
                </TouchableOpacity>
            </View>
                  <TouchableOpacity style={ThisStyle.SubMenu} onPress={() => {
                      navigation.dispatch(DrawerActions.jumpTo('Home'))}
                      }>
                    <Image source={Resource.Images.Icon.HomeMenu} style={ThisStyle.IconMenu}/> 
                    <Text style={ThisStyle.TextMenu}>Home</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={ThisStyle.SubMenu} onPress={() => {
                      Keyboard.dismiss()
                      navigation.dispatch(DrawerActions.jumpTo('ScanScreen'))}
                      }>
                    <Image source={Resource.Images.Icon.ScanMenu} style={ThisStyle.IconMenu}/> 
                    <Text style={ThisStyle.TextMenu}>Scan Barcode</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={ThisStyle.SubMenu} onPress={() => {
                      navigation.dispatch(DrawerActions.jumpTo('ArticleList'))}
                      }>
                    <Image source={Resource.Images.Icon.NewsMenu} style={ThisStyle.IconMenu}/> 
                    <Text style={ThisStyle.TextMenu}>News</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={ThisStyle.SubMenu} onPress={() => {
                      navigation.dispatch(DrawerActions.jumpTo('ProductList'))}
                      }>
                    <Image source={Resource.Images.Icon.ProductMenu} style={ThisStyle.IconMenu}/> 
                    <Text style={ThisStyle.TextMenu}>Product</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={ThisStyle.SubMenu} onPress={() => {
                      navigation.dispatch(DrawerActions.jumpTo('FAQScreen'))}
                      }>
                    <Image source={Resource.Images.Icon.FAQMenu} style={ThisStyle.IconMenu} /> 
                    <Text style={ThisStyle.TextMenu}>FAQ</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={ThisStyle.SubMenu} onPress={() => {
                      navigation.dispatch(DrawerActions.jumpTo('AboutUsScreen'))}
                      }>
                    <Image source={Resource.Images.Icon.AboutMenu} style={ThisStyle.IconMenu}/> 
                    <Text style={ThisStyle.TextMenu}>About Us</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={ThisStyle.SubMenu} onPress={() => {
                      navigation.dispatch(DrawerActions.jumpTo('ContactUsScreen'))}
                      }>
                    <Image source={Resource.Images.Icon.ContactMenu} style={ThisStyle.IconMenu}/> 
                    <Text style={ThisStyle.TextMenu}>Contact Us</Text>
                  </TouchableOpacity>
                 
              </View>
          </View>
         }>
        
         <Drawer.Screen
           name="Home"
           component={Screen.Home}
         />
         <Drawer.Screen
           name="ScanScreen"
           component={Screen.ScanScreen}
         />
         <Drawer.Screen
           name="ArticleList"
           component={Screen.ArticleList}
         />
         <Drawer.Screen
            name="ProductList"
            component={Screen.ProductList}
          />
          <Drawer.Screen
            name="ProductDetail"
            component={Screen.ProductDetail}
          />
          <Drawer.Screen
            name="FAQScreen"
            component={Screen.FAQ}
          />
          <Drawer.Screen
            name="ContactUsScreen"
            component={Screen.ContactUs}
          />
          <Drawer.Screen
            name="AboutUsScreen"
            component={Screen.AboutUs}
          />
          <Drawer.Screen
            name="ArticleDetailScreen"
            component={Screen.ArticleDetail}
          />
       </Drawer.Navigator>
    //    <Drawer.Navigator
    //       drawerPosition="right"
    //       initialRouteName="Home"
    //     >
    //   
    //  </Drawer.Navigator>

  );
}

  const ThisStyle = StyleSheet.create({
    SideBarContainer :{
      paddingHorizontal :20
    },
    SubMenu : {
      // borderColor : 'red',
      // borderWidth : 1,
       height: 60 ,
       flexDirection: 'row',
     
       borderBottomColor : '#DCDCDC',
       borderBottomWidth : 0.5,
       
    },
  IconMenu : {
    width : 40,
    height: 40,
    marginRight: 20,
    alignSelf: 'center'
  },
  TextMenu :{
    // borderColor : 'red',
    // borderWidth : 1,

    flex:1,
    fontSize : 20,
    color : '#002C6B',
    alignSelf: 'center',
    marginBottom : 5
  },
  Header :{
      // borderColor : 'grey',
      // borderWidth : 1,
      
      width : '100%',
      height: '15%',
      marginVertical : 20,
      flexDirection:  'row',
      justifyContent : 'space-between' 
  },
  LogoHeader:{
    width: 90,
    height: 50,
    resizeMode : 'contain',
    alignSelf :'center'
  },
  ExitBtn :{
      // borderColor : 'grey',
      // borderWidth : 1,
      width : 34,
      height: 33, 
      alignSelf : 'center',
      flexDirection : 'row',
      justifyContent : 'center'
  },
  IconExitBtn :{
    //  borderColor : 'grey',
    //   borderWidth : 1,
      alignSelf : 'center',
      width: '50%',
      height: '50%'
  }
  
  })
export default DrawerNavigator;