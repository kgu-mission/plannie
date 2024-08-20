import * as React from "react";
import {Text, View, TouchableOpacity, Image, Modal, ScrollView} from "react-native";
import styles from "../Styles/ScheduleAddStyles";
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

export default ScheduleAdd;
