// import ScreenV1 from "@ScreenV1";
// import ResV1 from "@ResV1";
// import images from './images';
import {  StyleSheet, Dimensions } from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const GlobalStyle = StyleSheet.create({
    
    ImageMenuIcon : {
      resizeMode : "center",
      alignSelf : 'center',
      width : 25,
      height: 25,
    },
    MenuIcon :{
      // borderColor :'red', borderWidth: 1,
      width : 45,
      height: 45,
      position: "absolute",
      top:15,
      right: 15,
      justifyContent: 'center'
    },
  TopBarContainer:
  {
      backgroundColor: '#F4F4F4',
      flexDirection:'row',
      height:60,
      justifyContent:"space-between",
  },
  ContainerItem:{
      flex : 1,
      alignContent: 'center',
      justifyContent: 'center'
  },
  ContainerTitle:{
      flex : 5,
      alignContent: 'center',
      justifyContent: 'center'
  },
  ContainerIcon:{
      borderRadius:50 ,
      width:50, 
      height:50, 
      justifyContent:"center",
      alignSelf : 'center' ,
     
  },
  ImageBackIcon:{
      width:35, height:35,alignSelf:'center', justifyContent:'center'
  },
  
  Title:{
      fontSize: 20, 
      color:'#002C6C',
      alignSelf: 'center',
      justifyContent: 'center',
  },
  WebViewContainer:{flex:8, paddingBottom: 60}
  })

export default GlobalStyle;