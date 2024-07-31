import * as React from "react";
import { Image } from "expo-image";
import {StyleSheet, View, Text, TouchableOpacity, ScrollView} from "react-native";
import { FontFamily, FontSize, Color } from "../GlobalStyles";

const ScheduleCreate = ({ selectedDate, closeModal }) => {
    const formattedDate = selectedDate ? new Date(selectedDate).toLocaleDateString('ko-KR', { year: 'numeric', month: 'long', day: 'numeric', weekday: 'short' }) : '';

    return (
        <View style={styles.scheduleCreate}>
            <View style={[styles.ncXCheck, styles.frameFlexBox]}>
                <TouchableOpacity onPress={closeModal}>
                    <Image
                        style={styles.ncXIcon}
                        contentFit="cover"
                        source={require("../assets/nc_x.png")}
                    />
                </TouchableOpacity>
                <Image
                    style={styles.ncCheckIcon}
                    contentFit="cover"
                    source={require("../assets/nc_check.png")}
                />
            </View>
            <ScrollView style={styles.ncContent}>
                <Text style={styles.ncScheduleTitle}>일정 제목</Text>
                <View style={styles.frameSpaceBlock}>
                    <View style={[styles.scDateFrame, styles.frameFlexBox]}>
                        <Text style={[styles.scDateText, styles.dateTypo]}>날짜</Text>
                        <Text style={[styles.scDate, styles.dateTypo]}>
                            {formattedDate}
                        </Text>
                    </View>
                    <View style={[styles.scTimeFrame, styles.frameSpaceBlock]}>
                        <Text style={[styles.scDateText, styles.dateTypo]}>시간</Text>
                        <Text style={[styles.scDate, styles.dateTypo]}>
                            13 : 00 - 16 : 00
                        </Text>
                    </View>
                    <View style={[styles.scTimeFrame, styles.frameSpaceBlock]}>
                        <Text style={[styles.scDateText, styles.dateTypo]}>알림 설정</Text>
                        <View style={[styles.scTimeButtonFrame, styles.frameFlexBox]}>
                            <View style={[styles.scNoti, styles.scNotiFlexBox]}>
                                <View style={[styles.stateLayer, styles.scNotiFlexBox]}>
                                    <Text style={styles.labelText}>안 함</Text>
                                </View>
                            </View>
                            <Image
                                style={styles.scNotiButtonIcon}
                                contentFit="cover"
                                source={require("../assets/sc_noti_button.png")}
                            />
                        </View>
                    </View>
                    <View style={[styles.scTimeFrame, styles.frameSpaceBlock]}>
                        <Text
                            style={[styles.scDateText, styles.dateTypo]}
                        >{`반복 여부 `}</Text>
                        <View style={[styles.scTimeButtonFrame, styles.frameFlexBox]}>
                            <View style={[styles.scNoti, styles.scNotiFlexBox]}>
                                <View style={[styles.stateLayer, styles.scNotiFlexBox]}>
                                    <Text style={styles.labelText}>안 함</Text>
                                </View>
                            </View>
                            <Image
                                style={styles.scNotiButtonIcon}
                                contentFit="cover"
                                source={require("../assets/sc_noti_button.png")}
                            />
                        </View>
                    </View>
                    <Text style={[styles.scUrlText, styles.dateTypo]}>연관 사항 url</Text>
                    <View style={[styles.scMemoFrame, styles.frameSpaceBlock]}>
                        <Text style={[styles.scEpText, styles.dateTypo]}>메모</Text>
                        <View style={styles.scMemo} />
                    </View>
                </View>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    frameFlexBox: {
        justifyContent: "space-between",
        flexDirection: "row",
        alignItems: "center",
    },
    dateTypo: {
        fontFamily: FontFamily.notoSansHebrewRegular,
        fontSize: FontSize.size_mid_7,
        textAlign: "left",
    },
    frameSpaceBlock: {
        marginTop: 17.7,
        alignSelf: "stretch",
    },
    scNotiFlexBox: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },
    ncXIcon: {
        height: 70,
        width: 70,
    },
    ncCheckIcon: {
        height: 35,
        overflow: "hidden",
        width: 31,
    },
    ncXCheck: {
        width: 336,
    },
    ncScheduleTitle: {
        fontSize: 27,
        fontWeight: "600",
        fontFamily: FontFamily.bodyStrong,
        textAlign: "left",
        color: Color.colorDarkslategray_100,
        alignSelf: "stretch",
    },
    scDateText: {
        color: Color.colorDarkslategray_100,
        fontSize: FontSize.size_mid_7,
    },
    scDate: {
        color: Color.labelsPrimary,
    },
    scDateFrame: {
        alignSelf: "stretch",
    },
    scTimeFrame: {
        justifyContent: "space-between",
        flexDirection: "row",
        alignItems: "center",
    },
    labelText: {
        fontSize: FontSize.m3LabelLarge_size,
        letterSpacing: 0,
        lineHeight: 20,
        fontWeight: "500",
        fontFamily: FontFamily.m3LabelLarge,
        color: Color.schemesOnSurfaceVariant,
        textAlign: "center",
    },
    stateLayer: {
        justifyContent: "center",
    },
    scNoti: {
        borderRadius: 7,
        borderStyle: "solid",
        borderColor: Color.schemesOutline,
        borderWidth: 0.9,
        width: 78,
        height: 29,
        justifyContent: "center",
        overflow: "hidden",
    },
    scNotiButtonIcon: {
        width: 21,
        height: 21,
    },
    scTimeButtonFrame: {
        width: 102,
    },
    scUrlText: {
        marginTop: 17.7,
        alignSelf: "stretch",
        color: Color.colorDarkslategray_100,
        fontSize: FontSize.size_mid_7,
    },
    scEpText: {
        color: Color.colorDarkslategray_100,
        fontSize: FontSize.size_mid_7,
        alignSelf: "stretch",
    },
    scMemo: {
        borderRadius: 9,
        backgroundColor: "rgba(0, 0, 0, 0.08)",
        height: 250,
        marginTop: 4.4,
        alignSelf: "stretch",
    },
    scMemoFrame: {
        justifyContent: "center",
    },
    ncContent: {
        width: 306,
        height: 650,
        marginTop: 8.9,
    },
    scheduleCreate: {
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        backgroundColor: Color.backgroundDefaultDefault,
        width: '100%',
        paddingHorizontal: 24,
        paddingVertical: 18,
        alignItems: "center",
    },
});

export default ScheduleCreate;
