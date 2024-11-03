import * as React from "react";
import { Image } from "expo-image";
import {Text, TouchableOpacity, View} from "react-native";
import styles from '../Styles/MyPageMainStyles';
import BottomNav from "../nav/BottomNav";
import MyPageTopNav from "../nav/MyPageTopNav";
import {useNavigation} from "@react-navigation/native";

const MyPageMain = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.mypageMain}>
            <MyPageTopNav/>
            <View style={styles.mpProfileBox}>
                <View style={styles.mpProfileWhitebox}>
                    <View style={styles.mpPhotoNicname}>
                        <Image
                            style={styles.mpPhotoIcon}
                            contentFit="cover"
                            source={require("../assets/MP_Photo.png")}
                        />
                        <View style={styles.mpNickContent}>
                            <Text style={styles.titleTypo}>닉네임</Text>
                            <TouchableOpacity
                                onPress={() => navigation.navigate('MyPageProfile')}
                                contentFit="cover">
                                <Image
                                    style={styles.arrowIconLayout}
                                    contentFit="cover"
                                    source={require("../assets/arrow_front.png")}
                                />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.mpProfileButtonContent}>
                        <TouchableOpacity
                            onPress={() => navigation.navigate('MyPageProfile')}
                            contentFit="cover">
                            <View style={styles.profileFlexBox}>
                                <Text style={styles.mpProfileButton}>프로필 편집</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => navigation.navigate('ProfileEdit')}
                            contentFit="cover">
                            <View style={[styles.mpProfileModify, styles.profileFlexBox]}>
                                <Text style={styles.mpProfileButton}>정보 수정</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            <View style={styles.mpBanner}>
            </View>
            <View style={styles.mpContentFrame}>
                <View style={[styles.mpContent, styles.contentFlexBox]}>
                    <Text style={styles.textTypo}>공지사항</Text>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('MyPageNotice')}
                        contentFit="cover">
                    <Image
                        style={styles.arrowIconLayout}
                        contentFit="cover"
                        source={require("../assets/arrow_front.png")}
                    />
                    </TouchableOpacity>
                </View>
                <View style={[styles.mpContent, styles.contentFlexBox]}>
                    <Text style={styles.textTypo}>알림설정</Text>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('MyPageAlarm')}
                        contentFit="cover">
                    <Image
                        style={styles.arrowIconLayout}
                        contentFit="cover"
                        source={require("../assets/arrow_front.png")}
                    />
                    </TouchableOpacity>
                </View>
                <View style={[styles.mpContent, styles.contentFlexBox]}>
                    <Text style={styles.textTypo}>문의하기</Text>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('MyPageEnquire')}
                        contentFit="cover">
                    <Image
                        style={styles.arrowIconLayout}
                        contentFit="cover"
                        source={require("../assets/arrow_front.png")}
                    />
                    </TouchableOpacity>
                </View>
                <View style={[styles.mpContent, styles.contentFlexBox]}>
                    <Text style={styles.textTypo}>버전정보</Text>
                    <Text style={[styles.version, styles.textTypo]}>1.0</Text>
                </View>
            </View>
            <View style={[styles.mpLogoutButton, styles.buttonLayout]}>
                <Text style={styles.textTypo}>로그아웃</Text>
            </View>
            <TouchableOpacity
            onPress={() => navigation.navigate('DeleteAccount')}
            style={[styles.mpWithdrawalButton, styles.buttonLayout]} > 
            <Text style={[styles.text, styles.textTypo]}>탈퇴하기</Text>
            </TouchableOpacity>
            
            <BottomNav/>
        </View>
    );
};

export default MyPageMain;
