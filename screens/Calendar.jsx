import * as React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import {
    Color,
    Border,
    FontSize,
    FontFamily,
    StyleVariable,
    Padding,
} from "../GlobalStyles";

const Calendar = () => {
    const navigation = useNavigation();

    return (
        <View style={styles.calendar}>
            <View style={styles.bg} />
            <View style={[styles.calPlannie, styles.calFlexBox]}>
                <Text style={styles.calLogo}>Plannie</Text>
                {/*<Pressable*/}
                {/*    style={styles.calSearch}*/}
                {/*    onPress={() => navigation.navigate("StartPage")}*/}
                {/*>*/}
                    <Image
                        style={styles.icon}
                        contentFit="cover"
                        // source={require("../assets/search.png")}
                    />
                {/*</Pressable>*/}
            </View>
            <View style={styles.calCalender}>
                <View style={styles.date}>
                    <View style={[styles.calHeader, styles.calFlexBox]}>
                        <View style={[styles.calHeaderFrame, styles.calFlexBox]}>
                            <Image
                                style={styles.arrowBackIcon}
                                contentFit="cover"
                                source={require("../assets/arrow_back.png")}
                            />
                            <View style={styles.monthAndYear}>
                                <Text style={styles.monthYyyy}>June 2024</Text>
                            </View>
                            <Image
                                style={styles.arrowBackIcon}
                                contentFit="cover"
                                source={require("../assets/arrow_front.png")}
                            />
                        </View>
                    </View>
                    <View style={[styles.dateHeader, styles.weekSpaceBlock]}>
                        <Text style={styles.sun}>sun</Text>
                        <Text style={styles.sun}>mon</Text>
                        <Text style={styles.sun}>tue</Text>
                        <Text style={styles.sun}>wed</Text>
                        <Text style={styles.sun}>thu</Text>
                        <Text style={styles.sun}>fri</Text>
                        <Text style={styles.sun}>sat</Text>
                    </View>
                    <View style={styles.calendar1}>
                        <View style={styles.weekSpaceBlock}>
                            <View style={styles.day}>
                                <Text style={styles.date1}>2</Text>
                            </View>
                            <View style={styles.day}>
                                <Text style={styles.date1}>3</Text>
                            </View>
                            <View style={styles.day}>
                                <Text style={styles.date1}>4</Text>
                            </View>
                            <View style={styles.day}>
                                <Text style={styles.date1}>5</Text>
                            </View>
                            <View style={styles.day}>
                                <Text style={styles.date1}>6</Text>
                            </View>
                            <View style={styles.day}>
                                <Text style={styles.date1}>7</Text>
                            </View>
                            <View style={styles.day}>
                                <Text style={styles.date1}>8</Text>
                            </View>
                        </View>
                        <View style={[styles.week2, styles.weekSpaceBlock]}>
                            <View style={styles.day}>
                                <Text style={styles.date1}>9</Text>
                            </View>
                            <View style={styles.day}>
                                <Text style={[styles.date9, styles.datePosition]}>10</Text>
                            </View>
                            <View style={styles.day}>
                                <Text style={styles.date1}>11</Text>
                            </View>
                            <View style={styles.day}>
                                <Text style={styles.date1}>12</Text>
                            </View>
                            <View style={styles.day}>
                                <Text style={styles.date1}>13</Text>
                            </View>
                            <View style={styles.day}>
                                <Text style={styles.date1}>14</Text>
                            </View>
                            <View style={styles.day}>
                                <Text style={styles.date1}>15</Text>
                            </View>
                        </View>
                        <View style={[styles.week2, styles.weekSpaceBlock]}>
                            <View style={styles.day}>
                                <Text style={styles.date1}>16</Text>
                            </View>
                            <View style={styles.day}>
                                <Text style={styles.date1}>17</Text>
                            </View>
                            <View style={styles.day}>
                                <Text style={styles.date1}>18</Text>
                            </View>
                            <View style={styles.day}>
                                <Text style={styles.date1}>19</Text>
                            </View>
                            <View style={styles.day}>
                                <Text style={styles.date1}>20</Text>
                            </View>
                            <View style={styles.day}>
                                <Text style={styles.date1}>21</Text>
                            </View>
                            <View style={styles.day}>
                                <Text style={styles.date1}>22</Text>
                            </View>
                        </View>
                        <View style={[styles.week2, styles.weekSpaceBlock]}>
                            <View style={styles.day}>
                                <Text style={styles.date1}>23</Text>
                            </View>
                            <View style={styles.day}>
                                <Text style={styles.date1}>24</Text>
                            </View>
                            <View style={styles.day}>
                                <Text style={styles.date1}>25</Text>
                            </View>
                            <View style={styles.day}>
                                <Image
                                    style={styles.ellipseIcon}
                                    contentFit="cover"
                                    // source={require("../assets/ellipse.png")}
                                />
                                <Text style={[styles.date25, styles.datePosition]}>26</Text>
                            </View>
                            <View style={styles.day}>
                                <Text style={styles.date1}>27</Text>
                            </View>
                            <View style={styles.day}>
                                <Text style={styles.date1}>28</Text>
                            </View>
                            <View style={styles.day}>
                                <Text style={styles.date1}>29</Text>
                            </View>
                        </View>
                        <View style={[styles.week2, styles.weekSpaceBlock]}>
                            <View style={styles.day}>
                                <Text style={styles.date1}>30</Text>
                            </View>
                            <View style={styles.day} />
                            <View style={styles.day} />
                            <View style={styles.day} />
                            <View style={styles.day} />
                            <View style={styles.day} />
                            <View style={styles.day} />
                        </View>
                    </View>
                </View>
            </View>
            <View style={[styles.bottomNav, styles.tooltipBorder]}>
                <View style={styles.monthAndYear}>
                    <View style={[styles.tooltip, styles.tooltipBorder]}>
                        <Image
                            style={[styles.beakIcon, styles.beakIconPosition]}
                            contentFit="cover"
                            // source={require("../assets/beak.png")}
                        />
                        <Image
                            style={[styles.beakStrokeIcon, styles.beakIconPosition]}
                            contentFit="cover"
                            // source={require("../assets/beak-stroke.png")}
                        />
                        <Text style={[styles.title, styles.titleFlexBox]} />
                        <Text
                            style={[styles.bodyText, styles.titleFlexBox]}
                        >{`          `}</Text>
                    </View>
                    <Image
                        style={styles.iconLayout}
                        contentFit="cover"
                        source={require("../assets/Home.png")}
                    />
                    <TouchableOpacity
                        onPress = {() => navigation.navigate('MyPageMain')}
                        style={styles.signWithGoogle1}
                        contentFit="cover">
                        <Image
                            style={[styles.userIcon, styles.iconLayout]}
                            contentFit="cover"
                            source={require("../assets/User.png")}
                        />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    calFlexBox: {
        justifyContent: "space-between",
        flexDirection: "row",
    },
    weekSpaceBlock: {
        paddingVertical: 0,
        paddingHorizontal: 15,
        width: 332,
        justifyContent: "space-between",
        flexDirection: "row",
    },
    datePosition: {
        color: Color.colorsBlue,
        height: 41,
        width: 41,
        lineHeight: 23,
        top: "50%",
        marginLeft: -20.25,
        marginTop: -20.25,
        justifyContent: "center",
        display: "flex",
        textAlign: "center",
        left: "50%",
        alignItems: "center",
        position: "absolute",
    },
    tooltipBorder: {
        borderStyle: "solid",
        alignItems: "center",
        backgroundColor: Color.backgroundDefaultDefault,
    },
    beakIconPosition: {
        height: 10,
        width: 10,
        bottom: -5,
        marginLeft: -4.7,
        left: "50%",
        position: "absolute",
    },
    titleFlexBox: {
        display: "none",
        textAlign: "center",
        color: Color.labelsPrimary,
    },
    iconLayout: {
        marginLeft: 94.8,
        height: 32,
        width: 32,
    },
    bg: {
        top: 72,
        left: 393,
        borderTopLeftRadius: Border.br_17xl_8,
        borderTopRightRadius: Border.br_17xl_8,
        width: 393,
        height: 780,
        transform: [
            {
                rotate: "-180deg",
            },
        ],
        backgroundColor: Color.backgroundDefaultDefault,
        position: "absolute",
    },
    calLogo: {
        color: Color.colorLightskyblue_100,
        textAlign: "left",
        fontSize: FontSize.size_3xl_1,
        fontFamily: FontFamily.bodyStrong,
        fontWeight: "600",
    },
    icon: {
        height: "20px",
        width: "20px",
    },
    calSearch: {
        height: 32,
        width: 32,
    },
    calPlannie: {
        top: 21,
        left: 156,
        width: 212,
        alignItems: "center",
        position: "absolute",
    },
    arrowBackIcon: {
        width: 20,
        height: 20,
        overflow: "hidden",
    },
    monthYyyy: {
        fontSize: 18,
        color: Color.labelsPrimary,
        fontFamily: FontFamily.saralaBold,
        fontWeight: "700",
        textAlign: "left",
    },
    monthAndYear: {
        alignItems: "center",
        flexDirection: "row",
    },
    calHeaderFrame: {
        width: 333,
        alignItems: "center",
    },
    calHeader: {
        height: 40,
        width: 332,
    },
    sun: {
        fontSize: FontSize.size_xs,
        lineHeight: 17,
        textTransform: "uppercase",
        color: Color.labelsTertiary,
        width: 29,
        height: 17,
        justifyContent: "center",
        display: "flex",
        textAlign: "center",
        fontFamily: FontFamily.saralaBold,
        fontWeight: "700",
        alignItems: "center",
    },
    dateHeader: {
        height: 18,
        alignItems: "center",
    },
    date1: {
        height: 41,
        width: 41,
        lineHeight: 23,
        fontFamily: FontFamily.saralaRegular,
        letterSpacing: 0,
        fontSize: FontSize.size_lg_4,
        top: "50%",
        marginLeft: -20.25,
        marginTop: -20.25,
        justifyContent: "center",
        display: "flex",
        textAlign: "center",
        color: Color.labelsPrimary,
        left: "50%",
        alignItems: "center",
        position: "absolute",
    },
    day: {
        width: 40,
        height: 40,
    },
    date9: {
        fontFamily: FontFamily.saralaRegular,
        letterSpacing: 0,
        fontSize: FontSize.size_lg_4,
        color: Color.colorsBlue,
    },
    week2: {
        marginTop: 6.4,
        height: 40,
    },
    ellipseIcon: {
        opacity: 0.12,
        top: "50%",
        marginLeft: -20.25,
        marginTop: -20.25,
        width: 40,
        height: 40,
        left: "50%",
        position: "absolute",
    },
    date25: {
        color: Color.colorsBlue,
        fontFamily: FontFamily.saralaBold,
        fontWeight: "700",
        fontSize: FontSize.size_3xl_1,
    },
    calendar1: {
        paddingTop: 3,
        width: 332,
    },
    date: {
        alignSelf: "stretch",
    },
    calCalender: {
        marginLeft: -166.5,
        top: 102,
        width: 332,
        left: "50%",
        backgroundColor: Color.backgroundDefaultDefault,
        position: "absolute",
    },
    beakIcon: {
        zIndex: 0,
    },
    beakStrokeIcon: {
        zIndex: 1,
    },
    title: {
        fontSize: FontSize.size_mini_7,
        lineHeight: 20,
        zIndex: 2,
        fontFamily: FontFamily.bodyStrong,
        fontWeight: "600",
        display: "none",
    },
    bodyText: {
        fontSize: FontSize.size_smi_9,
        lineHeight: 17,
        fontFamily: FontFamily.bodySmall,
        zIndex: 3,
    },
    tooltip: {
        borderRadius: StyleVariable.radius200,
        borderColor: Color.colorLightskyblue_200,
        borderWidth: 2.8,
        width: 34,
        height: 24,
        paddingHorizontal: StyleVariable.space300,
        paddingVertical: StyleVariable.space200,
    },
    userIcon: {
        overflow: "hidden",
    },
    bottomNav: {
        top: 778,
        left: -1,
        borderColor: Color.borderDefaultDefault,
        borderWidth: 0.9,
        width: 396,
        height: 75,
        paddingHorizontal: 52,
        paddingVertical: Padding.p_sm_8,
        justifyContent: "center",
        position: "absolute",
    },
    calendar: {
        backgroundColor: Color.colorLavender,
        flex: 1,
        height: 852,
        overflow: "hidden",
        width: "100%",
    },
});

export default Calendar;
