import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import { Color, FontFamily, FontSize, StyleVariable } from "../GlobalStyles";

const MyPageMain = () => {
    return (
        <View style={styles.mypageMain}>
            <View style={[styles.bottomNav, styles.tooltipBorder]}>
                <View style={styles.contentFlexBox2}>
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
                        <Text style={[styles.title, styles.titleTypo]} />
                        <Text
                            style={[styles.bodyText, styles.textTypo1]}
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
            <View style={[styles.mpWithdrawalButton, styles.buttonLayout]}>
                <Text style={[styles.text, styles.textTypo]}>탈퇴하기</Text>
            </View>
            <View style={[styles.mpLogoutButton, styles.buttonLayout]}>
                <Text style={[styles.text1, styles.textTypo]}>로그아웃</Text>
            </View>
            <View style={styles.mpContentFrame}>
                <View style={[styles.mpContent, styles.contentFlexBox]}>
                    <Text style={[styles.text1, styles.textTypo]}>공지사항</Text>
                    <Image
                        style={styles.arrowIconLayout}
                        contentFit="cover"
                        source={require("../assets/arrow_front.png")}
                    />
                </View>
                <View style={[styles.mpContent1, styles.contentFlexBox]}>
                    <Text style={[styles.text1, styles.textTypo]}>알림설정</Text>
                    <Image
                        style={styles.arrowIconLayout}
                        contentFit="cover"
                        source={require("../assets/arrow_front.png")}
                    />
                </View>
                <View style={[styles.mpContent1, styles.contentFlexBox]}>
                    <Text style={[styles.text1, styles.textTypo]}>문의하기</Text>
                    <Image
                        style={styles.arrowIconLayout}
                        contentFit="cover"
                        source={require("../assets/arrow_front.png")}
                    />
                </View>
                <View style={[styles.mpContent1, styles.contentFlexBox]}>
                    <Text style={[styles.text1, styles.textTypo]}>버전정보</Text>
                    <Text style={[styles.text6, styles.textTypo]}>1.0</Text>
                </View>
            </View>
            <View style={styles.mpBanner}>
                <Text style={[styles.text1, styles.textTypo]}>배너광고</Text>
            </View>
            <View style={[styles.mpProfileBox, styles.topNavPosition]}>
                <View style={styles.mpProfileWhitebox}>
                    <View style={[styles.mpPhotoNicname, styles.contentFlexBox2]}>
                        <Image
                            style={styles.mpPhotoIcon}
                            contentFit="cover"
                            // source={require("../assets/mp-photo.png")}
                        />
                        <View style={[styles.mpNickContent, styles.contentFlexBox2]}>
                            <Text style={[styles.text8, styles.titleTypo]}>닉네임</Text>
                            <Image
                                style={[styles.arrowRightIcon3, styles.arrowIconLayout]}
                                contentFit="cover"
                                source={require("../assets/arrow_front.png")}
                            />
                        </View>
                    </View>
                    <View style={[styles.mpProfileButtonContent, styles.contentFlexBox2]}>
                        <View style={styles.profileFlexBox}>
                            <Text style={[styles.text9, styles.textTypo1]}>프로필 편집</Text>
                        </View>
                        <View style={[styles.mpProfileModify, styles.profileFlexBox]}>
                            <Text style={[styles.text9, styles.textTypo1]}>정보 수정</Text>
                        </View>
                    </View>
                </View>
            </View>
            <View style={[styles.topNav, styles.topNavPosition]}>
                <View style={[styles.topNavContentFrame, styles.contentFlexBox]}>
                    <Image
                        style={styles.arrowIconLayout}
                        contentFit="cover"
                        source={require("../assets/arrow_back.png")}
                    />
                    <Text style={styles.plannie}>Plannie</Text>
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
    titleTypo: {
        textAlign: "center",
        color: Color.labelsPrimary,
        fontFamily: FontFamily.bodyStrong,
        fontWeight: "600",
    },
    textTypo1: {
        fontFamily: FontFamily.bodySmall,
        textAlign: "center",
        color: Color.labelsPrimary,
    },
    iconLayout: {
        marginLeft: 94.6,
        height: 32,
        width: 32,
    },
    buttonLayout: {
        paddingVertical: 9,
        paddingHorizontal: 70,
        height: 46,
        width: 340,
        borderRadius: 5,
        left: 28,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
    },
    textTypo: {
        lineHeight: 22,
        fontSize: FontSize.size_base_5,
        textAlign: "center",
        fontFamily: FontFamily.bodyStrong,
        fontWeight: "600",
    },
    contentFlexBox: {
        justifyContent: "space-between",
        flexDirection: "row",
        alignItems: "center",
    },
    topNavPosition: {
        width: 393,
        left: 0,
        position: "absolute",
    },
    contentFlexBox2: {
        flexDirection: "row",
        alignItems: "center",
    },
    arrowIconLayout: {
        height: 28,
        width: 28,
        overflow: "hidden",
    },
    profileFlexBox: {
        paddingVertical: 5,
        paddingHorizontal: 18,
        height: 25,
        borderRadius: 9,
        backgroundColor: Color.borderDefaultDefault,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },
    beakIcon: {
        zIndex: 0,
    },
    beakStrokeIcon: {
        zIndex: 1,
    },
    title: {
        zIndex: 2,
        display: "none",
        lineHeight: 20,
        fontSize: FontSize.size_mini_7,
    },
    bodyText: {
        fontSize: FontSize.size_smi_9,
        lineHeight: 17,
        zIndex: 3,
        display: "none",
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
        paddingHorizontal: 52,
        paddingVertical: 14,
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
    },
    text: {
        color: Color.backgroundDefaultDefault,
    },
    mpWithdrawalButton: {
        top: 702,
        backgroundColor: Color.colorDodgerblue,
    },
    text1: {
        color: Color.labelsPrimary,
        lineHeight: 22,
        fontSize: FontSize.size_base_5,
    },
    mpLogoutButton: {
        top: 647,
        backgroundColor: Color.colorLightskyblue_100,
    },
    mpContent: {
        alignSelf: "stretch",
        justifyContent: "space-between",
    },
    mpContent1: {
        marginTop: 27.5,
        alignSelf: "stretch",
        justifyContent: "space-between",
    },
    text6: {
        color: Color.colorDarkgray_200,
    },
    mpContentFrame: {
        top: 312,
        left: 37,
        width: 321,
        position: "absolute",
    },
    mpBanner: {
        top: 230,
        left: 13,
        paddingHorizontal: 152,
        paddingVertical: 16,
        height: 55,
        width: 367,
        backgroundColor: Color.borderDefaultDefault,
        borderRadius: 5,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
    },
    mpPhotoIcon: {
        width: 55,
        height: 55,
    },
    text8: {
        fontSize: FontSize.size_lg_4,
        lineHeight: 25,
    },
    arrowRightIcon3: {
        marginLeft: 156.1,
    },
    mpNickContent: {
        marginLeft: 32.1,
    },
    mpPhotoNicname: {
        width: 322,
        height: 55,
        justifyContent: "center",
    },
    text9: {
        lineHeight: 20,
        fontSize: FontSize.size_mini_7,
    },
    mpProfileModify: {
        marginLeft: 45.9,
    },
    mpProfileButtonContent: {
        marginTop: 18.4,
    },
    mpProfileWhitebox: {
        height: 119,
        paddingHorizontal: 22,
        paddingVertical: 10,
        borderRadius: 9,
        width: 367,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: Color.backgroundDefaultDefault,
    },
    mpProfileBox: {
        top: 74,
        backgroundColor: Color.colorAliceblue,
        height: 147,
        justifyContent: "center",
        alignItems: "center",
    },
    plannie: {
        fontSize: FontSize.size_3xl,
        color: Color.colorLightskyblue_100,
        textAlign: "left",
        fontFamily: FontFamily.bodyStrong,
        fontWeight: "600",
    },
    topNavContentFrame: {
        width: 213,
    },
    topNav: {
        top: 0,
        height: 73,
        padding: 23,
        backgroundColor: Color.backgroundDefaultDefault,
    },
    mypageMain: {
        flex: 1,
        width: "100%",
        height: 852,
        overflow: "hidden",
        backgroundColor: Color.backgroundDefaultDefault,
    },
});

export default MyPageMain;
