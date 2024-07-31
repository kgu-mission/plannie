import {StyleSheet} from "react-native";
import {Color, FontFamily, FontSize, StyleVariable} from "../GlobalStyles";

const styles = StyleSheet.create({
    mypageMain: {
        width: "100%",
        height: "100%",
        overflow: "hidden",
        backgroundColor: Color.backgroundDefaultDefault,
    },
    mpProfileBox: {
        backgroundColor: Color.colorAliceblue,
        height: 150,
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
    },
    mpProfileWhitebox: {
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 20,
        paddingRight: 20,
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#ffffff",
    },
    mpPhotoNicname: {
        justifyContent: "center",
        flexDirection: "row",
        alignItems: "center",
    },
    mpPhotoIcon: {
        width: 55,
        height: 55,
    },
    mpNickContent: {
        marginLeft: 30,
        flexDirection: "row",
        alignItems: "center",
    },
    titleTypo: {
        textAlign: "center",
        color: Color.labelsPrimary,
        fontFamily: FontFamily.bodyStrong,
        fontWeight: "600",
        fontSize: 18,
        marginRight: 150,
    },
    arrowIconLayout: {
        height: 27,
        width: 27,
        overflow: "hidden",
    },
    mpProfileButtonContent: {
        marginTop: 15,
        flexDirection: "row",
        alignItems: "center",
    },
    profileFlexBox: {
        paddingVertical: 5,
        paddingHorizontal: 20,
        borderRadius: 10,
        backgroundColor: Color.borderDefaultDefault,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },
    mpProfileButton: {
        color: "#000000",
        fontSize: 15,
        fontFamily: FontFamily.bodySmall,
        textAlign: "center",
    },
    mpProfileModify: {
        marginLeft: 50,
    },
    mpBanner: {
        marginTop: 10,
        height: 60,
        width: 350,
        backgroundColor: Color.borderDefaultDefault,
        borderRadius: 5,
        flexDirection: "row",
        justifyContent: "center",
        alignSelf: "center",
    },
    mpContentFrame: {
        marginTop: 20,
        alignSelf: "center",
        width: 320,
    },
    mpContent: {
        marginBottom: 25,
        alignSelf: "stretch",
        justifyContent: "space-between",
    },
    contentFlexBox: {
        justifyContent: "space-between",
        flexDirection: "row",
        alignItems: "center",
    },
    textTypo: {
        lineHeight: 22,
        fontSize: 16,
        textAlign: "center",
        fontFamily: FontFamily.bodyStrong,
        fontWeight: "600",
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
    mpLogoutButton: {
        top: 647,
        backgroundColor: Color.colorLightskyblue_100,
    },
    text6: {
        color: Color.colorDarkgray_200,
    },


    text9: {
        lineHeight: 20,
        fontSize: FontSize.size_mini_7,
    },

    // topNavContentFrame: {
    //     // width: 213,
    //     width: 350,
    //     top: 60,
    //     alignSelf: "center",
    //     justifyContent: "center",
    // },
    // topNav: {
    //     top: 0,
    //     height: 100,
    //     // padding: 23,
    //     backgroundColor: Color.backgroundDefaultDefault,
    // },
    // plannie: {
    //     fontSize: FontSize.size_3xl,
    //     color: Color.colorLightskyblue_100,
    //     textAlign: "left",
    //     fontFamily: FontFamily.bodyStrong,
    //     fontWeight: "600",
    // },

});

export default styles;