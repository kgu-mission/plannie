import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Color, FontFamily, FontSize } from "../GlobalStyles";

const MonthList = () => {
    return (
        <View style={styles.monthList}>
            <View style={[styles.bg, styles.bgPosition]} />
            <View style={styles.mlTitle}>
                <Text style={styles.text}>이 달의 일정</Text>
            </View>
            <View style={[styles.mlContent, styles.bgPosition]}>
                <View style={styles.mlDate}>
                    <Text style={[styles.sat, styles.satTypo]}>0601 Sat</Text>
                    <View style={styles.mlDateList}>
                        <View style={styles.listFlexBox}>
                            <Text style={[styles.text1, styles.satTypo]}>일정 1</Text>
                            <Text style={styles.text2}>13:00 - 15:00</Text>
                        </View>
                        <View style={[styles.mlList1, styles.listFlexBox]}>
                            <Text style={[styles.text1, styles.satTypo]}>일정 2</Text>
                            <Text style={styles.text2}>16:00 - 18:00</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.mlDate1}>
                    <Text style={[styles.sat, styles.satTypo]}>0603 Mon</Text>
                    <View style={styles.mlDateList}>
                        <View style={styles.listFlexBox}>
                            <Text style={[styles.text1, styles.satTypo]}>일정 1</Text>
                            <Text style={styles.text2}>09:00 - 10:00</Text>
                        </View>
                        <View style={[styles.mlList1, styles.listFlexBox]}>
                            <Text style={[styles.text1, styles.satTypo]}>일정 2</Text>
                            <Text style={styles.text2}>18:00 - 20:00</Text>
                        </View>
                        <View style={[styles.mlList1, styles.listFlexBox]}>
                            <Text style={[styles.text1, styles.satTypo]}>일정 3</Text>
                            <Text style={styles.text2}>22:00 - 24:00</Text>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    bgPosition: {
        left: "50%",
        position: "absolute",
    },
    satTypo: {
        color: Color.colorDimgray,
        fontFamily: FontFamily.interMedium,
        fontWeight: "500",
        textAlign: "left",
    },
    listFlexBox: {
        justifyContent: "space-between",
        alignSelf: "stretch",
        alignItems: "center",
        flexDirection: "row",
    },
    bg: {
        marginLeft: 196.5,
        top: 52,
        borderTopLeftRadius: 37,
        borderTopRightRadius: 37,
        backgroundColor: Color.backgroundDefaultDefault,
        width: 393,
        height: 800,
        transform: [
            {
                rotate: "-180deg",
            },
        ],
    },
    text: {
        fontSize: FontSize.size_5xl,
        fontWeight: "600",
        fontFamily: FontFamily.bodyStrong,
        color: Color.colorLightskyblue_100,
        textAlign: "left",
    },
    mlTitle: {
        marginLeft: -166.5,
        top: 80,
        alignItems: "center",
        flexDirection: "row",
        left: "50%",
        position: "absolute",
    },
    sat: {
        fontSize: FontSize.title3Regular_size,
    },
    text1: {
        fontSize: FontSize.m3BodyLarge_size,
    },
    text2: {
        fontSize: FontSize.size_mini,
        fontFamily: FontFamily.bodySmall,
        color: Color.colorDarkgray_100,
        textAlign: "left",
    },
    mlList1: {
        marginTop: 7,
    },
    mlDateList: {
        marginTop: 7,
        alignSelf: "stretch",
    },
    mlDate: {
        alignSelf: "stretch",
    },
    mlDate1: {
        marginTop: 20,
        alignSelf: "stretch",
    },
    mlContent: {
        marginLeft: -156.5,
        top: 130,
        width: 313,
    },
    monthList: {
        backgroundColor: Color.colorAliceblue,
        flex: 1,
        width: "100%",
        height: 852,
        overflow: "hidden",
    },
});

export default MonthList;
