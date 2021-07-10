import React,{useState, useEffect, } from 'react';
import { 
    TouchableOpacity,
    TextInput, 
    Button, 
    Image, 
    View, 
    Text,
    Dimensions,
    FlatList, 
    BackHandler ,
    KeyboardAvoidingView, 
    StatusBar, 
    ScrollView, 
    Alert,
    Platform,
    SafeAreaView,
    PixelRatio
  } from 'react-native';
import ThisStyle from './style';
import Resource from  '../../res/index'
import BottomBar from '../Layout/BottomBar';
import {Article} from  '../../res/API_CALL'
import changeNavigationBarColor from 'react-native-navigation-bar-color';
import { useIsFocused ,useFocusEffect} from '@react-navigation/native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
let showStatusBar
const HomeScreen = ({navigation}) => {
 
  const isFocused = useIsFocused();
  [SearchKeyword, setKeyword] = useState('');
  [articleListHome, setArticleListHome] = useState();
  
  const process = async () => {
      let ArticleListTemp = await Article.getArticleList();
      setArticleListHome([ArticleListTemp[0],ArticleListTemp[1]])
  }


  const backAction = async () => {
    
      Alert.alert("", "Exit From GSOne Application?", [
        {
          text: "Cancel",
          onPress: () => null,
          style: "cancel"
        },
        { text: "Exit", onPress: () => BackHandler.exitApp() }
      ]);
      return true;
    };

  useEffect(() => {
    
     process()
     if(Platform.OS == 'android'){
       if(Platform.Version >= 26){
       
        changeNavigationBarColor('black', false);
       }
     }
     else{
      
      changeNavigationBarColor('black', false);
     }
          //BackHandler.addEventListener("hardwareBackPress", backAction);
   
     return () => {
      //BackHandler.addEventListener("hardwareBackPress", backAction);
    }
  }, [navigation])

  const searchProduct = () => {
      navigation.navigate('ProductList',{Keyword : SearchKeyword})
  }

  if(Platform.OS =='android'){
    if(Platform.Version >= 26 )
    {
      showStatusBar = <StatusBar barStyle = "dark-content" hidden = {false} backgroundColor ="transparent" translucent={true}/>
    }
  }
  else
  {
      showStatusBar = <StatusBar barStyle = "dark-content" hidden = {false} backgroundColor ="white" translucent={false}/>
  }
  console.log("Pixel Ratio : " +PixelRatio.get()); 
    return (
      <SafeAreaView style={Platform.OS == 'android' ? {flex:1,backgroundColor:'#f4f4f4'} : {flex:1, backgroundColor:'white'}}>
                    <View style={
                      Platform.OS =='android' ?  
                        Platform.Version < 26  ? 
                          {} : 
                          { backgroundColor : 'white', height: 25}
                        :
                        {flex: 1}
                    }/>
          <View style={{flex:1}}> 
                <View style={{flex: 1, marginBottom:60}}> 
                    <View style={{backgroundColor : 'white'}}>
                    {showStatusBar}
                    <View style={PixelRatio.get() <=3  ? ThisStyle.TopBar_sm : ThisStyle.TopBar} >
                            <Image source={Resource.Images.Logo.Logo_Transparent_White} style={PixelRatio.get() <=3  ? ThisStyle.LogoImage_sm: ThisStyle.LogoImage}/>
                            <TouchableOpacity style={PixelRatio.get() <= 3  ? ThisStyle.MenuIcon_sm : ThisStyle.MenuIcon} onPress={() => {navigation.openDrawer()}}>
                              <Image source={Resource.Images.Icon.OpenMenu} style={PixelRatio.get() <=3  ? ThisStyle.ImageMenuIcon_sm: ThisStyle.ImageMenuIcon}/>
                            </TouchableOpacity>
                        </View>
                        <View style={PixelRatio.get() <=3  ? ThisStyle.SearchContainer_sm: ThisStyle.SearchContainer}>
                            <Text style={PixelRatio.get() <=3  ? ThisStyle.SearchLabel_sm:  ThisStyle.SearchLabel}>SEARCH</Text>
                            <TextInput style={PixelRatio.get() <=3  ? ThisStyle.SearchInput_sm :ThisStyle.SearchInput} placeholder ="GTIN/Company/Product Name" placeholderTextColor= 'grey' onChangeText={text => setKeyword(text)}/>
                            <TouchableOpacity style={PixelRatio.get() <=3  ? ThisStyle.SearchBtn_sm : ThisStyle.SearchBtn} onPress={() =>searchProduct()}>
                              <Image source={Resource.Images.Icon.SearchMenu} style={PixelRatio.get() <=3  ? ThisStyle.SearchBtnImage_sm : ThisStyle.SearchBtnImage}/>  
                            </TouchableOpacity>
                      </View>
                        <Image source={Resource.Images.Background.Home} style={PixelRatio.get() <=3  ? ThisStyle.HeaderImage_sm : ThisStyle.HeaderImage}/>
                        <View style={{flexDirection:'row'}}>
                            <View style={{backgroundColor:"#F187A9", flex:1, height:3 }}/>
                            <View style={{backgroundColor:"#FBB033", flex:1, height:3 }}/>
                            <View style={{backgroundColor:"#7AC043", flex:1, height:3 }}/>
                            <View style={{backgroundColor:"#BF83B9", flex:1, height:3 }}/>
                            <View style={{backgroundColor:"#F16333", flex:1, height:3 }}/>
                            <View style={{backgroundColor:"#00B6DE", flex:1, height:3 }}/>
                        </View> 
                   
                    </View>
                    <View style={PixelRatio.get() <=3  ?  ThisStyle.Content_sm: ThisStyle.Content}>
                    <View style={PixelRatio.get() <=3  ? ThisStyle.SubHeader_sm : ThisStyle.SubHeader}>
                        <Text style={PixelRatio.get() <=3  ? ThisStyle.LabelLatestNews_sm : ThisStyle.LabelLatestNews}>LATEST NEWS</Text>
                    </View>
                    <View style={ThisStyle.ContainerCard}>

                  <View style={{justifyContent : 'space-around', width: '100%'}}>
                    <FlatList 
                      numColumns={2}
                      data={articleListHome}
                      style={{alignSelf: 'center'}}
                      renderItem={({item})=>
                     
                      <View >
                          <TouchableOpacity style={PixelRatio.get() <=3  ? ThisStyle.Card_sm : ThisStyle.Card} onPress={()=>navigation.navigate('ArticleDetailScreen', { ArticleId:item.com_article_management_id })}>
                            <View style={ThisStyle.CardImageContainer}>
                              <Image defaultSource={Resource.Images.Background.dummyImage} source={item.path_upload != ''?{uri : item.path_upload} : Resource.Images.Background.dummyImage} style={[ThisStyle.CardImage]}/>
                            </View>
                              <Text style={ThisStyle.CardText}>{item.article_title}</Text>
                          </TouchableOpacity>
                      </View>
                    }
                    keyExtractor={(item, index) => index.toString()}
                    >
                </FlatList>
                  </View>

               
                
                </View>
                    <View style={PixelRatio.get() <=3  ? ThisStyle.Button_sm :ThisStyle.Button}>
                      <View style={PixelRatio.get() <=3  ? ThisStyle.ContainerButton_sm: ThisStyle.ContainerButton}>
                          <TouchableOpacity style={PixelRatio.get() <=3  ? [ThisStyle.SeparatorButton_sm, ThisStyle.ProductButton_sm] : [ThisStyle.SeparatorButton, ThisStyle.ProductButton]}  onPress={() => {navigation.navigate('ArticleList')}}>
                              <View style={PixelRatio.get() <=3  ? ThisStyle.ContainerIcon_sm : ThisStyle.ContainerIcon}>
                                  <Image source={Resource.Images.Icon.NewsMenu} style={ThisStyle.IconButton}/>
                                </View>
                              <Text style={PixelRatio.get() <=3  ? ThisStyle.LabelButton_sm :ThisStyle.LabelButton}>More News</Text>
                          </TouchableOpacity>
                          <TouchableOpacity style={PixelRatio.get() <=3  ? [ThisStyle.ProductButton_sm] : [ThisStyle.ProductButton]} onPress={() => {navigation.navigate('ContactUsScreen')}}>
                              <View style={PixelRatio.get() <=3  ? ThisStyle.ContainerIcon_sm : ThisStyle.ContainerIcon}>
                                  <Image source={Resource.Images.Icon.ContactMenu} style={ThisStyle.IconButton}/>
                                </View>
                              <Text style={PixelRatio.get() <=3  ? ThisStyle.LabelButton_sm :ThisStyle.LabelButton}>Contact Us</Text>
                          </TouchableOpacity>
                       
                      </View>
                    </View> 
                </View>
  
                </View>
               
                <BottomBar />

          </View>
          </SafeAreaView>
    );
  
 }



export default HomeScreen;
