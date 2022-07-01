const axios = require('axios');
export const baseUrl = 'http://localhost:4002';

export const authApi = async(method,url,data)=>{
    let response = await axios({
        method:"post",
        url: baseUrl+url,
        data
    });
    return response.data;
}