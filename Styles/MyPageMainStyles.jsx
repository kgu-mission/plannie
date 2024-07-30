import {StyleSheet} from "react-native";
import {Color, FontFamily, FontSize, StyleVariable} from "../GlobalStyles";

const styles = StyleSheet.create({
    topNavContentFrame: {
        // width: 213,
        width: 350,
        top: 60,
        alignSelf: "center",
        justifyContent: "center",
    },
    topNav: {
        top: 0,
        height: 100,
        // padding: 23,
        backgroundColor: Color.backgroundDefaultDefault,
    },
    mypageMain: {
        // flex: 1,
        width: "100%",
        height: "100%",
        overflow: "hidden",
        backgroundColor: Color.backgroundDefaultDefault,
    },
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

});

export default styles;