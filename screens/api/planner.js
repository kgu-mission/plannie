// api/api.js
import axios from 'axios';
import { API_URL } from '@env';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const fetchMonthlySchedules = async (year, month) => {
    try {
        const token = await AsyncStorage.getItem('userToken');
        if (!token) throw new Error('Token is missing');

        const response = await axios.get(`${API_URL}/planner/${year}/${month}`, {
            headers: { Authorization: `Bearer ${token}` },
        });

        return response.data.schedules;
    } catch (error) {
        console.error("Error fetching schedules:", error);
        throw error;
    }
};
