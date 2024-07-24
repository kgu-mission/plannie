import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, FontSize, FontFamily, Border, Padding } from "../GlobalStyles";

const Calendar = () => {
    const navigation = useNavigation();

    return (
        <View style={styles.calendar}>
            <View style={styles.header}>
                <Text style={styles.calLogo}>Plannie</Text>
                <Pressable onPress={() => navigation.navigate("StartPage1")}>
                    <Image
                        style={styles.searchIcon}
                        contentFit="cover"
                        source={require("../assets/search.png")}
                    />
                </Pressable>
            </View>
            <View style={styles.calCalender}>
                <Text style={styles.monthYear}>June 2024</Text>
                <View style={styles.weekDaysContainer}>
                    {["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"].map((day) => (
                        <Text key={day} style={styles.weekDay}>{day}</Text>
                    ))}
                </View>
                <View style={styles.daysContainer}>
                    {Array.from({ length: 30 }, (_, i) => i + 1).map((date) => (
                        <View key={date} style={styles.day}>
                            <Text style={date === 10 || date === 26 ? styles.highlightedDate : styles.dateText}>
                                {date}
                            </Text>
                        </View>
                    ))}
                </View>
            </View>
            <View style={styles.bottomNav}>
                <Pressable onPress={() => navigation.navigate("Home")}>
                    <Image
                        style={styles.iconLayout}
                        contentFit="cover"
                        source={require("../assets/Home.png")}
                    />
                </Pressable>
                <Pressable onPress={() => navigation.navigate("User")}>
                    <Image
                        style={styles.iconLayout}
                        contentFit="cover"
                        source={require("../assets/User.png")}
                    />
                </Pressable>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    calendar: {
        backgroundColor: Color.colorLavender,
        flex: 1,
        justifyContent: "space-between",
        paddingVertical: 20,
        paddingHorizontal: 20,
    },
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 20,
    },
    calLogo: {
        color: Color.colorLightskyblue_100,
        fontSize: FontSize.size_3xl_1,
        fontFamily: FontFamily.bodyStrong,
        fontWeight: "600",
    },
    searchIcon: {
        height: 32,
        width: 32,
    },
    calCalender: {
        backgroundColor: Color.backgroundDefaultDefault,
        borderRadius: Border.br_17xl_8,
        paddingVertical: 20,
        paddingHorizontal: 10,
        alignItems: "center",
    },
    monthYear: {
        fontSize: FontSize.size_3xl_1,
        fontFamily: FontFamily.bodyStrong,
        color: Color.labelsPrimary,
        marginBottom: 20,
    },
    weekDaysContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        width: "100%",
        paddingHorizontal: 10,
        marginBottom: 10,
    },
    weekDay: {
        fontSize: FontSize.size_xs,
        fontFamily: FontFamily.saralaBold,
        color: Color.labelsTertiary,
        width: "14.28%",
        textAlign: "center",
    },
    daysContainer: {
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-between",
        width: "100%",
        paddingHorizontal: 10,
    },
    day: {
        width: "14.28%",
        alignItems: "center",
        marginVertical: 5,
    },
    dateText: {
        fontSize: FontSize.size_lg_4,
        fontFamily: FontFamily.saralaRegular,
        color: Color.labelsPrimary,
    },
    highlightedDate: {
        fontSize: FontSize.size_lg_4,
        fontFamily: FontFamily.saralaRegular,
        color: Color.colorsBlue,
        backgroundColor: Color.colorLightskyblue_100,
        borderRadius: 20,
        padding: 5,
        textAlign: "center",
        overflow: "hidden",
    },
    bottomNav: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingVertical: 10,
        paddingHorizontal: 50,
        backgroundColor: Color.backgroundDefaultDefault,
        borderTopColor: Color.borderDefaultDefault,
        borderTopWidth: 1,
    },
    iconLayout: {
        height: 32,
        width: 32,
    },
});

export default Calendar;