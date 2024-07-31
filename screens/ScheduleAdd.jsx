import * as React from "react";
import {Text, StyleSheet, View, TouchableOpacity, Image, Modal, ScrollView} from "react-native";
import { FontFamily, FontSize, Color } from "../GlobalStyles";
import ScheduleCreate from "./ScheduleCreate";

const ScheduleAdd = ({ selectedDate }) => {
    const [modalVisible, setModalVisible] = React.useState(false);

    const formattedDate = selectedDate ? new Date(selectedDate).toLocaleDateString('ko-KR', { year: 'numeric', month: 'long', day: 'numeric', weekday: 'short' }) : '';

    return (
        <View style={styles.scheduleAdd}>
            <Text style={[styles.schDate, styles.textTypo]}>{formattedDate}</Text>
            <ScrollView style={styles.schList}>
                <View style={[styles.schList1, styles.schFlexBox]}>
                    <TouchableOpacity>
                        <Image
                            style={styles.iconLayout}
                            source={require("../assets/Square.png")}
                        />
                    </TouchableOpacity>
                    <Text style={[styles.text, styles.textTypo]}>
                        미적분 2단원 기출
                    </Text>
                </View>
                <View style={[styles.schList11, styles.schFlexBox]}>
                    <TouchableOpacity>
                        <Image
                            style={[styles.squareIcon, styles.iconLayout]}
                            source={require("../assets/Square.png")}
                        />
                    </TouchableOpacity>
                    <Text style={[styles.text, styles.textTypo]}>
                        물리 3단원 개념 정리
                    </Text>
                </View>
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

const styles = StyleSheet.create({
    schFlexBox: {
        alignItems: "center",
        flexDirection: "row",
    },
    textTypo: {
        textAlign: "left",
        fontFamily: FontFamily.bodyStrong,
        fontWeight: "600",
        fontSize: FontSize.size_4xl_9,
    },
    iconLayout: {
        height: 40,
        width: 40,
    },
    schDate: {
        color: Color.colorLightskyblue_100,
        alignSelf: "stretch",
        fontSize: FontSize.size_4xl_9,
        marginBottom: 20,
    },
    text: {
        color: Color.colorDarkslategray_200,
        marginLeft: 20.9,
    },
    schList1: {
        alignSelf: "stretch",
        flexDirection: "row",
        alignItems: "center",
    },
    squareIcon: {
        overflow: "hidden",
    },
    schList11: {
        marginTop: 25.9,
        alignSelf: "stretch",
        flexDirection: "row",
        alignItems: "center",
    },
    schList: {
        marginTop: 34.9,
        alignSelf: "stretch",
    },
    schPlusIcon: {
        width: 48,
        height: 48,
        overflow: "hidden",
        alignSelf: "flex-end"
    },
    scheduleAdd: {
        borderRadius: 20,
        backgroundColor: Color.backgroundDefaultDefault,
        width: 350,
        height: 600,
        padding: 20,
        alignItems: "center",
    },
    modalBackground: {
        flex: 1,
        justifyContent: "flex-end",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
    },
});

export default ScheduleAdd;
