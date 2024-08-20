import {StyleSheet} from "react-native";
import {Color, FontFamily, FontSize} from "../GlobalStyles";

const styles = StyleSheet.create({
    scheduleCreate: {
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        backgroundColor: Color.backgroundDefaultDefault,
        width: '100%',
        paddingHorizontal: 24,
        paddingVertical: 18,
        alignItems: "center",
    },
    ncXCheck: {
        width: 340,
        alignSelf: "center",
    },
    frameFlexBox: {
        justifyContent: "space-between",
        flexDirection: "row",
        alignItems: "center",
    },
    ncXIcon: {
        height: 35,
        width: 35,
    },
    ncCheckIcon: {
        height: 35,
        overflow: "hidden",
        width: 30,
    },
    ncContent: {
        width: 310,
        height: 640,
        marginTop: 20,
    },
    ncScheduleTitle: {
        fontSize: 25,
        fontWeight: "600",
        fontFamily: FontFamily.interSemiBold,
        textAlign: "left",
        color: Color.colorDarkslategray_100,
        alignSelf: "stretch",
    },
    frameSpaceBlock: {
        marginTop: 18,
        alignSelf: "stretch",
    },
    scDateFrame: {
        alignSelf: "stretch",
    },
    scDateText: {
        color: Color.colorDarkslategray_100,
        fontSize: FontSize.size_mid_7,
    },
    dateTypo: {
        fontFamily: FontFamily.interRegular,
        fontSize: FontSize.size_mid_7,
        textAlign: "left",
    },
    scDate: {
        color: Color.labelsPrimary,
    },
    scTimeFrame: {
        justifyContent: "space-between",
        flexDirection: "row",
        alignItems: "center",
    },
    scTimeButtonFrame: {
        width: 110,
    },
    scNoti: {
        borderRadius: 7,
        borderStyle: "solid",
        borderColor: Color.schemesOutline,
        borderWidth: 0.9,
        width: 80,
        height: 27,
        justifyContent: "center",
        overflow: "hidden",
    },
    scNotiFlexBox: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },
    stateLayer: {
        justifyContent: "center",
    },
    labelText: {
        fontSize: 14,
        letterSpacing: 0,
        lineHeight: 20,
        fontWeight: "500",
        fontFamily: FontFamily.interRegular,
        color: Color.schemesOnSurfaceVariant,
        textAlign: "center",
    },
    scNotiButtonIcon: {
        width: 21,
        height: 21,
    },
    scUrlText: {
        marginTop: 18,
        alignSelf: "stretch",
        color: Color.colorDarkslategray_100,
        fontSize: FontSize.size_mid_7,
    },
    scMemoFrame: {
        justifyContent: "center",
    },
    scEpText: {
        color: Color.colorDarkslategray_100,
        fontSize: FontSize.size_mid_7,
        alignSelf: "stretch",
    },
    scMemo: {
        borderRadius: 10,
        backgroundColor: "rgba(0, 0, 0, 0.08)",
        height: 280,
        marginTop: 20,
        alignSelf: "stretch",
    },
});

export default styles;