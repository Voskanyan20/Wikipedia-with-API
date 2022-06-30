import axios from "axios";

export default class Api {
    static wikiSearch = async(text) => {
        return axios.get("https://en.wikipedia.org/w/api.php",{
            params:{
                origin:'*',
                action: "query",
                list: "search",
                srsearch: text,
                format: "json"
            }
        })
    }
}