import * as React from "react";
import {StyleSheet, View, Text, TouchableOpacity} from "react-native";
import { Image } from "expo-image";
import { Color, FontSize, FontFamily } from "../GlobalStyles";
import {useNavigation} from "@react-navigation/native";

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

const styles = StyleSheet.create({
    loginBg: {
        top: 60,
        borderTopLeftRadius: 37,
        borderTopRightRadius: 37,
        backgroundColor: "#FFFFFF",
        width: 393,
        height: 800,
        position: "absolute",
    },
    plannie: {
        top: 90,
        left: 30,
        fontSize: FontSize.size_8xl_5,
        fontWeight: "600",
        fontFamily: FontFamily.bodyStrong,
        color: Color.colorLightskyblue_100,
        textAlign: "left",
        position: "absolute",
    },
    signWithGoogle1: {
        alignSelf: "center",
        // marginTop: -28.3,
        // marginLeft: -144,
        top: "45%",
        // left: "50%",
        width: 258,
        borderWidth: 0,
        height: 60,
        position: "absolute",
    },
    login: {
        backgroundColor: Color.colorLavender,
        flex: 1,
        width: "100%",
        height: 852,
        overflow: "hidden",
    },
});

export default Login;
