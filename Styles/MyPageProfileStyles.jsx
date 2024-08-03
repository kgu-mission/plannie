import {StyleSheet} from "react-native";
import {Color, FontFamily, FontSize, StyleVariable} from "../GlobalStyles";

const styles = StyleSheet.create({
    mypageProfile: {
        backgroundColor: Color.colorAliceblue,
        flex: 1,
        width: "100%",
        height: "100%",
        overflow: "hidden",
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
    titleFlexBox: {
        display: "none",
        textAlign: "center",
    },
    bodyTextTypo: {
        fontFamily: FontFamily.bodySmall,
        color: Color.labelsPrimary,
    },
    iconLayout: {
        marginLeft: 94.6,
        height: 32,
        width: 32,
    },
    textPosition1: {
        left: 0,
        position: "absolute",
    },
    mppPosition: {
        height: 1,
        borderTopWidth: 0.9,
        borderColor: Color.labelsPrimary,
        marginLeft: -99.2,
        left: "50%",
        borderStyle: "solid",
        position: "absolute",
    },
    mppFNicknameFlexBox: {
        justifyContent: "space-between",
        flexDirection: "row",
        alignItems: "center",
    },
    mppSpaceBlock: {
        marginTop: 27.5,
        width: 317,
    },
    textTypo: {
        fontFamily: FontFamily.interMedium,
        fontWeight: "500",
        textAlign: "left",
        color: Color.labelsPrimary,
        fontSize: FontSize.size_mini_7,
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
        color: Color.labelsPrimary,
        fontSize: FontSize.size_mini_7,
        fontFamily: FontFamily.bodyStrong,
        fontWeight: "600",
    },
    bodyText: {
        fontSize: FontSize.size_smi_9,
        lineHeight: 17,
        zIndex: 3,
        display: "none",
        textAlign: "center",
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
        paddingHorizontal: 52,
        paddingVertical: 14,
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
    },
    text: {
        top: 2,
        textAlign: "left",
        color: Color.labelsPrimary,
        fontSize: FontSize.size_mini_7,
        fontFamily: FontFamily.bodyStrong,
        fontWeight: "600",
    },
    mppLine: {
        top: 22,
        width: 258,
    },
    mppInitializationIcon: {
        width: 14,
        height: 14,
        overflow: "hidden",
    },
    mppNicknameNum: {
        fontSize: 11,
        marginLeft: 10.1,
        textAlign: "left",
    },
    mppFNickname: {
        width: 235,
        left: 71,
        position: "absolute",
        top: 0,
    },
    mppGNickname: {
        height: 22,
        width: 317,
    },
    text3: {
        left: 71,
        position: "absolute",
        top: 0,
    },
    mppGName: {
        height: 22,
    },
    arrowRightIcon: {
        left: 295,
        width: 22,
        top: 0,
        height: 22,
        position: "absolute",
        overflow: "hidden",
    },
    text7: {
        top: 5,
        textAlign: "left",
        color: Color.labelsPrimary,
        fontSize: FontSize.size_mini_7,
        fontFamily: FontFamily.bodyStrong,
        fontWeight: "600",
    },
    mppLineShort: {
        top: 24,
        width: 203,
    },
    text8: {
        top: 3,
        left: 71,
        position: "absolute",
    },
    mppGBirth: {
        height: 25,
    },
    mppContent: {
        width: 317,
        justifyContent: "center",
        alignItems: "center",
    },
    mppContentBox: {
        top: 138,
        left: 13,
        borderRadius: 9,
        width: 367,
        height: 615,
        paddingHorizontal: 25,
        paddingVertical: 73,
        flexDirection: "row",
        justifyContent: "center",
        backgroundColor: Color.backgroundDefaultDefault,
        position: "absolute",
    },
    mppPFrameIcon: {
        width: 28,
        height: 28,
        overflow: "hidden",
    },
    mppPhoto: {
        top: 92,
        left: 151,
        borderRadius: 46,
        backgroundColor: Color.borderDefaultDefault,
        width: 92,
        height: 92,
        padding: 32,
        flexDirection: "row",
        alignItems: "center",
        position: "absolute",
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
        width: 393,
        height: 73,
        padding: 23,
        top: 0,
        backgroundColor: Color.backgroundDefaultDefault,
    },

});

export default styles;