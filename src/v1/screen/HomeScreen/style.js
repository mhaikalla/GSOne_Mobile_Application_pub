// import ScreenV1 from "@ScreenV1";
// import ResV1 from "@ResV1";
// import images from './images';
import {  StyleSheet, Dimensions } from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const ThisStyle = StyleSheet.create({
   
    background:{
        backgroundColor:"#ff4b4b",
    },
    text:{
        color:"#fff",
      
    },
    textInput:{
        borderColor:"#fff",
        backgroundColor: 'rgba(255, 255, 255, 1)',
    },
    button:{
      color:"#fff",
      backgroundColor:"#dc3545"
    },
    buttonText:{
      color:"#fff",
     
    },
    TopBar:{
      backgroundColor : "white",
      height : 80,
      paddingVertical : 10,
      position: "relative",
      zIndex:2,
    
  },
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
   
  LogoImage :{
      flex:1,
      marginLeft:30,
      resizeMode : "contain",
      alignSelf : "center",
      justifyContent : "center",

  },
  Header :{
      backgroundColor : "white",
      flex : 1,
      paddingTop : 20,
      justifyContent : 'flex-end',
      position: "relative",
      zIndex : 2
  },
  HeaderImage :{
      resizeMode : "contain",
      width : 600,
      height : 100,
      alignSelf : "center",
      position:"relative"
   },
   
  SearchContainer :{
      height : 60,
      width: '65%',
      paddingTop : 7 ,
      alignSelf :"center",
      backgroundColor : 'white'
  },
  SearchInput :{
      height : 45,
      width: '100%',
      borderColor :"#2c3e50",
      borderRadius : 50,
      borderWidth : 1,
      textAlign:"left",
      paddingLeft : 20,
      paddingRight : 45,
      fontSize : 12
  },
  SearchLabel :{
     backgroundColor : "white",
     position: 'absolute',
     fontSize : 10,
     top : 0,
     left: 18,
     paddingHorizontal:4,
     zIndex: 2
  },
  SearchBtn :{
   // borderWidth: 1 , borderColor : 'red', 
    borderRadius: 50,
    position: 'absolute',
    top:8,
    right :0,
    width: 43,
    height:43,
    justifyContent : 'center'
  },
  SearchBtnImage:{ 
        resizeMode : "center",
        alignSelf : 'center',
        width : 30,
        height: 30,
  },
  Card :{
     width: 170,
      height : 200,
      marginHorizontal : 15,
      borderRadius : 25,
      paddingHorizontal : 10,
      paddingTop : 10,
  },
  CardImage :{
      backgroundColor :"#f4f4f4",
      width : '100%',
      height : '100%',
      borderRadius : 25
  },
  CardImageContainer: {
    width : '100%',
    height : '80%',
    borderRadius : 25,
    elevation:10,
  },
  CardText:{
      color: "#2980b9",
      alignSelf:"center",
      fontSize : 15,
      textAlign: "center",
      marginTop: 10,
      
      
  },
  ContainerCard:{
      flexDirection :'row', 
      marginBottom:15,
  },
  Content:{
      paddingTop : 30,
      paddingHorizontal: 15,
     
      width:"100%",
      height:'100%',
      alignSelf:'center',
      backgroundColor:'#f4f4f4'
      
  },
  Button:{
      flexDirection :'row', justifyContent:"space-between", marginBottom:15
  },
  ContainerButton:{
      borderRadius : 20, backgroundColor:'white',alignContent:'center', width: '100%', height:78, flexDirection :'row'
  },
  ProductButton:{
      paddingHorizontal:11, paddingVertical: 15, flexDirection : 'row', width:'50%'
  },
  SeparatorButton:{
      borderRightColor:'grey', borderRightWidth:0.5
  },
  ContainerIcon:{
      borderRadius:50 ,width:50, height:50, marginRight:15, backgroundColor:'#F0F0F0', justifyContent:"center" 
  },
  IconButton:{
      width:40, height:40,alignSelf:'center'
  },
  LabelButton:
  {
      alignContent:'center', justifyContent:'center', alignSelf:'center', color:'#585858'
  },
  LabelLatestNews : {
    fontWeight:"bold", color: "#555555",fontSize:15, marginLeft:12
  },
 SubHeader : {flexDirection :'row', justifyContent:"space-between", marginBottom:15},


//===============================================================================================================
MenuIcon_sm :{
    // borderColor :'red', borderWidth: 1,
    width : 45,
    height: 45,
    position: "absolute",
    top:7,
    right:7,
    justifyContent: 'center'
},
TopBar_sm:{
    backgroundColor : "white",
    height : 60,
    position: "relative",
    zIndex:2,
    marginBottom:5
},
ImageMenuIcon_sm : {
    resizeMode : "center",
    alignSelf : 'center',
    width : 20,
    height: 20,
},
LogoImage_sm :{
    flex:1,
    marginLeft:30,
    resizeMode :"contain",
    width: 95,
    alignSelf : "center",
    justifyContent : "center",

},
SearchContainer_sm:{
        height : 47,
        width: '65%',
        paddingTop : 7,
        alignSelf :"center",
        backgroundColor : 'white'
    },
    SearchInput_sm:{
        height : 40,
        width: '100%',
        borderColor :"#2c3e50",
        borderRadius : 50,
        borderWidth : 1,
        textAlign:"left",
        paddingLeft : 20,
        paddingRight : 45,
        fontSize : 10
    },
    SearchLabel_sm:{
        backgroundColor : "white",
        position: 'absolute',
        fontSize : 10,
        top : 0,
        left: 18,
        paddingHorizontal:4,
        zIndex: 2
    },
    SearchBtn_sm:{
        // borderWidth: 1 , borderColor : 'red', 
        borderRadius: 50,
        position: 'absolute',
        top:5,
        right :0,
        width: 43,
        height:43,
        justifyContent : 'center'
    },

    SearchBtnImage_sm:{ 
        resizeMode : "center",
        alignSelf : 'center',
        width : 30,
        height: 30,
    },


    Card_sm :{
        width: 140,
        height : 160,
        marginHorizontal : 13,
        borderRadius : 25,
        paddingHorizontal : 10,
        paddingTop : 10,
    },

    Content_sm:{
        paddingTop : 20,
        paddingHorizontal: 15,
    
        width:"100%",
        height:'100%',
        alignSelf:'center',
        backgroundColor:'#f4f4f4'
        
    },

 SubHeader_sm : {flexDirection :'row', justifyContent:"space-between", marginBottom:5},

  LabelLatestNews_sm : {
    fontWeight:"bold", color: "#555555",fontSize:13 , marginLeft: '7%'
  },
  HeaderImage_sm :{
      resizeMode : "contain",
      width : 700,
      height : 75,
      alignSelf : "center",
      position:"relative"
    },
    Button_sm:{
        flexDirection :'row', justifyContent:"center", marginBottom:15
    },
    ContainerButton_sm:{
        borderRadius : 20, backgroundColor:'white',alignContent:'center', width: '90%', height:65, flexDirection :'row'
    },
    ProductButton_sm:{
        paddingHorizontal:11, paddingVertical: 15, flexDirection : 'row', width:'50%'
    },
    SeparatorButton_sm:{
        borderRightColor:'grey', borderRightWidth:0.5
    },
    ContainerIcon_sm:{
        borderRadius:50 ,width:35, height:35, marginRight:15, backgroundColor:'#F0F0F0', justifyContent:"center" 
    },
    IconButton_sm:{
        width:37, height:37,alignSelf:'center'
    },
    LabelButton_sm:
    {
        alignContent:'center', fontSize:12, justifyContent:'center', alignSelf:'center', color:'#585858'
    },
});
export default ThisStyle;