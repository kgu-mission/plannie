import * as React from "react";
import {View, Text, TouchableOpacity} from "react-native";
import { Image } from "expo-image";
import {useNavigation} from "@react-navigation/native";
import styles from '../Styles/LoginStyles';

const Login = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.login}>
            <View style={styles.loginBg}></View>
            <Text style={styles.plannie}>Plannie</Text>
            <TouchableOpacity
                onPress = {() => navigation.navigate('Calendar')}
                style={styles.signWithGoogle1}
                contentFit="cover">
            <Image
                style={styles.signWithGoogle1}
                source={require("../assets/ios_google.png")}
            />
            </TouchableOpacity>
        </View>
    );
};

export default Login;
