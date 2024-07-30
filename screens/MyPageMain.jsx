import * as React from "react";
import { Image } from "expo-image";
import {Text, TouchableOpacity, View} from "react-native";
import styles from '../Styles/MyPageMainStyles';
import BottomNav from "../nav/BottomNav";

const MyPageMain = () => {
    return (
        <View style={styles.mypageMain}>
            <View style={[styles.topNav, styles.topNavPosition]}>
                <View style={[styles.topNavContentFrame, styles.contentFlexBox]}>
                    <Image
                        style={styles.arrowIconLayout}
                        contentFit="cover"
                        source={require("../assets/arrow_back.png")}
                    />
                    <Text style={styles.plannie}>Plannie</Text>
                </View>
            </View>
            <View style={[styles.mpWithdrawalButton, styles.buttonLayout]}>
                <Text style={[styles.text, styles.textTypo]}>탈퇴하기</Text>
            </View>
            <View style={[styles.mpLogoutButton, styles.buttonLayout]}>
                <Text style={[styles.text1, styles.textTypo]}>로그아웃</Text>
            </View>
            <View style={styles.mpContentFrame}>
                <View style={[styles.mpContent, styles.contentFlexBox]}>
                    <Text style={[styles.text1, styles.textTypo]}>공지사항</Text>
                    <Image
                        style={styles.arrowIconLayout}
                        contentFit="cover"
                        source={require("../assets/arrow_front.png")}
                    />
                </View>
                <View style={[styles.mpContent1, styles.contentFlexBox]}>
                    <Text style={[styles.text1, styles.textTypo]}>알림설정</Text>
                    <Image
                        style={styles.arrowIconLayout}
                        contentFit="cover"
                        source={require("../assets/arrow_front.png")}
                    />
                </View>
                <View style={[styles.mpContent1, styles.contentFlexBox]}>
                    <Text style={[styles.text1, styles.textTypo]}>문의하기</Text>
                    <Image
                        style={styles.arrowIconLayout}
                        contentFit="cover"
                        source={require("../assets/arrow_front.png")}
                    />
                </View>
                <View style={[styles.mpContent1, styles.contentFlexBox]}>
                    <Text style={[styles.text1, styles.textTypo]}>버전정보</Text>
                    <Text style={[styles.text6, styles.textTypo]}>1.0</Text>
                </View>
            </View>
            <View style={styles.mpBanner}>
                <Text style={[styles.text1, styles.textTypo]}>배너광고</Text>
            </View>
            <View style={[styles.mpProfileBox, styles.topNavPosition]}>
                <View style={styles.mpProfileWhitebox}>
                    <View style={[styles.mpPhotoNicname, styles.contentFlexBox2]}>
                        <Image
                            style={styles.mpPhotoIcon}
                            contentFit="cover"
                            // source={require("../assets/mp-photo.png")}
                        />
                        <View style={[styles.mpNickContent, styles.contentFlexBox2]}>
                            <Text style={[styles.text8, styles.titleTypo]}>닉네임</Text>
                            <Image
                                style={[styles.arrowRightIcon3, styles.arrowIconLayout]}
                                contentFit="cover"
                                source={require("../assets/arrow_front.png")}
                            />
                        </View>
                    </View>
                    <View style={[styles.mpProfileButtonContent, styles.contentFlexBox2]}>
                        <View style={styles.profileFlexBox}>
                            <Text style={[styles.text9, styles.textTypo1]}>프로필 편집</Text>
                        </View>
                        <View style={[styles.mpProfileModify, styles.profileFlexBox]}>
                            <Text style={[styles.text9, styles.textTypo1]}>정보 수정</Text>
                        </View>
                    </View>
                </View>
            </View>
            <BottomNav/>
            {/*<View style={[styles.bottomNav, styles.tooltipBorder]}>*/}
            {/*    <View style={styles.contentFlexBox2}>*/}
            {/*        <View style={[styles.tooltip, styles.tooltipBorder]}>*/}
            {/*            <Image*/}
            {/*                style={[styles.beakIcon, styles.beakIconPosition]}*/}
            {/*                contentFit="cover"*/}
            {/*                // source={require("../assets/beak1.png")}*/}
            {/*            />*/}
            {/*            <Image*/}
            {/*                style={[styles.beakStrokeIcon, styles.beakIconPosition]}*/}
            {/*                contentFit="cover"*/}
            {/*                // source={require("../assets/beak-stroke1.png")}*/}
            {/*            />*/}
            {/*            <Text style={[styles.title, styles.titleTypo]} />*/}
            {/*            <Text*/}
            {/*                style={[styles.bodyText, styles.textTypo1]}*/}
            {/*            >{`          `}</Text>*/}
            {/*        </View>*/}
            {/*        <Image*/}
            {/*            style={styles.iconLayout}*/}
            {/*            contentFit="cover"*/}
            {/*            source={require("../assets/Home.png")}*/}
            {/*        />*/}
            {/*        <Image*/}
            {/*            style={[styles.userIcon, styles.iconLayout]}*/}
            {/*            contentFit="cover"*/}
            {/*            source={require("../assets/User.png")}*/}
            {/*        />*/}
            {/*    </View>*/}
            {/*</View>*/}

        </View>
    );
};

export default MyPageMain;
