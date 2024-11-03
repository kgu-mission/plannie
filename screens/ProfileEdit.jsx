import { View, Text, TextInput, Alert, Image, TouchableOpacity } from 'react-native';
import React, { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import {styles} from '../Styles/ProfileEditStyles';
import {useNavigation} from "@react-navigation/native";

const ProfileEdit = () => {
    const navigation = useNavigation(); // useNavigation 훅 사용

    const [formData, setFormData] = useState({
        password: '',
        nickname: '',
        name: '',
        phone: '',
        address: '',
        birth: '',
        gender: '',
        profileimg: '',
    });

    // Load initial user data from server
    useEffect(() => {
        const fetchUserProfile = async () => {
            try {
                const token = await AsyncStorage.getItem('userToken');
                if (!token) {
                    Alert.alert("로그인 정보가 없습니다.", "다시 로그인 해주세요.");
                    return;
                }

                const response = await axios.get('http://localhost:3000/user/profile', {
                    headers: { Authorization: `Bearer ${token}` },
                });

                // 서버에서 받은 사용자 정보를 그대로 formData에 설정
                setFormData(response.data);
            } catch (error) {
                console.error("Error fetching user profile:", error);
                Alert.alert("오류", "사용자 정보를 가져오는 데 실패했습니다.");
            }
        };

        fetchUserProfile();
    }, []);

    // Handle form data changes
    const handleChange = (name, value) => {
        setFormData({ ...formData, [name]: value });
    };

    // Handle profile update submission
    const handleSubmit = async () => {
        try {
            const token = await AsyncStorage.getItem('userToken');
            await axios.put(
                'http://localhost:3000/user/update',
                formData,
                { headers: { Authorization: `Bearer ${token}` } }
            );
            Alert.alert('성공', '회원 정보가 성공적으로 수정되었습니다.');

            // 정보 수정 후 MyPageMain으로 이동
            navigation.navigate('MyPageMain');

        } catch (error) {
            console.error("Error updating profile:", error);
            Alert.alert('오류', '회원 정보 수정에 실패했습니다.');
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>회원정보 수정</Text>
            </View>
            <TouchableOpacity style={styles.profileImageContainer}>
                <Image
                    source={{ uri: formData.profileimg || 'https://via.placeholder.com/100' }}
                    style={styles.profileImage}
                />
            </TouchableOpacity>
            <View style={styles.formContainer}>
                <View style={styles.formRow}>
                    <Text style={styles.label}>이름</Text>
                    <TextInput
                        value={formData.name}
                        placeholder="문박박장"
                        placeholderTextColor="#000000"
                        onChangeText={(value) => handleChange('name', value)}
                        style={styles.input}
                        editable={false} // 수정 불가능하게 설정
                    />
                </View>
                <View style={styles.formRow}>
                    <Text style={styles.label}>닉네임</Text>
                    <TextInput
                        value={formData.nickname}

                        onChangeText={(value) => handleChange('nickname', value)}
                        style={styles.input}
                    />
                </View>
                <View style={styles.formRow}>
                    <Text style={styles.label}>휴대폰</Text>
                    <TextInput
                        value={formData.phone}
                        onChangeText={(value) => handleChange('phone', value)}
                        style={styles.input}
                    />
                </View>
                <View style={styles.formRow}>
                    <Text style={styles.label}>이메일</Text>
                    <TextInput
                        value={formData.email}

                        placeholderTextColor="#000000"
                        onChangeText={(value) => handleChange('email', value)}
                        style={styles.input}
                        editable={false} // 수정 불가능하게 설정
                    />
                </View>
                <View style={styles.formRow}>
                    <Text style={styles.label}>비밀번호</Text>
                    <TextInput
                        value={formData.password}
                        onChangeText={(value) => handleChange('password', value)}
                        style={styles.input}
                        secureTextEntry
                    />
                </View>
                <View style={styles.formRow}>
                    <Text style={styles.label}>생일</Text>
                    <TextInput
                        value={formData.birth}
                        placeholder="2002/02/01"
                        onChangeText={(value) => handleChange('birth', value)}
                        style={styles.input}
                    />
                </View>
                <View style={styles.formRow}>
                    <Text style={styles.label}>주소</Text>
                    <TextInput
                        value={formData.address}
                        placeholder="대한민국, 수원시"
                        onChangeText={(value) => handleChange('address', value)}
                        style={styles.input}
                    />
                </View>
                <View style={styles.formRow}>
                    <Text style={styles.label}>성별</Text>
                    <TextInput
                        value={formData.gender}
                        placeholder="미입력"
                        onChangeText={(value) => handleChange('gender', value)}
                        style={styles.input}
                    />
                </View>
            </View>
            <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
                <Text style={styles.submitButtonText}>정보 수정</Text>
            </TouchableOpacity>
        </View>
    );
};

export default ProfileEdit;
