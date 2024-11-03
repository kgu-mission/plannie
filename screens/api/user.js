import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

// 로그인 API
export const login = async (email, password) => {
    try {
        const response = await axios.post('http://localhost:5000/auth/login', { email, password });
        
        // 로그인 성공 시 토큰을 AsyncStorage에 저장
        await AsyncStorage.setItem('token', response.data.token);
        
        return response.data;
    } catch (error) {
        console.error('로그인 오류:', error.message);
        throw error;
    }
};

// 회원 정보 수정 API
export const updateUserProfile = async (userData) => {
    try {
        // 토큰을 AsyncStorage에서 가져오기
        const token = await AsyncStorage.getItem('token');
        
        if (!token) {
            throw new Error('로그인이 필요합니다.');
        }

        // 토큰을 Authorization 헤더에 포함하여 요청 전송
        const response = await axios.put('http://localhost:5000/user/update', userData, {
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            }
        });
        return response.data;
    } catch (error) {
        console.error('회원 정보 수정 오류:', error.message);
        throw error;
    }
};


// 회원 탈퇴 API
export const deleteUser = async () => {
    try {
        const token = await AsyncStorage.getItem('token');
        
        if (!token) throw new Error('토큰이 없습니다. 로그인 해주세요.');

        const response = await axios.delete('http://localhost:5000/user/delete', {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
        return response.data;
    } catch (error) {
        console.error('회원 탈퇴 오류:', error.message);
        throw error;
    }
};
