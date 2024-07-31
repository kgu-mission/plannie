import {Text, View} from "react-native";
import {Image} from "expo-image";
import * as React from "react";
import {useNavigation} from "@react-navigation/native";
import styles from "./MyPageTopNavStyles";

const MyPageTopNav = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.topNav}>
            <View style={[styles.topNavContentFrame, styles.contentFlexBox]}>
                <Image
                    style={styles.arrowIconLayout}
                    contentFit="cover"
                    source={require("../assets/arrow_back.png")}
                />
                <Text style={styles.plannie}>Plannie</Text>
            </View>
        </View>
    );
};

export default MyPageTopNav;