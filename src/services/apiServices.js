import { authApi } from "./apiHelper";
import { apiUrls } from "./apiUrls";

export const registerApiService = async (data) => {
  let response = await authApi(
    apiUrls.auth.register.method,
    apiUrls.auth.register.url,
    data
  );
  return response;
};
export const loginApiService = async (data) => {
  let response = await authApi(
    apiUrls.auth.login.method,
    apiUrls.auth.login.url,
    data
  );
  return response;
};

export const handleForgetApi = async (data) => {
  let response = await authApi(
    apiUrls.auth.forgetPass.method,
    apiUrls.auth.forgetPass.url,
    data
  );
  return response;
};
