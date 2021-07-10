// import ScreenV1 from "@ScreenV1";
// import ResV1 from "@ResV1";
// import images from './images';
import React from 'react';
import { AsyncStorage } from 'react-native';

const storeData = async (key, value) => {
    try {
        await AsyncStorage.setItem(
            key,
            JSON.stringify(value)
        );
    } catch (error) {
        // Error saving data
    }   
};

const getData = async (key) => {
      const value = await AsyncStorage.getItem(key);
      if (value !== null) {
        // We have data!!
        // alert(JSON.stringify(value));
        return JSON.parse(value);
      }
      return "";
  };

// const [ currentTheme, setCurrentTheme ] = React.useState(0);



const Storage = {
    storeData,
    getData
    // Images : images,
    // Screen : ScreenV1,
    // ResV1 : ResV1
}
export default Storage; 