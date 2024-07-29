import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import { Color, FontFamily, FontSize, StyleVariable } from "../GlobalStyles";

const MyPageAlarm = () => {
    return (
        <View style={styles.mypageAlarm}>
            <View style={[styles.bottomNav, styles.tooltipFlexBox]}>
                <View style={styles.nav}>
                    <View style={[styles.tooltip, styles.tooltipFlexBox]}>
                        <Image
                            style={[styles.beakIcon, styles.beakIconPosition]}
                            contentFit="cover"
                            // source={require("../assets/beak1.png")}
                        />
                        <Image
                            style={[styles.beakStrokeIcon, styles.beakIconPosition]}
                            contentFit="cover"
                            // source={require("../assets/beak-stroke1.png")}
                        />
                        <Text style={[styles.title, styles.titleFlexBox]} />
                        <Text
                            style={[styles.bodyText, styles.titleFlexBox]}
                        >{`          `}</Text>
                    </View>
                    <Image
                        style={styles.iconLayout}
                        contentFit="cover"
                        source={require("../assets/Home.png")}
                    />
                    <Image
                        style={[styles.userIcon, styles.iconLayout]}
                        contentFit="cover"
                        source={require("../assets/User.png")}
                    />
                </View>
            </View>
            <View style={[styles.mpaAlarmlistFrame, styles.mpaFrameLayout]}>
                <View style={[styles.mpaAlarmFrame, styles.mpaFrameFlexBox]}>
                    <Text style={styles.text}>일정 알림 받기</Text>
                    <Image
                        style={styles.toggleIcon}
                        contentFit="cover"
                        // source={require("../assets/toggle.png")}
                    />
                </View>
                <View style={[styles.mpaAlarmFrame1, styles.mpaFrameFlexBox]}>
                    <Text style={styles.text}>공지 알림 받기</Text>
                    <Image
                        style={styles.toggleIcon}
                        contentFit="cover"
                        // source={require("../assets/toggle1.png")}
                    />
                </View>
                <View style={[styles.mpaAlarmFrame1, styles.mpaFrameFlexBox]}>
                    <Text style={styles.text}>SMS 알림 받기</Text>
                    <Image
                        style={styles.toggleIcon}
                        contentFit="cover"
                        // source={require("../assets/toggle2.png")}
                    />
                </View>
                <View style={[styles.mpaAlarmFrame1, styles.mpaFrameFlexBox]}>
                    <Text style={styles.text}>이메일 알림 받기</Text>
                    <Image
                        style={styles.toggleIcon}
                        contentFit="cover"
                        // source={require("../assets/toggle3.png")}
                    />
                </View>
            </View>
            <View style={styles.mpaLine} />
            <View style={[styles.mpaAlarmFrame4, styles.mpaFrameFlexBox]}>
                <Text style={styles.text}>알림 받기</Text>
                <Image
                    style={styles.toggleIcon}
                    contentFit="cover"
                    // source={require("../assets/toggle4.png")}
                />
            </View>
            <Text style={[styles.text4, styles.text4Typo]}>알림설정</Text>
            <View style={styles.topNav}>
                <View style={[styles.topNavContentFrame, styles.mpaFrameFlexBox]}>
                    <Image
                        style={styles.arrowBackIcon}
                        contentFit="cover"
                        source={require("../assets/arrow_back.png")}
                    />
                    <Text style={[styles.plannie, styles.text4Typo]}>Plannie</Text>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    tooltipFlexBox: {
        alignItems: "center",
        borderStyle: "solid",
        backgroundColor: Color.backgroundDefaultDefault,
    },
    beakIconPosition: {
        height: 10,
        width: 10,
        bottom: -5,
        marginLeft: -4.7,
        left: "50%",
        position: "absolute",
    },
    titleFlexBox: {
        display: "none",
        textAlign: "center",
        color: Color.labelsPrimary,
    },
    iconLayout: {
        marginLeft: 94.6,
        height: 32,
        width: 32,
    },
    mpaFrameLayout: {
        width: 321,
        position: "absolute",
    },
    mpaFrameFlexBox: {
        justifyContent: "space-between",
        flexDirection: "row",
        alignItems: "center",
    },
    text4Typo: {
        textAlign: "left",
        fontFamily: FontFamily.bodyStrong,
        fontWeight: "600",
    },
    beakIcon: {
        zIndex: 0,
    },
    beakStrokeIcon: {
        zIndex: 1,
    },
    title: {
        zIndex: 2,
        fontFamily: FontFamily.bodyStrong,
        fontWeight: "600",
        lineHeight: 20,
        fontSize: FontSize.size_mini_7,
        display: "none",
    },
    bodyText: {
        fontSize: FontSize.size_smi_9,
        lineHeight: 17,
        fontFamily: FontFamily.bodySmall,
        zIndex: 3,
    },
    tooltip: {
        borderRadius: StyleVariable.radius200,
        borderColor: Color.colorLightskyblue_200,
        borderWidth: 2.8,
        width: 34,
        height: 24,
        paddingHorizontal: StyleVariable.space300,
        paddingVertical: StyleVariable.space200,
    },
    userIcon: {
        overflow: "hidden",
    },
    nav: {
        flexDirection: "row",
        alignItems: "center",
    },
    bottomNav: {
        top: 776,
        left: -1,
        borderColor: Color.borderDefaultDefault,
        borderWidth: 0.9,
        width: 395,
        height: 75,
        justifyContent: "center",
        paddingHorizontal: 52,
        paddingVertical: 14,
        position: "absolute",
    },
    text: {
        textAlign: "center",
        color: Color.labelsPrimary,
        fontFamily: FontFamily.bodyStrong,
        fontWeight: "600",
        lineHeight: 20,
        fontSize: FontSize.size_mini_7,
    },
    toggleIcon: {
        height: 32,
        width: 32,
        overflow: "hidden",
    },
    mpaAlarmFrame: {
        alignSelf: "stretch",
        justifyContent: "space-between",
    },
    mpaAlarmFrame1: {
        marginTop: 18.4,
        alignSelf: "stretch",
        justifyContent: "space-between",
    },
    mpaAlarmlistFrame: {
        top: 184,
        left: 36,
    },
    mpaLine: {
        marginLeft: -174.9,
        top: 160,
        borderColor: Color.labelsPrimary,
        borderTopWidth: 0.9,
        width: 350,
        height: 1,
        left: "50%",
        borderStyle: "solid",
        position: "absolute",
    },
    mpaAlarmFrame4: {
        marginLeft: -160.7,
        top: 119,
        width: 321,
        position: "absolute",
        left: "50%",
    },
    text4: {
        top: 78,
        left: 32,
        fontSize: FontSize.size_lg_4,
        lineHeight: 25,
        color: Color.labelsPrimary,
        textAlign: "left",
        position: "absolute",
    },
    arrowBackIcon: {
        width: 28,
        height: 28,
        overflow: "hidden",
    },
    plannie: {
        fontSize: FontSize.size_3xl,
        color: Color.colorLightskyblue_100,
    },
    topNavContentFrame: {
        width: 213,
    },
    topNav: {
        top: 0,
        left: 0,
        width: 393,
        height: 73,
        padding: 23,
        position: "absolute",
        backgroundColor: Color.backgroundDefaultDefault,
    },
    mypageAlarm: {
        flex: 1,
        width: "100%",
        height: 852,
        overflow: "hidden",
        backgroundColor: Color.backgroundDefaultDefault,
    },
});

export default MyPageAlarm;
