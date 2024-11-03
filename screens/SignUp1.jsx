import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import axios from 'axios';

const SignUp1 = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleNext = async () => {
        if (password !== confirmPassword) {
            Alert.alert('오류', '비밀번호가 일치하지 않습니다.');
            return;
        }

        try {
            // 이메일을 소문자로 변환하여 서버로 전송
            const response = await axios.get(`http://172.30.1.92:3000/users/check/${email.toLowerCase()}`);

            // 이메일이 이미 존재하는 경우 (200 OK 응답 시)
            if (response.status === 200) {
                Alert.alert('오류', '이미 사용 중인 이메일입니다.');
                return;
            }
        } catch (error) {
            // 사용자가 존재하지 않는 경우 (404 오류 시) 다음 페이지로 이동
            if (error.response && error.response.status === 404) {
                navigation.navigate('SignUp2', {
                    email,
                    password
                });
            } else {
                // 다른 오류가 발생한 경우 에러 메시지 표시
                const errorMessage = error.response?.data?.message || '이메일 중복 확인 중 오류가 발생했습니다.';
                console.error('이메일 중복 확인 오류:', error);
                Alert.alert('오류', errorMessage);
            }
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Let’s join the Plannie</Text>
            <Text style={styles.requiredText}>* 필수입력항목</Text>

            <View style={styles.formContainer}>
                {/* Email Section */}
                <View style={styles.inputGroup}>
                    <Text style={styles.label}>이메일 *</Text>
                    <View style={styles.inputBox}>
                        <TextInput
                            style={styles.inputText}
                            placeholder="plannie@mission.com"
                            placeholderTextColor="#878787"
                            value={email}
                            onChangeText={setEmail}
                        />
                    </View>
                </View>

                {/* Password Section */}
                <View style={styles.inputGroup}>
                    <Text style={styles.label}>비밀번호 *</Text>
                    <View style={styles.inputBox}>
                        <TextInput
                            style={styles.inputText}
                            secureTextEntry
                            value={password}
                            onChangeText={setPassword}
                        />
                    </View>
                </View>

                {/* Confirm Password Section */}
                <View style={styles.inputGroup}>
                    <Text style={styles.label}>비밀번호 확인 *</Text>
                    <View style={styles.inputBox}>
                        <TextInput
                            style={styles.inputText}
                            secureTextEntry
                            value={confirmPassword}
                            onChangeText={setConfirmPassword}
                        />
                    </View>
                </View>

                {/* Password Requirements */}
                <Text style={styles.passwordRequirement}>* 8자 이상의 영문자, 숫자, 특수문자 포함</Text>

                {/* Next Button */}
                <TouchableOpacity
                    style={styles.nextButton}
                    onPress={handleNext}
                >
                    <Text style={styles.nextButtonText}>다음</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgba(228, 239, 255, 0.86)',
        alignItems: 'center',
        paddingTop: 60,
    },
    header: {
        fontSize: 28,
        fontWeight: '600',
        color: '#8FBEFF',
        marginTop: 30,
    },
    requiredText: {
        fontSize: 13,
        fontWeight: '600',
        color: '#4183F3',
        position: 'absolute',
        top: 160,
        right: 30,
    },
    formContainer: {
        backgroundColor: '#FFFFFF',
        borderRadius: 37,
        width: 340,
        paddingVertical: 40,
        alignItems: 'center',
        marginTop: 60,
    },
    inputGroup: {
        width: '100%',
        marginBottom: 20,
    },
    label: {
        fontSize: 18,
        fontWeight: '600',
        color: '#000',
        marginBottom: 10,
        paddingHorizontal: 20,
    },
    inputBox: {
        backgroundColor: '#F5F5F5',
        borderRadius: 10,
        height: 40,
        justifyContent: 'center',
        paddingHorizontal: 15,
        marginHorizontal: 20,
    },
    inputText: {
        fontSize: 18,
        fontWeight: '600',
        color: '#000',
    },
    passwordRequirement: {
        fontSize: 13,
        fontWeight: '500',
        color: '#000',
        marginBottom: 20,
    },
    nextButton: {
        backgroundColor: '#4183F3',
        borderRadius: 5,
        width: '90%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
    nextButtonText: {
        fontSize: 17,
        fontWeight: '600',
        color: '#FFFFFF',
    },
});

export default SignUp1;
