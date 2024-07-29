import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { FontFamily, FontSize, Color } from "../GlobalStyles";

const ScheduleAdd = () => {
    return (
        <View style={[styles.scheduleAdd, styles.schFlexBox]}>
            <View style={styles.schContent}>
                <View style={styles.schFrame}>
                    <Text style={[styles.schDate, styles.textTypo]}>6월 26일 수</Text>
                    <View style={styles.schList}>
                        <View style={[styles.schList1, styles.schFlexBox]}>
                            <Image
                                style={styles.iconLayout}
                                contentFit="cover"
                                // source={require("../assets/check-box.png")}
                            />
                            <Text style={[styles.text, styles.textTypo]}>
                                미적분 2단원 기출
                            </Text>
                        </View>
                        <View style={[styles.schList11, styles.schFlexBox]}>
                            <Image
                                style={[styles.squareIcon, styles.iconLayout]}
                                contentFit="cover"
                                // source={require("../assets/square.png")}
                            />
                            <Text style={[styles.text, styles.textTypo]}>
                                물리 3단원 개념 정리
                            </Text>
                        </View>
                    </View>
                </View>
                <Image
                    style={styles.schPlusIcon}
                    contentFit="cover"
                    // source={require("../assets/sch-plus.png")}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    schFlexBox: {
        alignItems: "center",
        flexDirection: "row",
    },
    textTypo: {
        textAlign: "left",
        fontFamily: FontFamily.bodyStrong,
        fontWeight: "600",
        fontSize: FontSize.size_4xl_9,
    },
    iconLayout: {
        height: 40,
        width: 40,
    },
    schDate: {
        color: Color.colorLightskyblue_100,
        alignSelf: "stretch",
    },
    text: {
        color: Color.colorDarkslategray_200,
        marginLeft: 20.9,
    },
    schList1: {
        alignSelf: "stretch",
    },
    squareIcon: {
        overflow: "hidden",
    },
    schList11: {
        marginTop: 25.9,
        alignSelf: "stretch",
    },
    schList: {
        marginTop: 34.9,
        alignSelf: "stretch",
    },
    schFrame: {
        paddingHorizontal: 5,
        paddingVertical: 0,
        alignSelf: "stretch",
    },
    schPlusIcon: {
        width: 48,
        height: 48,
        overflow: "hidden",
    },
    schContent: {
        width: 339,
        height: 499,
        alignItems: "flex-end",
        justifyContent: "space-between",
    },
    scheduleAdd: {
        borderRadius: 41,
        backgroundColor: Color.backgroundDefaultDefault,
        width: 393,
        height: 557,
        justifyContent: "center",
        paddingHorizontal: 24,
        paddingVertical: 22,
    },
});

export default ScheduleAdd;
