import * as React from "react";
import { Image } from "expo-image";
import { Text, View } from "react-native";
import styles from "../Styles/MyPageAlarmStyles";
import {useNavigation} from "@react-navigation/native";
import MyPageTopNav from "../nav/MyPageTopNav";
import BottomNav from "../nav/BottomNav";

const MyPageAlarm = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.mypageAlarm}>
            <MyPageTopNav/>
            <Text style={[styles.text4, styles.text4Typo]}>알림설정</Text>
            <View style={[styles.mpaAlarmFrame4, styles.mpaFrameFlexBox]}>
                <Text style={styles.text}>알림 받기</Text>
                <Image
                    style={styles.toggleIcon}
                    contentFit="cover"
                    source={require("../assets/toggle_On.png")}
                />
            </View>
            <View style={styles.mpaLine} />
            <View style={[styles.mpaAlarmlistFrame, styles.mpaFrameLayout]}>
                <View style={[styles.mpaAlarmFrame, styles.mpaFrameFlexBox]}>
                    <Text style={styles.text}>일정 알림 받기</Text>
                    <Image
                        style={styles.toggleIcon}
                        contentFit="cover"
                        source={require("../assets/toggle_On.png")}
                    />
                </View>
                <View style={[styles.mpaAlarmFrame1, styles.mpaFrameFlexBox]}>
                    <Text style={styles.text}>공지 알림 받기</Text>
                    <Image
                        style={styles.toggleIcon}
                        contentFit="cover"
                        source={require("../assets/toggle_Off.png")}
                    />
                </View>
                <View style={[styles.mpaAlarmFrame1, styles.mpaFrameFlexBox]}>
                    <Text style={styles.text}>SMS 알림 받기</Text>
                    <Image
                        style={styles.toggleIcon}
                        contentFit="cover"
                        source={require("../assets/toggle_On.png")}
                    />
                </View>
                <View style={[styles.mpaAlarmFrame1, styles.mpaFrameFlexBox]}>
                    <Text style={styles.text}>이메일 알림 받기</Text>
                    <Image
                        style={styles.toggleIcon}
                        contentFit="cover"
                        source={require("../assets/toggle_On.png")}
                    />
                </View>
            </View>
            <BottomNav/>
        </View>
    );
};

export default MyPageAlarm;
