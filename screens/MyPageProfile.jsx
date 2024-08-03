import * as React from "react";
import { Image } from "expo-image";
import { Text, View } from "react-native";
import {useNavigation} from "@react-navigation/native";
import styles from "../Styles/MyPageProfileStyles";
import MyPageTopNav from "../nav/MyPageTopNav";
import BottomNav from "../nav/BottomNav";

const MyPageProfile = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.mypageProfile}>
            <MyPageTopNav/>
            {/*<View style={[styles.topNav, styles.textPosition1]}>*/}
            {/*    <View style={[styles.topNavContentFrame, styles.mppFNicknameFlexBox]}>*/}
            {/*        <Image*/}
            {/*            style={styles.mppPFrameIcon}*/}
            {/*            contentFit="cover"*/}
            {/*            source={require("../assets/arrow_back.png")}*/}
            {/*        />*/}
            {/*        <Text style={styles.plannie}>Plannie</Text>*/}
            {/*    </View>*/}
            {/*</View>*/}
            <View style={styles.mppContentBox}>
                <View style={styles.mppContent}>
                    <View style={styles.mppGNickname}>
                        <Text style={[styles.text, styles.textPosition1]}>닉네임</Text>
                        <View style={[styles.mppLine, styles.mppPosition]} />
                        <View style={[styles.mppFNickname, styles.mppFNicknameFlexBox]}>
                            <Text style={styles.textTypo}>미션</Text>
                            <View style={styles.nav}>
                                <Image
                                    style={styles.mppInitializationIcon}
                                    contentFit="cover"
                                    // source={require("../assets/mpp-initialization.png")}
                                />
                                <Text style={[styles.mppNicknameNum, styles.bodyTextTypo]}>
                                    2/20
                                </Text>
                            </View>
                        </View>
                    </View>
                    <View style={[styles.mppGName, styles.mppSpaceBlock]}>
                        <Text style={[styles.text, styles.textPosition1]}>이름</Text>
                        <View style={[styles.mppLine, styles.mppPosition]} />
                        <Text style={[styles.text3, styles.textTypo]}>문박박장</Text>
                    </View>
                    <View style={[styles.mppGName, styles.mppSpaceBlock]}>
                        <Text style={[styles.text, styles.textPosition1]}>휴대폰</Text>
                        <View style={[styles.mppLine, styles.mppPosition]} />
                        <Text style={[styles.text3, styles.textTypo]}>010-1234-5678</Text>
                    </View>
                    <View style={[styles.mppGName, styles.mppSpaceBlock]}>
                        <Text style={[styles.text, styles.textPosition1]}>이메일</Text>
                        <View style={[styles.mppLine, styles.mppPosition]} />
                        <Text style={[styles.text3, styles.textTypo]}>
                            missionkinggu@gmail.com
                        </Text>
                    </View>
                    <View style={[styles.mppGBirth, styles.mppSpaceBlock]}>
                        <Image
                            style={styles.arrowRightIcon}
                            contentFit="cover"
                            source={require("../assets/arrow_front.png")}
                        />
                        <Text style={[styles.text7, styles.textPosition1]}>생일</Text>
                        <View style={[styles.mppLineShort, styles.mppPosition]} />
                        <Text style={[styles.text8, styles.textTypo]}>2002/02/01</Text>
                    </View>
                    <View style={[styles.mppGBirth, styles.mppSpaceBlock]}>
                        <Image
                            style={styles.arrowRightIcon}
                            contentFit="cover"
                            source={require("../assets/arrow_front.png")}
                        />
                        <Text style={[styles.text7, styles.textPosition1]}>주소</Text>
                        <View style={[styles.mppLineShort, styles.mppPosition]} />
                        <Text style={[styles.text8, styles.textTypo]}>
                            대한민국, 수원시
                        </Text>
                    </View>
                    <View style={[styles.mppGBirth, styles.mppSpaceBlock]}>
                        <Image
                            style={styles.arrowRightIcon}
                            contentFit="cover"
                            source={require("../assets/arrow_front.png")}
                        />
                        <Text style={[styles.text7, styles.textPosition1]}>성별</Text>
                        <View style={[styles.mppLineShort, styles.mppPosition]} />
                        <Text style={[styles.text8, styles.textTypo]}>미입력</Text>
                    </View>
                </View>
            </View>
            <View style={styles.mppPhoto}>
                <Image
                    style={styles.mppPFrameIcon}
                    contentFit="cover"
                    // source={require("../assets/mpp-p-frame.png")}
                />
            </View>
            {/*<View style={[styles.bottomNav, styles.tooltipBorder]}>*/}
            {/*    <View style={styles.nav}>*/}
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
            {/*            <Text style={[styles.title, styles.titleFlexBox]} />*/}
            {/*            <Text*/}
            {/*                style={[styles.bodyText, styles.bodyTextTypo]}*/}
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
            <BottomNav/>
        </View>
    );
};

export default MyPageProfile;
