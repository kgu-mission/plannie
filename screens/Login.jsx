import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { Color, FontSize, FontFamily } from "../GlobalStyles";

const Login = () => {
    return (
        <View style={styles.login}>
            <View style={styles.loginBg} />
            <Text style={styles.plannie}>Plannie</Text>
            <Image
                style={styles.signWithGoogle1}
                contentFit="cover"
                // source={require("../assets/sign-with-google-1.png")}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    loginBg: {
        top: 48,
        left: 393,
        borderTopLeftRadius: 37,
        borderTopRightRadius: 37,
        backgroundColor: Color.backgroundDefaultDefault,
        width: 393,
        height: 803,
        transform: [
            {
                rotate: "-180deg",
            },
        ],
        position: "absolute",
    },
    plannie: {
        top: 92,
        left: 24,
        fontSize: FontSize.size_8xl_5,
        fontWeight: "600",
        fontFamily: FontFamily.bodyStrong,
        color: Color.colorLightskyblue_100,
        textAlign: "left",
        position: "absolute",
    },
    signWithGoogle1: {
        marginTop: -28.3,
        marginLeft: -144,
        top: "50%",
        left: "50%",
        width: 288,
        height: 56,
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
