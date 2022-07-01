import { authApi } from "./apiHelper";
import { apiUrls } from "./apiUrls";

export const registerApiService = async (data) => {
    let response = await authApi(apiUrls.auth.register.method, apiUrls.auth.register.url, data);
    return response;
    }
    export const loginApiService = async (data) => {
        let response = await authApi(apiUrls.auth.login.method, apiUrls.auth.login.url, data);
        return response;
        }