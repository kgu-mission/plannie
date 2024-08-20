import * as React from "react";
import { Image } from "expo-image";
import { Text, View } from "react-native";
import styles from "../Styles/MyPageEnquireStyles";
import MyPageTopNav from "../nav/MyPageTopNav";
import BottomNav from "../nav/BottomNav";

const MyPageEnquire = () => {
    return (
        <View style={styles.mypageEnquire}>
            <MyPageTopNav/>
            <Text style={[styles.text4, styles.textTypo1]}>문의하기</Text>
            <View style={styles.mpeContent}>
                <View style={styles.mpeSpaceBlock}>
                    <View>
                        <Text style={[styles.text, styles.textLayout]}>제목</Text>
                    </View>
                </View>
                <View style={[styles.mpeNoticeBox, styles.mpeSpaceBlock]}>
                    <View>
                        <Text style={[styles.text1, styles.textTypo]}>
                            문의할 내용을 작성해주세요
                        </Text>
                    </View>
                </View>
                <Text
                    style={[styles.text2, styles.textTypo]}
                >{` • 문의하신 사항은 관리자 연락처로 전송됩니다.
 • 평일 09시~11시, 13~17시에 이메일로 답변드립니다.`}</Text>
                <View style={styles.mpeButton}>
                    <Text style={styles.text3}>문의하기</Text>
                </View>
            </View>
            <BottomNav/>
        </View>
    );
};


export default MyPageEnquire;
