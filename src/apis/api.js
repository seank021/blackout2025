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
    }
}

// get my store
export const getMyStore = async () => {
    const accessToken = localStorage.getItem("access_token");
    try {
        const response = await axios.get(`${API_URL}/stores/me/`, {
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        });
        return response;
    } catch (error) {
        console.error(error);
    }
}

