import axios from "axios"
import API from "../API/index"
const { Product } = API


const getProductDetail = async (id) => {
    let result = await axios.get(Product.Detail + id);
    return result.data;
}

const getProductList = async (page) => {
    
    let result = await axios.get(Product.Pagination + page);
    return result.data.data;
}

const searchProduct = async (search, page) => {
    let result = await axios.get(Product.Search + search + '&page=' + page);
    return result.data;
}

const BarcodeProduct = async (gtin) => {
    let result = await axios.get(Product.Barcode + gtin);
    console.log('\n\nLink Barcode API:' +  Product.Barcode + gtin)
    return result.data;
}
export { getProductDetail, searchProduct, getProductList, BarcodeProduct}