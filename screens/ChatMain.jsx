import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { Border, Color, FontSize, FontFamily, Padding } from "../GlobalStyles";

const ChatMain = () => {
    return (
        <View style={styles.chatMain}>
            <View style={styles.bg} />
            <Text style={[styles.text, styles.textPosition]}>
                어떤 일정을 세우고 싶나요?
            </Text>
            <View style={[styles.chatBar, styles.textPosition]}>
                <View style={styles.fabFlexBox}>
                    <View style={[styles.fab, styles.fabFlexBox]}>
                        <Image
                            style={styles.plusIcon}
                            contentFit="cover"
                            // source={require("../assets/plus-icon.png")}
                        />
                    </View>
                    <View style={[styles.chatWindow, styles.chatFlexBox]}>
                        <Text style={styles.text1}>정보를 입력해주세요</Text>
                        <Image
                            style={styles.gravityUimagnifierIcon}
                            contentFit="cover"
                            // source={require("../assets/gravityuimagnifier.png")}
                        />
                    </View>
                </View>
            </View>
            <View style={[styles.chatPlannie, styles.chatFlexBox]}>
                <Image
                    style={styles.arrowBackIcon}
                    contentFit="cover"
                    source={require("../assets/arrow_back.png")}
                />
                <Text style={styles.plannie}>Plannie</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    textPosition: {
        left: "50%",
        position: "absolute",
    },
    fabFlexBox: {
        alignItems: "center",
        flexDirection: "row",
    },
    chatFlexBox: {
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "row",
    },
    bg: {
        top: 72,
        left: 393,
        borderTopLeftRadius: Border.br_17xl_8,
        borderTopRightRadius: Border.br_17xl_8,
        width: 393,
        height: 780,
        transform: [
            {
                rotate: "-180deg",
            },
        ],
        backgroundColor: Color.backgroundDefaultDefault,
        position: "absolute",
    },
    text: {
        marginTop: -11.9,
        marginLeft: -86.5,
        top: "50%",
        fontSize: FontSize.size_mini_7,
        letterSpacing: 0,
        lineHeight: 22,
        color: "#7cb1fb",
        textAlign: "center",
        fontFamily: FontFamily.m3BodyLarge,
    },
    plusIcon: {
        width: 22,
        height: 22,
    },
    fab: {
        padding: Padding.p_sm_8,
        justifyContent: "center",
    },
    text1: {
        fontSize: FontSize.m3BodyLarge_size,
        letterSpacing: 1,
        lineHeight: 24,
        color: Color.colorDarkgray_200,
        textAlign: "left",
        fontFamily: FontFamily.m3BodyLarge,
    },
    gravityUimagnifierIcon: {
        width: 18,
        height: 18,
        overflow: "hidden",
    },
    chatWindow: {
        borderRadius: 28,
        width: 322,
        height: 33,
        paddingHorizontal: Padding.p_4xl,
        paddingVertical: 6,
        marginLeft: 7.4,
        backgroundColor: Color.backgroundDefaultDefault,
    },
    chatBar: {
        marginLeft: -196.5,
        top: 801,
        backgroundColor: Color.colorAliceblue,
        width: 394,
        height: 51,
        justifyContent: "center",
    },
    arrowBackIcon: {
        width: 28,
        height: 28,
        overflow: "hidden",
    },
    plannie: {
        fontSize: FontSize.size_3xl_1,
        fontWeight: "600",
        fontFamily: FontFamily.bodyStrong,
        color: Color.colorLightskyblue_100,
        textAlign: "left",
    },
    chatPlannie: {
        top: 22,
        left: 19,
        width: 217,
        position: "absolute",
    },
    chatMain: {
        backgroundColor: Color.colorLavender,
        flex: 1,
        width: "100%",
        height: 852,
        overflow: "hidden",
    },
});

export default ChatMain;
