import Axios from 'axios';
import { toastErrorMessage, toastSuccessMessage } from '../../../utils/toastMessage/toastMessage';

//=================================================================\\
export const instanceAxiosWithOutToken = Axios.create({

    withCredentials: true,

    baseURL: "http://localhost:8000",
    headers: {
        'Content-Type': ' application/json',
        Cookie: `sessionid=7hq2lfr3rv036qcdn4b18kbn89129x95;path=/`
    },
    timeout: 18000,

});


// instanceAxiosWithOutToken.defaults.headers.post['Content-Type'] = 'application/json;charset=utf-8';
// instanceAxiosWithOutToken.defaults.headers.post['Access-Control-Allow-Origin'] = '*';

//=================================================================\\
export const instanceAxiosWithToken = Axios.create({
    baseURL: "http://localhost:8000",
    timeout: 18000,
    headers: {
        'Content-Type': ' application/json',
        Cookie: `sessionid=7hq2lfr3rv036qcdn4b18kbn89129x95;path=/`
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