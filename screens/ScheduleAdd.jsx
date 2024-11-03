import * as React from "react";
import { Text, View, TouchableOpacity, Modal, ScrollView, ActivityIndicator, Alert, Image } from "react-native";
import styles from "../Styles/ScheduleAddStyles";
import ScheduleDetail from "./ScheduleDetail"; // 일정 세부 정보 컴포넌트
import ScheduleCreate from "./ScheduleCreate";  // 새로운 일정 생성 컴포넌트

const ScheduleAdd = ({ selectedDate, schedules, onClose }) => {
    const [detailModalVisible, setDetailModalVisible] = React.useState(false);
    const [createModalVisible, setCreateModalVisible] = React.useState(false); // 추가 버튼 모달 상태
    const [selectedSchedule, setSelectedSchedule] = React.useState(null); // 선택된 일정 저장

    const formattedDate = selectedDate
        ? new Date(selectedDate).toLocaleDateString('ko-KR', { year: 'numeric', month: 'long', day: 'numeric', weekday: 'short' })
        : '';

    // 일정 클릭 핸들러
    const handleScheduleClick = (schedule) => {
        setSelectedSchedule(schedule);
        setDetailModalVisible(true);
    };

    return (
        <View style={styles.scheduleAdd}>
            <Text style={[styles.schDate, styles.textTypo]}>{formattedDate}</Text>

            {/* 일정 리스트 */}
            <ScrollView style={styles.schList}>
                {schedules.length === 0 ? (
                    <Text>일정이 없습니다.</Text>
                ) : (
                    schedules.map((schedule, index) => (
                        <TouchableOpacity key={index} onPress={() => handleScheduleClick(schedule)}>
                            <View style={[styles.schList1, styles.schFlexBox]}>
                                <Text style={[styles.text, styles.textTypo]}>
                                    {schedule.title} - {schedule.time}
                                </Text>
                            </View>
                        </TouchableOpacity>
                    ))
                )}
            </ScrollView>

            {/* 추가 버튼 */}
            <TouchableOpacity
                style={styles.schPlusIcon}
                onPress={() => setCreateModalVisible(true)}
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
                visible={createModalVisible}
                onRequestClose={() => setCreateModalVisible(false)}
            >
                <View style={styles.modalBackground}>
                    <ScheduleCreate selectedDate={selectedDate} closeModal={() => setCreateModalVisible(false)} />
                </View>
            </Modal>

            {/* 일정 상세 모달 */}
            <Modal
                animationType="slide"
                transparent={true}
                visible={detailModalVisible}
                onRequestClose={() => setDetailModalVisible(false)}
            >
                <View style={styles.modalBackground}>
                    {selectedSchedule && (
                        <ScheduleDetail schedule={selectedSchedule} onClose={() => setDetailModalVisible(false)} />
                    )}
                </View>
            </Modal>
        </View>
    );
};

export default ScheduleAdd;
