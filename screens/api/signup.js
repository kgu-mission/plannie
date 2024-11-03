// api/userApi.js
import axios from 'axios';
import { API_URL } from '@env';

export const checkEmailAvailability = async (email) => {
    try {
        const response = await axios.get(`${API_URL}/users/check/${email.toLowerCase()}`);
        return response;
    } catch (error) {
        throw error;
    }
};
export const signUp = async (userData) => {
    try {
        const response = await axios.post(`${API_URL}/signup`, userData, {
            headers: { 'Content-Type': 'application/json' },
        });
        return response;
    } catch (error) {
        throw error;
    }
};
