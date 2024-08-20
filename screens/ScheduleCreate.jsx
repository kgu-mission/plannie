import * as React from "react";
import { Image } from "expo-image";
import {View, Text, TouchableOpacity, ScrollView} from "react-native";
import styles from "../Styles/ScheduleCreateStyles";

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
                        >{`반복 여부`}</Text>
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


export default ScheduleCreate;
