import { StyleSheet, Dimensions} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Styles = StyleSheet.create({
    BottomBarContainer:
    {
        flexDirection:'row',
        height:60,
        justifyContent:'space-around',
        backgroundColor : 'white', 
        position: 'absolute',
        bottom: 0,
        width: '100%',
        elevation: 50,

    },
    ContainerForIOS:{
        flexDirection:'row',
        height:60,
        justifyContent:'space-around',
        backgroundColor : 'white', 
        position: 'absolute',
        bottom: 0,
        width: '100%',
        elevation: 50,
    },
    ContainerIcon:{
        borderRadius:50 ,
        width:50, 
        height:50, 
        marginRight:15, 
        backgroundColor:'#F0F0F0', 
        justifyContent:"center",
        alignSelf : 'center' ,
        marginLeft:15
    },
    Icon:{
        width:50, height:50,alignSelf:'center', justifyContent:'center'
    },
    ContainerButton:{
        // borderColor: '#002C6B',
        // borderWidth: 1,
        flex : 1,
        alignContent: 'center',
        justifyContent: 'center'
    },
    
    TextButton:{
        color:'white',
        alignSelf : 'center',
        bottom : 20,
        position: 'relative'
    },
    
    ScanIcon:{
        width:90, 
        height:75,
        alignSelf:'center',
      
    },
    ButtonScan:{
        // borderColor: '#002C6B',
        // borderWidth: 1,
        alignSelf: 'center',
        justifyContent:'center',
        width: 90,
        height: 100,
        position : 'absolute',
        bottom: -23
    }
})

export default Styles;