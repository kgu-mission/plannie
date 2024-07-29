import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import { Color, FontFamily, FontSize, StyleVariable } from "../GlobalStyles";

const MyPageEnquire = () => {
    return (
        <View style={styles.mypageEnquire}>
            <View style={[styles.bottomNav, styles.tooltipFlexBox]}>
                <View style={styles.navFlexBox}>
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
            <View style={styles.mpeContent}>
                <View style={styles.mpeSpaceBlock}>
                    <View>
                        <Text style={[styles.text, styles.textLayout]}>제목</Text>
                    </View>
                </View>
                <View style={[styles.mpeNoticeBox, styles.mpeSpaceBlock]}>
                    <View>
                        <Text style={[styles.text1, styles.textTypo]}>
                            문의할 내용을 작성해주세요
                        </Text>
                    </View>
                </View>
                <Text
                    style={[styles.text2, styles.textTypo]}
                >{`문의하신 사항은 관리자 연락처로 전송됩니다.
평일 09시~11시, 13~17시에 이메일로 답변드립니다.`}</Text>
                <View style={[styles.mpeButton, styles.navFlexBox]}>
                    <Text style={styles.text3}>문의하기</Text>
                </View>
            </View>
            <Text style={[styles.text4, styles.textTypo1]}>문의하기</Text>
            <View style={styles.topNav}>
                <View style={[styles.topNavContentFrame, styles.navFlexBox]}>
                    <Image
                        style={styles.arrowBackIcon}
                        contentFit="cover"
                        source={require("../assets/arrow_back.png")}
                    />
                    <Text style={[styles.plannie, styles.textTypo1]}>Plannie</Text>
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
        color: Color.labelsPrimary,
    },
    mpeSpaceBlock: {
        paddingVertical: 18,
        paddingHorizontal: 22,
        borderRadius: 9,
        alignSelf: "stretch",
        backgroundColor: Color.backgroundDefaultDefault,
    },
    textTypo: {
        fontFamily: FontFamily.interMedium,
        fontWeight: "500",
        textAlign: "left",
    },
    navFlexBox: {
        flexDirection: "row",
        alignItems: "center",
    },
    textTypo1: {
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
        lineHeight: 20,
        zIndex: 2,
        fontFamily: FontFamily.bodyStrong,
        fontWeight: "600",
        display: "none",
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
        paddingHorizontal: 52,
        paddingVertical: 14,
        justifyContent: "center",
        position: "absolute",
    },
    text: {
        display: "flex",
        alignItems: "center",
        textAlign: "left",
        fontFamily: FontFamily.bodyStrong,
        fontWeight: "600",
        fontSize: FontSize.size_base_5,
    },
    text1: {
        height: 367,
        width: 321,
        color: Color.labelsPrimary,
        fontSize: FontSize.size_mini_7,
        fontFamily: FontFamily.interMedium,
        fontWeight: "500",
    },
    mpeNoticeBox: {
        marginTop: 23,
    },
    text2: {
        fontSize: 14,
        lineHeight: 18,
        color: Color.colorDarkgray_200,
        marginTop: 23,
        display: "flex",
        alignItems: "center",
        width: 367,
    },
    text3: {
        lineHeight: 22,
        color: Color.backgroundDefaultDefault,
        fontSize: FontSize.size_base_5,
        textAlign: "center",
        fontFamily: FontFamily.bodyStrong,
        fontWeight: "600",
    },
    mpeButton: {
        borderRadius: 5,
        backgroundColor: Color.colorDodgerblue,
        height: 46,
        paddingHorizontal: 70,
        paddingVertical: 9,
        marginTop: 23,
        width: 367,
        justifyContent: "center",
    },
    mpeContent: {
        top: 138,
        left: 13,
        width: 367,
        position: "absolute",
    },
    text4: {
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
    plannie: {
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
    mypageEnquire: {
        backgroundColor: Color.colorAliceblue,
        flex: 1,
        width: "100%",
        height: 852,
        overflow: "hidden",
    },
});

export default MyPageEnquire;
