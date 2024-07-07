
import axios from "axios";

export default  axios.create({
    baseURL:'https://api.rawg.io/api',
    params: {
        key:'6e9e1dcad000475490d088908fb322b1',
    }
})  

