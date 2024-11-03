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

    const formattedDate = selectedDate ? selectedDate.toISOString().split('T')[0] : '';
    const apiDate = selectedDate ? new Date(selectedDate).toISOString().split('T')[0].replace(/-/g, '.') : '';

    React.useEffect(() => {
        const fetchSchedules = async () => {
            if (!apiDate) return;

            setLoading(true);
            try {
                const token = await AsyncStorage.getItem('userToken');
                const response = await axios.get(`http://localhost:3000/planner/date/?date=${apiDate}`, {
                    headers: { Authorization: `Bearer ${token}` }
                });

                console.log("Schedules fetched:", response.data);
                setSchedules(Array.isArray(response.data) ? response.data : []);
            } catch (error) {
                if (error.response && error.response.status === 404) {
                    setSchedules([]);
                    Alert.alert("알림", "해당 날짜에 일정이 없습니다.");
                } else {
                    console.error("일정 가져오기 오류:", error);
                    Alert.alert("오류", "일정을 불러오는 데 실패했습니다.");
                }
            } finally {
                setLoading(false);
            }
        };

        fetchSchedules();
    }, [apiDate]);

    const toggleCheckbox = async (scheduleId, currentCheckBoxState) => {
        const token = await AsyncStorage.getItem('userToken');
        try {
            // 서버에 check_box 상태 업데이트 요청
            await axios.put(
                `http://localhost:3000/planner/${scheduleId}`,
                { check_box: !currentCheckBoxState },
                { headers: { Authorization: `Bearer ${token}` } }
            );

            // UI 업데이트: 체크박스 상태를 업데이트
            setSchedules(prevSchedules =>
                prevSchedules.map(schedule =>
                    schedule.id === scheduleId ? { ...schedule, check_box: !currentCheckBoxState } : schedule
                )
            );
        } catch (error) {
            console.error("Failed to update schedule:", error);
            Alert.alert("오류", "일정 상태 업데이트에 실패했습니다.");
        }
    };

    return (
        <View style={styles.scheduleAdd}>
            <Text style={[styles.schDate, styles.textTypo]}>{formattedDate}</Text>

            <ScrollView style={styles.schList}>
                {loading ? (
                    <ActivityIndicator size="large" color="#0000ff" />
                ) : schedules.length > 0 ? (
                    schedules.map((schedule, index) => (
                        <View key={index} style={[styles.schList1, styles.schFlexBox]}>
                            <TouchableOpacity onPress={() => toggleCheckbox(schedule.id, schedule.check_box)}>
                                <Image
                                    style={styles.iconLayout}
                                    source={
                                        schedule.check_box
                                            ? require("../assets/nc_check.png") // 체크된 상태
                                            : require("../assets/Square.png")    // 체크되지 않은 상태
                                    }
                                />
                            </TouchableOpacity>
                            <Text style={[styles.text, styles.textTypo]}>
                                {schedule.title} - {schedule.start_time.slice(0, 5)} ~ {schedule.end_time.slice(0, 5)}
                            </Text>
                        </View>
                    ))
                ) : (
                    <Text style={styles.noScheduleText}>해당 날짜에 일정이 없습니다.</Text>
                )}
            </ScrollView>

            <TouchableOpacity
                style={styles.schPlusIcon}
                onPress={() => setModalVisible(true)}
            >
                <Image
                    style={styles.iconLayout}
                    source={require("../assets/sch_plus.png")}
                />
            </TouchableOpacity>

            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => setModalVisible(!modalVisible)}
            >
                <View style={styles.modalBackground}>
                    <ScheduleCreate selectedDate={selectedDate} closeModal={() => setModalVisible(false)} />
                </View>
            </Modal>
        </View>
    );
};

export default ScheduleAdd;
