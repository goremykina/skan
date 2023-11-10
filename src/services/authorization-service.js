import api from './api.js';
import { Cookies } from "react-cookie";

const cookies = new Cookies();

export const authorize = async (login, password) => {
    const { accessToken, expire } = await getAccessToken(login, password);
    cookies.set('accessToken', accessToken, {
        path: '/',
        expires: new Date(expire)
    });
}

export const getAccessToken = async (login, password) => {
    const response = await api.post('/account/login', {
        login,
        password
    });

    return response.data;
}

