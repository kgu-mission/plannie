import * as React from "react";
import {Text, StyleSheet, View, TouchableOpacity} from "react-native";
import { Image } from "expo-image";
import { FontFamily, Color, FontSize } from "../GlobalStyles";
import {useNavigation} from "@react-navigation/native";

const StartPage = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.startPage}>
            <Text style={[styles.plannie, styles.planniePosition]}>
                <Text style={styles.text}>{`계획 세우는 게
어려울 땐?
`}</Text>
                <Text style={styles.plannie1}>Plannie</Text>
            </Text>
            <TouchableOpacity  onPress = {() => navigation.navigate('Login')}
                               style = {[styles.spStartButton, styles.planniePosition]}>
                <Text style={styles.planit}>Plan:it 시작하기</Text>
            </TouchableOpacity>
            <Image
                style={[styles.plannieIcon1, styles.planniePosition]}
                contentFit="cover"
                // source={require("../assets/plannie-icon-1.png")}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    planniePosition: {
        left: "50%",
        position: "absolute",
    },
    text: {
        fontSize: 37,
        fontWeight: "700",
        fontFamily: FontFamily.interBold,
    },
    plannie1: {
        fontSize: 46,
        fontWeight: "800",
        fontFamily: FontFamily.interExtraBold,
    },
    plannie: {
        marginLeft: -168.8,
        top: 563,
        color: Color.backgroundDefaultDefault,
        textAlign: "left",
    },
    planit: {
        fontSize: FontSize.size_lg_4,
        fontWeight: "600",
        width: 150,

        alignContent: "center",
        fontFamily: FontFamily.bodyStrong,
        color: Color.labelsPrimary,

    },
    spStartButton: {
        marginLeft: -165.5,
        top: 747,
        borderRadius: 46,
        backgroundColor: Color.backgroundDefaultDefault,
        width: 330,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        paddingHorizontal: 124,
        paddingVertical: 18,
        overflow: "hidden",
    },
    plannieIcon1: {
        marginTop: -176,
        marginLeft: -92.5,
        top: "50%",
        width: 185,
        height: 231,
    },
    startPage: {
        backgroundColor: Color.colorBlueviolet,
        flex: 1,
        width: "100%",
        height: 852,
        overflow: "hidden",
    },
});

export default StartPage;
