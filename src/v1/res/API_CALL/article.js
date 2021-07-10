import axios from "axios"
import API from "../API/index"

const { Article } = API


const getArticleDetail = async (id) => {
    let result = await axios.get(Article.Detail + id);
    return result.data;
}

const getArticleList = async (page) => {
    //let request = { page }
    let result = await axios.get(Article.List + page);
    return result.data.data;
}

const getLatestArticle = async () => {
    //let request = { page }
    let result = await axios.get(Article.ListLimit);
    return result.data.data;
}
export { getArticleDetail, getArticleList,getLatestArticle }