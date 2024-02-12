import axios from "axios";
import { Cookies } from "react-cookie";
const cookies = new Cookies();


const api = axios.create({
    baseURL: 'https://gateway.scan-interfax.ru/api/v1',
});

api.interceptors.request.use(async (config) => {
    // todo: check cookies and set header if exists
    const accessTokenCookie = cookies.get('accessToken');
    if (accessTokenCookie) {
        config.headers.Authorization = `Bearer ${accessTokenCookie}`;
    }
    //console.log(config, accessTokenCookie)
    return config;
});

export default api;