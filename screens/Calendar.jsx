import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, Modal, StyleSheet, TouchableWithoutFeedback, Alert, ScrollView, ActivityIndicator } from "react-native";
import { Image } from "expo-image";
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import styles from '../Styles/CalendarStyles';
import BottomNav from "../nav/BottomNav";
import ScheduleAdd from "./ScheduleAdd";
import { useNavigation } from "@react-navigation/native";

const Calendar = () => {
    const navigation = useNavigation();
    const [currentDate, setCurrentDate] = useState(new Date());
    const [selectedDate, setSelectedDate] = useState(null);
    const [modalVisible, setModalVisible] = useState(false);
    const [schedules, setSchedules] = useState([]);
    const [loading, setLoading] = useState(false);

    // 토큰 검사 함수
    useEffect(() => {
        const checkToken = async () => {
            try {
                const token = await AsyncStorage.getItem('userToken');
                if (!token) {
                    Alert.alert("Session Expired", "Please log in again.");
                    navigation.navigate('Login');
                }
            } catch (error) {
                console.error("Error retrieving token:", error);
            }
        };
        checkToken();
    }, []);

    // Monthly schedule fetching
    useEffect(() => {
        fetchMonthSchedules(currentDate.getFullYear(), currentDate.getMonth() + 1);
    }, [currentDate]);

    const fetchMonthSchedules = async (year, month) => {
        setLoading(true);
        try {
            const token = await AsyncStorage.getItem('userToken');
            if (!token) {
                Alert.alert("Authentication required", "Please log in.");
                return;
            }
            const response = await axios.get(`http://localhost:3000/planner/monthly`, {
                headers: { Authorization: `Bearer ${token}` },
                params: { year, month }
            });
            setSchedules(Array.isArray(response.data) ? response.data : []);
        } catch (error) {
            console.error("Failed to fetch schedules:", error);
            setSchedules([]);
        } finally {
            setLoading(false);
        }
    };

    const handleDatePress = (date) => {
        const utcDate = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()));
        setSelectedDate(utcDate);
        setModalVisible(true);
    };


    // 월 이동 이벤트
    const handlePreviousMonth = () => setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
    const handleNextMonth = () => setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));

    // 달력 렌더링
    const renderDays = () => {
        const firstDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
        const lastDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0);
        const daysInMonth = [];

        for (let i = 0; i < firstDayOfMonth.getDay(); i++) daysInMonth.push(<View style={styles.day} key={`empty-${i}`} />);
        for (let i = 1; i <= lastDayOfMonth.getDate(); i++) {
            const date = new Date(currentDate.getFullYear(), currentDate.getMonth(), i);
            const isScheduled = schedules.some(schedule => new Date(schedule.start_day).getDate() === i);
            daysInMonth.push(
                <TouchableOpacity
                    style={[styles.day, isScheduled ? styles.scheduledDay : null]}
                    key={i}
                    onPress={() => handleDatePress(date)}
                >
                    <Text style={styles.date1}>{i}</Text>
                </TouchableOpacity>
            );
        }
        while (daysInMonth.length % 7 !== 0) daysInMonth.push(<View style={styles.day} key={`empty-end-${daysInMonth.length}`} />);

        const weeks = [];
        for (let i = 0; i < daysInMonth.length; i += 7) {
            weeks.push(
                <View style={styles.weekSpaceBlock} key={`week-${i}`}>
                    {daysInMonth.slice(i, i + 7)}
                </View>
            );
        }

        return weeks;
    };

    return (
        <View style={styles.calendar}>
            <View style={[styles.calPlannie, styles.calFlexBox]}>
                <Text style={styles.calLogo}>Plannie</Text>
                <Image style={styles.calSearch} contentFit="cover" source={require("../assets/search.png")} />
            </View>
            <View style={styles.calendar_bg}></View>
            <View style={styles.calCalender}>
                <View style={[styles.calHeader, styles.calFlexBox]}>
                    <View style={[styles.calHeaderFrame, styles.calFlexBox]}>
                        <TouchableOpacity onPress={handlePreviousMonth}>
                            <Image style={styles.arrowBackIcon} contentFit="cover" source={require("../assets/arrow_back.png")} />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.monthAndYear} onPress={() => navigation.navigate('MonthList')}>
                            <Text style={styles.monthYyyy}>{currentDate.toLocaleString('default', { month: 'long' })} {currentDate.getFullYear()}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={handleNextMonth}>
                            <Image style={styles.arrowBackIcon} contentFit="cover" source={require("../assets/arrow_front.png")} />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={[styles.dateHeader, styles.weekSpaceBlock]}>
                    {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day, index) => (
                        <Text style={styles.sun} key={index}>{day}</Text>
                    ))}
                </View>
                <View style={styles.calendar1}>
                    {renderDays()}
                </View>
            </View>
            <BottomNav />

            <Modal animationType="slide" transparent={true} visible={modalVisible} onRequestClose={() => setModalVisible(!modalVisible)}>
                <TouchableWithoutFeedback onPress={() => setModalVisible(false)}>
                    <View style={modalStyles.modalBackground}>
                        <TouchableWithoutFeedback>
                            <View>
                                <ScheduleAdd selectedDate={selectedDate} />
                            </View>
                        </TouchableWithoutFeedback>
                    </View>
                </TouchableWithoutFeedback>
            </Modal>
            <MonthlyScheduleList schedules={schedules} />
        </View>
    );
};
// Component to display monthly schedules
const MonthlyScheduleList = ({ schedules }) => {
    if (schedules.length === 0) return <Text style={styles1.noScheduleText}>No schedules for this month.</Text>;

    return (
        <ScrollView style={styles1.scheduleListContainer}>
            {schedules.map((schedule, index) => (
                <View key={index} style={styles1.scheduleItem}>
                    <Text style={styles1.scheduleDate}>{schedule.start_day}</Text>
                    <Text style={styles1.scheduleTime}>{schedule.start_time} - {schedule.end_time}</Text>
                    <Text style={styles1.scheduleTitle}>{schedule.title}</Text>
                </View>
            ))}
        </ScrollView>
    );
};

// Styles
const styles1 = StyleSheet.create({
    container: {
        flex: 1,
    },
    calendarContainer: {
        marginBottom: 20,
    },
    scheduleListContainer: {
        paddingHorizontal: 20,
        maxHeight: 200,
    },
    scheduleItem: {
        marginBottom: 15,
        padding: 10,
        borderRadius: 5,
        backgroundColor: '#f9f9f9',
    },
    scheduleDate: {
        fontWeight: 'bold',
    },
    scheduleTime: {
        fontStyle: 'italic',
    },
    scheduleTitle: {
        marginTop: 5,
    },
    noScheduleText: {
        textAlign: 'center',
        marginTop: 10,
        color: '#888',
    },
});
const modalStyles = StyleSheet.create({
    modalBackground: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
    },
});

export default Calendar;
