import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import LocalStorageKey from '../constants/LocalStorageKey';

// Define the base URL of your server
const baseURL = 'http://bb12-197-27-18-180.ngrok.io';

const axiosInstance = axios.create({
    baseURL,
    timeout: 120000,
});

// Function to call the authentication endpoint
export const getAuth = async () => {
    try {
        const response = await axiosInstance.get('/sessions/connect');


        return response.data;
    } catch (error) {
        console.log(error);
        throw error;
    }
};
export const TwitterCallBack = async (oauth_token, oauth_verifier) => {
    try {
        const headers = {

            'oauth_token': oauth_token,
            'oauth_verifier': oauth_verifier

        };
        const response = await axiosInstance.get(`/sessions/saveAccessTokens`, {
            headers: headers
        });


        return response.data;
    } catch (error) {
        console.log(error);
        throw error;
    }


};

export const add = async () => {
    try {
        const token = await AsyncStorage.getItem(LocalStorageKey.token);
        console.log('token::', token)
        const headers = {

            'token': token,

        };
        const response = await axiosInstance.post(`/sessions/add`, {}, {
            headers: headers,
        });


        return response.data;
    } catch (error) {
        console.log(error);
        throw error;
    }
};
