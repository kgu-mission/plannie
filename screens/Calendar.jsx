import * as React from "react";
import { View, Text, TouchableOpacity, Modal, StyleSheet, TouchableWithoutFeedback } from "react-native";
import { Image } from "expo-image";
import styles from '../Styles/CalendarStyles';
import BottomNav from "../nav/BottomNav";
import ScheduleAdd from "./ScheduleAdd"; // ScheduleAdd 컴포넌트를 가져옵니다.

const Calendar = () => {
    const [currentDate, setCurrentDate] = React.useState(new Date());
    const [selectedDate, setSelectedDate] = React.useState(null);
    const [modalVisible, setModalVisible] = React.useState(false);

    const handlePreviousMonth = () => {
        setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
    };

    const handleNextMonth = () => {
        setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
    };

    const handleDatePress = (date) => {
        setSelectedDate(date);
        setModalVisible(true);
    };

    const renderDays = () => {
        const firstDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
        const lastDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0);
        const daysInMonth = [];

        // Fill the first week with empty days if the month doesn't start on Sunday
        for (let i = 0; i < firstDayOfMonth.getDay(); i++) {
            daysInMonth.push(
                <View style={styles.day} key={`empty-${i}`} />
            );
        }

        // Fill the days of the month
        for (let i = 1; i <= lastDayOfMonth.getDate(); i++) {
            const date = new Date(currentDate.getFullYear(), currentDate.getMonth(), i);
            daysInMonth.push(
                <TouchableOpacity style={styles.day} key={i} onPress={() => handleDatePress(date)}>
                    <Text style={styles.date1}>{i}</Text>
                </TouchableOpacity>
            );
        }

        // Add extra empty days to fill the last week
        while (daysInMonth.length % 7 !== 0) {
            daysInMonth.push(
                <View style={styles.day} key={`empty-end-${daysInMonth.length}`} />
            );
        }

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
                <Image
                    style={styles.calSearch}
                    contentFit="cover"
                    source={require("../assets/search.png")}
                />
            </View>
            <View style={styles.calendar_bg}></View>
            <View style={styles.calCalender}>
                <View style={[styles.calHeader, styles.calFlexBox]}>
                    <View style={[styles.calHeaderFrame, styles.calFlexBox]}>
                        <TouchableOpacity onPress={handlePreviousMonth}>
                            <Image
                                style={styles.arrowBackIcon}
                                contentFit="cover"
                                source={require("../assets/arrow_back.png")}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.monthAndYear}>
                            <Text style={styles.monthYyyy}>
                                {currentDate.toLocaleString('default', { month: 'long' })} {currentDate.getFullYear()}
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={handleNextMonth}>
                            <Image
                                style={styles.arrowBackIcon}
                                contentFit="cover"
                                source={require("../assets/arrow_front.png")}
                            />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={[styles.dateHeader, styles.weekSpaceBlock]}>
                    <Text style={styles.sun}>Sun</Text>
                    <Text style={styles.sun}>Mon</Text>
                    <Text style={styles.sun}>Tue</Text>
                    <Text style={styles.sun}>Wed</Text>
                    <Text style={styles.sun}>Thu</Text>
                    <Text style={styles.sun}>Fri</Text>
                    <Text style={styles.sun}>Sat</Text>
                </View>
                <View style={styles.calendar1}>
                    {renderDays()}
                </View>
            </View>
            <BottomNav/>

            {/* ScheduleAdd 모달 */}
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    setModalVisible(!modalVisible);
                }}
            >
                <TouchableWithoutFeedback onPress={() => setModalVisible(false)}>
                    <View style={styles1.modalBackground}>
                        <TouchableWithoutFeedback>
                            <View>
                                <ScheduleAdd selectedDate={selectedDate} />
                            </View>
                        </TouchableWithoutFeedback>
                    </View>
                </TouchableWithoutFeedback>
            </Modal>
        </View>
    );
};

const styles1 = StyleSheet.create({
    modalBackground: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
    },
});

export default Calendar;
