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


