import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const SignUp2 = ({ navigation }) => {  // navigation prop 추가
    return (
        <View style={styles.container}>
            <Text style={styles.header}>Let’s join the Plannie</Text>
            <Text style={styles.requiredText}>* 필수입력항목</Text>

            <View style={styles.formContainer}>
                {/* Nickname Section */}
                <View style={styles.inputGroup}>
                    <Text style={styles.label}>닉네임 *</Text>
                    <View style={styles.inputBox}>
                        <TextInput
                            style={styles.inputText}
                            placeholder=""
                            placeholderTextColor="#878787"
                        />
                    </View>
                </View>

                {/* Name Section */}
                <View style={styles.inputGroup}>
                    <Text style={styles.label}>이름</Text>
                    <View style={styles.inputBox}>
                        <TextInput
                            style={styles.inputText}
                            placeholder=""
                            placeholderTextColor="#878787"
                        />
                    </View>
                </View>

                {/* Phone Section */}
                <View style={styles.inputGroup}>
                    <Text style={styles.label}>휴대폰</Text>
                    <View style={styles.inputBox}>
                        <TextInput
                            style={styles.inputText}
                            placeholder=""
                            placeholderTextColor="#878787"
                            keyboardType="phone-pad"
                        />
                    </View>
                </View>

                {/* Next Button */}
                <TouchableOpacity
                    style={styles.nextButton}
                    onPress={() => navigation.navigate('SignUp3')}  // SignUp3로 이동
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
        right: 20,
    },
    formContainer: {
        backgroundColor: '#FFFFFF',
        borderRadius: 37,
        width: 340,
        paddingVertical: 20,
        alignItems: 'center',
        marginTop: 20,
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
        paddingHorizontal: 10,
    },
    inputBox: {
        backgroundColor: '#D9D9D9',
        borderRadius: 5,
        height: 40,
        justifyContent: 'center',
        paddingHorizontal: 10,
    },
    inputText: {
        fontSize: 18,
        fontWeight: '600',
        color: '#000',
    },
    nextButton: {
        backgroundColor: '#8FBEFF',
        borderRadius: 5,
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
    nextButtonText: {
        fontSize: 17,
        fontWeight: '600',
        color: '#000',
    },
});

export default SignUp2;
