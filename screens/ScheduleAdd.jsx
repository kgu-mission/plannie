import * as React from "react";
import { Text, View, TouchableOpacity, Image, Modal, ScrollView, ActivityIndicator, Alert } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from "../Styles/ScheduleAddStyles";
import ScheduleCreate from "./ScheduleCreate";
import axios from "axios";

const ScheduleAdd = ({ selectedDate }) => {
    const [modalVisible, setModalVisible] = React.useState(false);
    const [schedules, setSchedules] = React.useState([]);
    const [loading, setLoading] = React.useState(false);

    // 선택된 날짜를 한국어 포맷으로 표시
    const formattedDate = selectedDate
        ? new Date(selectedDate).toLocaleDateString('ko-KR', { year: 'numeric', month: 'long', day: 'numeric', weekday: 'short' })
        : '';

    // 서버에서 해당 날짜의 일정 데이터 가져오기
    React.useEffect(() => {
        const fetchSchedules = async () => {
            if (!selectedDate) return;

            setLoading(true);
            try {
                const token = await AsyncStorage.getItem('userToken');
                const response = await axios.get(`http://172.30.1.92:3000/planner?date=${selectedDate}`, {
                    headers: { Authorization: `Bearer ${token}` }
                });
                setSchedules(response.data.schedules); // 서버에서 받은 일정 리스트 설정
            } catch (error) {
                console.error("일정 가져오기 오류:", error);
                Alert.alert("오류", "일정을 불러오는 데 실패했습니다.");
            } finally {
                setLoading(false);
            }
        };

        fetchSchedules();
    }, [selectedDate]);

    return (
        <View style={styles.scheduleAdd}>
            <Text style={[styles.schDate, styles.textTypo]}>{formattedDate}</Text>

            {/* 일정 리스트 */}
            <ScrollView style={styles.schList}>
                {loading ? (
                    <ActivityIndicator size="large" color="#0000ff" />
                ) : (
                    schedules.map((schedule, index) => (
                        <View key={index} style={[styles.schList1, styles.schFlexBox]}>
                            <TouchableOpacity>
                                <Image
                                    style={styles.iconLayout}
                                    source={require("../assets/Square.png")}
                                />
                            </TouchableOpacity>
                            <Text style={[styles.text, styles.textTypo]}>
                                {schedule.title} - {schedule.start_time} ~ {schedule.end_time}
                            </Text>
                        </View>
                    ))
                )}
            </ScrollView>

            {/* 추가 버튼 */}
            <TouchableOpacity
                style={styles.schPlusIcon}
                onPress={() => setModalVisible(true)}
            >
                <Image
                    style={styles.iconLayout}
                    source={require("../assets/sch_plus.png")}
                />
            </TouchableOpacity>

            {/* 일정 생성 모달 */}
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    setModalVisible(!modalVisible);
                }}
            >
                <View style={styles.modalBackground}>
                    <ScheduleCreate selectedDate={selectedDate} closeModal={() => setModalVisible(false)} />
                </View>
            </Modal>
        </View>
    );
};

export default ScheduleAdd;
