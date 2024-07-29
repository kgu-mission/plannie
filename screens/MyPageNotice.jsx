import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import { Color, FontFamily, FontSize, StyleVariable } from "../GlobalStyles";

const MyPageNotice = () => {
    return (
        <View style={styles.mypageNotice}>
            <View style={[styles.bottomNav, styles.tooltipBorder]}>
                <View style={styles.navFlexBox}>
                    <View style={[styles.tooltip, styles.tooltipBorder]}>
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
            <View style={styles.mpnFrame}>
                <View style={styles.noticeSpaceBlock}>
                    <View>
                        <Text style={[styles.plannie, styles.textLayout]}>
                            Plannie 출시!
                        </Text>
                        <Text
                            style={[styles.text, styles.textLayout]}
                        >{`10월 중 정식 오픈 예정!

지금까지 없었던 새로운 일정 관리 앱을 지금 바로 베타버전으로 만나보세요`}</Text>
                    </View>
                </View>
                <View style={[styles.noticeBox1, styles.noticeSpaceBlock]}>
                    <View>
                        <Text style={[styles.plannie, styles.textLayout]}>
                            Plannie 출시!
                        </Text>
                        <Text
                            style={[styles.text, styles.textLayout]}
                        >{`10월 중 정식 오픈 예정!

지금까지 없었던 새로운 일정 관리 앱을 지금 바로 베타버전으로 만나보세요`}</Text>
                    </View>
                </View>
            </View>
            <Text style={[styles.text2, styles.text2Typo]}>공지사항</Text>
            <View style={styles.topNav}>
                <View style={[styles.topNavContentFrame, styles.navFlexBox]}>
                    <Image
                        style={styles.arrowBackIcon}
                        contentFit="cover"
                        source={require("../assets/arrow_back.png")}
                    />
                    <Text style={[styles.plannie2, styles.text2Typo]}>Plannie</Text>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    tooltipBorder: {
        borderStyle: "solid",
        alignItems: "center",
        backgroundColor: Color.backgroundDefaultDefault,
    },
    beakIconPosition: {
        height: 10,
        width: 10,
        left: "50%",
        bottom: -5,
        marginLeft: -4.7,
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
    textLayout: {
        width: 321,
        textAlign: "left",
        color: Color.labelsPrimary,
    },
    noticeSpaceBlock: {
        paddingVertical: 18,
        paddingHorizontal: 22,
        borderRadius: 9,
        alignSelf: "stretch",
        backgroundColor: Color.backgroundDefaultDefault,
    },
    text2Typo: {
        textAlign: "left",
        fontFamily: FontFamily.bodyStrong,
        fontWeight: "600",
    },
    navFlexBox: {
        flexDirection: "row",
        alignItems: "center",
    },
    beakIcon: {
        zIndex: 0,
    },
    beakStrokeIcon: {
        zIndex: 1,
    },
    title: {
        lineHeight: 20,
        zIndex: 2,
        fontFamily: FontFamily.bodyStrong,
        fontWeight: "600",
        fontSize: FontSize.size_mini_7,
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
        alignItems: "center",
    },
    userIcon: {
        overflow: "hidden",
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
        alignItems: "center",
        position: "absolute",
    },
    plannie: {
        fontSize: FontSize.size_base_5,
        display: "flex",
        fontFamily: FontFamily.bodyStrong,
        fontWeight: "600",
        alignItems: "center",
    },
    text: {
        fontWeight: "500",
        fontFamily: FontFamily.interMedium,
        marginTop: 18.4,
        fontSize: FontSize.size_mini_7,
    },
    noticeBox1: {
        marginTop: 23,
    },
    mpnFrame: {
        top: 138,
        left: 13,
        width: 367,
        position: "absolute",
    },
    text2: {
        marginLeft: -34,
        top: 92,
        fontSize: FontSize.size_lg_4,
        lineHeight: 25,
        color: Color.labelsPrimary,
        textAlign: "left",
        left: "50%",
        position: "absolute",
    },
    arrowBackIcon: {
        width: 28,
        height: 28,
        overflow: "hidden",
    },
    plannie2: {
        fontSize: FontSize.size_3xl,
        color: Color.colorLightskyblue_100,
    },
    topNavContentFrame: {
        width: 213,
        justifyContent: "space-between",
    },
    topNav: {
        top: 0,
        left: 0,
        width: 393,
        height: 73,
        padding: 23,
        backgroundColor: Color.backgroundDefaultDefault,
        position: "absolute",
    },
    mypageNotice: {
        backgroundColor: Color.colorAliceblue,
        flex: 1,
        width: "100%",
        height: 852,
        overflow: "hidden",
    },
});

export default MyPageNotice;
