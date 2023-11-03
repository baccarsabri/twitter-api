import axios from 'axios';

// Define the base URL of your server
const baseURL = 'http://fd04-197-27-121-221.ngrok.io';

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
