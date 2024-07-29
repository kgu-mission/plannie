import * as React from "react";
import { View, Text, ScrollView } from "react-native";
import styles from "../Styles/MonthListStyles";

const MonthList = () => {
    return (
        <View style={styles.monthList}>
            <View style={[styles.bg, styles.bgPosition]} />
            <Text style={styles.mlTitle}>이 달의 일정</Text>
            <View style={styles.scrollContainer}>
                <ScrollView contentContainerStyle={styles.mlContent}>
                    <View style={styles.mlDate}>
                        <Text style={[styles.day, styles.dayTypo]}>0601 Sat</Text>
                        <View style={styles.mlDateList}>
                            <View style={styles.listFlexBox}>
                                <Text style={[styles.todo, styles.dayTypo]}>일정 1</Text>
                                <Text style={styles.todoTime}>13:00 - 15:00</Text>
                            </View>
                            <View style={styles.listFlexBox}>
                                <Text style={[styles.todo, styles.dayTypo]}>일정 2</Text>
                                <Text style={styles.todoTime}>16:00 - 18:00</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.mlDate}>
                        <Text style={[styles.day, styles.dayTypo]}>0603 Mon</Text>
                        <View style={styles.mlDateList}>
                            <View style={styles.listFlexBox}>
                                <Text style={[styles.todo, styles.dayTypo]}>일정 1</Text>
                                <Text style={styles.todoTime}>09:00 - 10:00</Text>
                            </View>
                            <View style={styles.listFlexBox}>
                                <Text style={[styles.todo, styles.dayTypo]}>일정 2</Text>
                                <Text style={styles.todoTime}>18:00 - 20:00</Text>
                            </View>
                            <View style={styles.listFlexBox}>
                                <Text style={[styles.todo, styles.dayTypo]}>일정 3</Text>
                                <Text style={styles.todoTime}>22:00 - 24:00</Text>
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </View>
        </View>
    );
};

export default MonthList;
