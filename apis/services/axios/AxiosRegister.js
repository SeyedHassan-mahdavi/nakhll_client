import Axios from 'axios';
import { toastErrorMessage, toastSuccessMessage } from '../../../utils/toastMessage/toastMessage';

//=================================================================\\
export const instanceAxiosWithOutToken = Axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
    headers: {
        'Access-Control-Allow-Origin': 'http://localhost:3000',
        'Access-Control-Allow-Credentials': 'true',
        'Content-Type': ' application/json'
    },
    timeout: 18000,
});

// instanceAxiosWithOutToken.defaults.headers.post['Content-Type'] = 'application/json;charset=utf-8';
// instanceAxiosWithOutToken.defaults.headers.post['Access-Control-Allow-Origin'] = '*';

//=================================================================\\
export const instanceAxiosWithToken = Axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
    timeout: 18000,
    headers: {
        'Access-Control-Allow-Origin': '*',
        'Authorization': 'Bearer sdfasfd-asfd-12-23'
    },
});

//=================================================================\\
//=================instanceAxiosWithOutToken=======================\\
//=================================================================\\
instanceAxiosWithOutToken.interceptors.request.use(function (config) {
    return config;
}, function (error) {
    return Promise.reject(error);
});

instanceAxiosWithOutToken.interceptors.response.use(function (response) {

    if (response.status === 200) {
        toastSuccessMessage('success');
        return response.data;
    } else {
        toastErrorMessage('not success');
    }

}, function (error) {
    toastErrorMessage('not success');
    // return Promise.reject(error);
});


//=================================================================\\
//=================instanceAxiosWithToken==========================\\
//=================================================================\\
instanceAxiosWithToken.interceptors.request.use(function (config) {

    return config;
}, function (error) {
    return Promise.reject(error);
});

instanceAxiosWithToken.interceptors.response.use(function (response) {
    if (response.status === 200) {
        return response.data;
    } else {
        toastErrorMessage('not success');
    }
}, function (error) {
    return Promise.reject(error);
});