import * as React from "react";
import { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, Alert } from "react-native";
import { Image } from "expo-image";
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import styles from '../Styles/MyPageMainStyles';
import BottomNav from "../nav/BottomNav";
import MyPageTopNav from "../nav/MyPageTopNav";
import { useNavigation } from "@react-navigation/native";

const MyPageMain = () => {
    const navigation = useNavigation();
    const [nickname, setNickname] = useState('');

    // Fetch nickname from server using token
    useEffect(() => {
        const fetchNickname = async () => {
            try {
                const token = await AsyncStorage.getItem('userToken');
                if (!token) {
                    Alert.alert("로그인 정보가 없습니다.", "다시 로그인 해주세요.");
                    navigation.navigate('Login');
                    return;
                }

                const response = await axios.get('http://localhost:3000/users/profile', {
                    headers: { Authorization: `Bearer ${token}` }
                });

                setNickname(response.data.nickname); // Assuming the server returns { nickname: 'your_nickname' }
            } catch (error) {
                console.error("Error fetching nickname:", error);
                Alert.alert("오류", "사용자 정보를 가져오는 데 실패했습니다.");
            }
        };

        fetchNickname();
    }, []);

    // Handle logout by clearing the token
    const handleLogout = async () => {
        try {
            await AsyncStorage.removeItem('userToken');
            Alert.alert("로그아웃 되었습니다.");
            navigation.navigate('Login');
        } catch (error) {
            console.error("Logout error:", error);
            Alert.alert("오류", "로그아웃 중 문제가 발생했습니다.");
        }
    };

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
                            <Text style={styles.titleTypo}>{nickname || '닉네임 불러오는 중...'}</Text>
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
                            onPress={() => navigation.navigate('MyPageProfile')}
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
            <TouchableOpacity style={[styles.mpLogoutButton, styles.buttonLayout]} onPress={handleLogout}>
                <Text style={styles.textTypo}>로그아웃</Text>
            </TouchableOpacity>
            <View style={[styles.mpWithdrawalButton, styles.buttonLayout]}>
                <Text style={[styles.text, styles.textTypo]}>탈퇴하기</Text>
            </View>
            <BottomNav/>
        </View>
    );
};

export default MyPageMain;
