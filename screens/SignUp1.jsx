import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const SignUp1 = ({ navigation }) => {
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
                        />
                    </View>
                </View>

                {/* Password Requirements */}
                <Text style={styles.passwordRequirement}>* 8자 이상의 영문자, 숫자, 특수문자 포함</Text>

                {/* Next Button */}
                <TouchableOpacity
                    style={styles.nextButton}
                    onPress={() => navigation.navigate('SignUp2')}  // SignUp2로 이동
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
