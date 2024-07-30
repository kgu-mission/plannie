import {StyleSheet} from "react-native";
import {Color, Padding, StyleVariable} from "../GlobalStyles";

const styles = StyleSheet.create({
    bottomNav: {
        bottom:20,
        borderColor: Color.borderDefaultDefault,
        borderBottomWidth:0,
        borderWidth: 1,
        width: "100%",
        height: 50,
        paddingVertical: Padding.p_sm_8,
        justifyContent: "center",
        position: "absolute",
    },
    nav: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignSelf: "center",
        top: 5,
        width: 280,
    },
    tooltip: {
        width: 30,
        height: 26,
        paddingHorizontal: StyleVariable.space300,
        paddingVertical: StyleVariable.space200,
    },
    iconLayout: {
        height: 30,
        width: 30,
    },
    userIcon: {
        overflow: "hidden",
    },
});

export default styles;
