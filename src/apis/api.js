import { API_URL } from '../constants/path';
import axios from 'axios';

// sign up
export const signUp = async ({ username, password }) => {
    try {
        const response = await axios.post(`${API_URL}/users/signup/`, {
            username,
            password,
        });
        return response;
    } catch (error) {
        console.error(error);
        return error.response;
    }
};

// log in
export const logIn = async ({ username, password }) => {
    try {
        const response = await axios.post(`${API_URL}/users/signin/`, {
            username,
            password,
        });
        return response;
    } catch (error) {
        console.error(error);
        return error.response;
    }
};

// get store
export const getStore = async ({ title }) => {
    const accessToken = localStorage.getItem('accessToken');

    try {
        const response = await axios.get(`${API_URL}/stores/${title}/`, {
            headers: {
                Authorization: `Token ${accessToken}`,
            },
        });

        return response;
    } catch (error) {
        console.error(error);
        return error.response;
    }
};

// check password
export const checkPassword = async ({ id, password }) => {
    const accessToken = localStorage.getItem('accessToken');

    try {
        const response = await axios.post(
            `${API_URL}/stores/prepay/is_valid/`,
            {
                prepay_id: id,
                code: password,
            },
            {
                headers: {
                    Authorization: `Token ${accessToken}`,
                },
            }
        );

        return response;
    } catch (error) {
        console.error(error);
        return error.response;
    }
};
