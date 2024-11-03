import React, { useState } from 'react';
import { View, Text, TextInput, Alert, Image, TouchableOpacity } from 'react-native';
import { styles } from '../Styles/ProfileEditStyles';
import { updateUserProfile } from './api/user';

function ProfileEdit() {
    const [formData, setFormData] = useState({
        password: '',
        nickname: '',
        name: '',
        phone: '',
        address: '',
        birth: '',
        gender: '',
        profileimg: ''
    });

    const handleChange = (name, value) => {
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async () => {
        try {
            const result = await updateUserProfile(formData);
            Alert.alert('성공', '회원 정보가 성공적으로 수정되었습니다.');
        } catch (error) {
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
                        placeholder="미션"
                        onChangeText={(value) => handleChange('nickname', value)}
                        style={styles.input}
                    />
                </View>
                <View style={styles.formRow}>
                    <Text style={styles.label}>휴대폰</Text>
                    <TextInput
                        placeholder="010-1234-5678"
                        onChangeText={(value) => handleChange('phone', value)}
                        style={styles.input}
                    />
                </View>
                <View style={styles.formRow}>
                    <Text style={styles.label}>이메일</Text>
                    <TextInput
                        placeholder="missionkinggu@gmail.com"
                        placeholderTextColor="#000000"
                        onChangeText={(value) => handleChange('email', value)}
                        style={styles.input}
                        editable={false} // 수정 불가능하게 설정
                    />
                </View>
                <View style={styles.formRow}>
                    <Text style={styles.label}>비밀번호</Text>
                    <TextInput
                        onChangeText={(value) => handleChange('password', value)}
                        style={styles.input}
                        secureTextEntry 
                    />
                </View>
                <View style={styles.formRow}>
                    <Text style={styles.label}>생일</Text>
                    <TextInput
                        placeholder="2002/02/01"
                        onChangeText={(value) => handleChange('birth', value)}
                        style={styles.input}
                    />
                </View>
                <View style={styles.formRow}>
                    <Text style={styles.label}>주소</Text>
                    <TextInput
                        placeholder="대한민국, 수원시"
                        onChangeText={(value) => handleChange('address', value)}
                        style={styles.input}
                    />
                </View>
                <View style={styles.formRow}>
                    <Text style={styles.label}>성별</Text>
                    <TextInput
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
}

export default ProfileEdit;