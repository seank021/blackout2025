import { API_URL } from "../constants/path"
import axios from "axios";

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
}

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
}

// get store
export const getStore = async ({ title }) => {
    const accessToken = localStorage.getItem("accessToken");
    console.log(accessToken);

    try {
        const response = await axios.get(`${API_URL}/stores/${title}/`, {
            headers: {
                Authorization: `Token ${accessToken}`,
            },
        });
        console.log(response);
        return response;
    } catch (error) {
        console.error(error);
        return error.response;
    }
}
