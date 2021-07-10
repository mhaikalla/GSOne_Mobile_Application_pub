import React, { Component } from 'react'
import { 
    View, 
    Image,
    Text,
    TouchableOpacity,
    Keyboard,
    TouchableWithoutFeedback, 
    Platform
} from 'react-native';
import Images from '../../../res/images';
import ThisStyle from './style';
import { useNavigation } from '@react-navigation/native';

const BottomBarScreen = () => {
  const navigation = useNavigation();
      return (
        <View style={ThisStyle.BottomBarContainer}>
              <TouchableOpacity style={ThisStyle.ContainerButton} onPress={()=>navigation.navigate('FAQScreen')}>
                <View style={ThisStyle.ContainerIcon}>
                  <Image source={Images.Icon.FAQMenu} style={ThisStyle.Icon}></Image> 
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={ThisStyle.ContainerButton} onPress={()=>{
                Keyboard.dismiss()
                navigation.navigate('ScanScreen')
                }}>
                <View style={ThisStyle.ButtonScan}>
                    <Image source={Images.Icon.ScanBtn} style={ThisStyle.ScanIcon}></Image>
                    <Text style={ThisStyle.TextButton}>Scan</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={ThisStyle.ContainerButton} onPress={()=>navigation.navigate('ProductList')}>
              <View style={ThisStyle.ContainerIcon}>
                      <Image source={Images.Icon.SearchMenu} style={ThisStyle.Icon}></Image> 
                </View>
              </TouchableOpacity>
            </View>
           
      );
    }
    export default BottomBarScreen;