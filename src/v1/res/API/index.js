

const Domain = 'This is String Domain for Endpoint';


const webViewProductString = Domain +"/xxxx"
const webViewFAQString = Domain +"/xxxx"
const webViewArticleDetailString = Domain +"/xxxxx"
const webViewAboutUsString = Domain +"/xxxxx"
const webViewContactString = Domain +"/xxxxxx"
const API = {
    Domain : Domain,
    UrlImage :Domain + 'upload/image/article/',
    Article : {
        
        List : Domain + '/xxxxx',
  
        Detail : webViewArticleDetailString,
        ListLimit : Domain + "/xxxxxx"  
    },
    Product:{
        List : Domain +'/xxxxxx',
        Pagination : Domain +'/xxxxxx',
        // Detail : Domain +'module=product-detail&id=',
        webviewDetail: webViewProductString+'?id=',
        Search : Domain +'/xxxxxx',
        Barcode : Domain +'/xxxxxxx',
        PageEmpty : Domain + '/xxxxxxx'
    },
    FAQ : webViewFAQString,
    Contact :webViewContactString,
    AboutUs : webViewAboutUsString,
    AppsVersion : '1.1.7'
}

export default API;