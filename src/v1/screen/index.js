import HomeScreen from "./HomeScreen";
import SplashScreen from "./SplashScreen";
import BottomBarScreen from "./Layout/BottomBar";

import ArticleListScreen from "./ArticleListScreen";
import ScanScreen from "./ScanScreen";
import ProductDetailScreen from "./ProductDetailScreen";
import ProductListScreen from "./ProductListScreen";

import FAQScreen from "./FAQScreen";
import AboutUsScreen from "./AboutUsScreen";
import ContactUsScreen from "./ContactScreen";
import ArticleDetailScreen from './ArticleDetailScreen'
const Screen = {
     Splash : SplashScreen,
     Home : HomeScreen,
     ScanScreen : ScanScreen,
     //TopBar: TopBarScreen,
     BottomBar : BottomBarScreen, 
     ArticleList : ArticleListScreen,
     ProductDetail: ProductDetailScreen,
     ProductList:ProductListScreen,
     //SideBar : SideBarScreen,
     FAQ : FAQScreen,
     ContactUs : ContactUsScreen,
     AboutUs : AboutUsScreen,
     ArticleDetail : ArticleDetailScreen
     
}
export default Screen; 