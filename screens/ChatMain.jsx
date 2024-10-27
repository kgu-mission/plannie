import React, { useState, useEffect, useRef } from "react";
import { StyleSheet, View, Text, TextInput, TouchableOpacity, FlatList, Keyboard, Animated } from "react-native";
import { Image } from "expo-image";
import axios from 'axios';
import { FontFamily, Color, FontSize } from "../GlobalStyles";


const ChatChatting = () => {
    // 상태 변수: 메시지 목록과 입력 텍스트를 관리
    const [messages, setMessages] = useState([
        { id: '1', text: '안녕하세요. 플래니입니다. 당신의 효율적인 공부 계획을 도와드리겠습니다.', sender: 'bot' }
    ]);
    const [inputText, setInputText] = useState("");
    const keyboardHeight = useRef(new Animated.Value(0)).current;  // useRef로 애니메이션 값 생성

    // 키보드 이벤트 리스너 설정
    useEffect(() => {
        const keyboardDidShowListener = Keyboard.addListener("keyboardDidShow", (event) => {
            Animated.timing(keyboardHeight, {
                duration: 300,
                toValue: event.endCoordinates.height,  // 키보드 높이만큼 이동
                useNativeDriver: false
            }).start();
        });
        const keyboardDidHideListener = Keyboard.addListener("keyboardDidHide", () => {
            Animated.timing(keyboardHeight, {
                duration: 100,
                toValue: 0,  // 다시 제자리로 돌아옴
                useNativeDriver: false
            }).start();
        });

        return () => {
            keyboardDidHideListener.remove();
            keyboardDidShowListener.remove();
        };
    }, []);

    // 메시지 전송 함수
    const sendMessage = async () => {
        if (inputText.trim().length > 0) {
            const newMessage = {
                id: Date.now().toString(),
                text: inputText,
                sender: 'user'
            };

            // 최신 메시지를 업데이트한 후의 messages 상태를 사용하여 API 요청
            const updatedMessages = [...messages, newMessage];
            setMessages(updatedMessages);
            setInputText("");

            try {
                const response = await axios.post(
                    'https://api.openai.com/v1/chat/completions',
                    {
                        model: "gpt-3.5-turbo",
                        messages: [
                            { role: "system", content: "You are a helpful assistant." },
                            ...updatedMessages.map(msg => ({
                                role: msg.sender === 'user' ? 'user' : 'assistant',
                                content: msg.text
                            })),
                            { role: 'user', content: inputText }
                        ],
                        max_tokens: 150,
                        temperature: 0.9,
                    },
                    {
                        headers: {
                            'Authorization': `Bearer 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`
                        }
                    }
                );

                const botMessage = {
                    id: Date.now().toString(),
                    text: response.data.choices[0].message.content.trim(),
                    sender: 'bot'
                };
                setMessages(prevMessages => [...prevMessages, botMessage]);
            } catch (error) {
                console.error("Error:", error.response ? error.response.data : error.message);

                const errorMessage = {
                    id: Date.now().toString(),
                    text: "오류가 발생했습니다. 다시 시도해주세요.",
                    sender: 'bot'
                };
                setMessages(prevMessages => [...prevMessages, errorMessage]);
            }
        }
    };


    // 메시지 아이템 렌더링 함수
    const renderItem = ({ item }) => (
        <View style={[styles.messageContainer, item.sender === 'user' ? styles.userMessageContainer : styles.aiMessageContainer]}>
            <View style={item.sender === 'user' ? styles.userMessage : styles.aiMessage}>
                <Text style={styles.messageText}>
                    {item.text}
                </Text>
            </View>
        </View>
    );

    return (
        <View style={styles.chatChatting}>
            <View style={styles.bg} />
            <View style={[styles.chatPlannie, styles.chatFlexBox]}>
                <Image
                    style={styles.arrowBackIcon}
                    contentFit="cover"
                    source={require("../assets/arrow_back.png")}
                />
                <Text style={styles.plannie}>Plannie</Text>
            </View>
            <FlatList
                data={messages}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                contentContainerStyle={styles.chatting}
            />
            <Animated.View style={[styles.chatBar, { bottom: keyboardHeight }]}>
                <View style={styles.fabFlexBox}>
                    <TouchableOpacity style={[styles.fab, styles.fabFlexBox]}>
                        <Image
                            style={styles.plusIcon}
                            contentFit="cover"
                            source={require("../assets/sch_plus.png")}
                        />
                    </TouchableOpacity>
                    <View style={[styles.chatWindow, styles.chatFlexBox]}>
                        <TextInput
                            style={[styles.text2, styles.textTypo]}
                            onChangeText={setInputText}
                            value={inputText}
                            placeholder="정보를 입력해주세요"
                            onSubmitEditing={sendMessage}
                        />
                        <TouchableOpacity onPress={sendMessage}>
                            <Image
                                style={styles.gravityUimagnifierIcon}
                                contentFit="cover"
                                source={require("../assets/sch_plus.png")}
                            />
                        </TouchableOpacity>
                    </View>
                </View>
            </Animated.View>
        </View>
    );
};

const styles = StyleSheet.create({
    messageContainer: {
        flexDirection: 'row',
        marginVertical: 5,
        paddingHorizontal: 13,
    },
    userMessageContainer: {
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        width: '100%',
    },
    aiMessageContainer: {
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        width: '100%',
    },
    aiMessage: {
        backgroundColor: '#F0F0F0',
        borderRadius: 10,
        padding: 10,
        maxWidth: '80%',
    },
    userMessage: {
        backgroundColor: '#D3D3D3',
        borderRadius: 10,
        padding: 10,
        maxWidth: '80%',
    },
    messageText: {
        fontSize: 16,
        color: '#000',
    },
    chatFlexBox: {
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "row",
    },
    chatBarPosition: {
        left: 0,
        width: "100%",
        position: "absolute",
    },
    chatPosition: {
        paddingVertical: 14,
        paddingHorizontal: 18,
        borderRadius: 18,
        top: 0,
        justifyContent: "center",
        left: 0,
        alignItems: "center",
        flexDirection: "row",
        position: "absolute",
    },
    textTypo: {
        fontFamily: FontFamily.m3BodyLarge,
        textAlign: "left",
    },
    chatChildLayout: {
        height: 35,
        width: 37,
        top: 29,
        position: "absolute",
    },
    fabFlexBox: {
        alignItems: "center",
        flexDirection: "row",
    },
    //채팅 하얀 배경
    bg: {
        top: 95,
        left: 0,
        borderTopLeftRadius: 37,
        borderTopRightRadius: 37,
        height: 779,
        width: "100%",
        backgroundColor: Color.backgroundDefaultDefault,
        position: "absolute",
    },
    arrowBackIcon: {
        width: 28,
        height: 28,
        overflow: "hidden",
    },
    plannie: {
        fontSize: FontSize.size_3xl,
        fontWeight: "600",
        fontFamily: FontFamily.bodyStrong,
        color: Color.colorLightskyblue_100,
        textAlign: "centers",
    },
    chatPlannie: {
        height: 100,
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        paddingHorizontal: 20,
        paddingTop: 20,
    },
    text: {
        fontSize: FontSize.size_mini_7,
        letterSpacing: 0,
        lineHeight: 22,
        color: Color.labelsPrimary,
    },
    chatUserBox: {
        backgroundColor: Color.colorLavender,
        alignItems: "right",
        justifyContent: "right",
        borderRadius: 20,
    },
    chatUserChild: {
        right: 0,
    },
    chatUser: {
        width: 235,
        height: 64,
    },
    chatUserFrame: {
        alignSelf: "flex-end",
        justifyContent: "center",
        paddingRight: 14,
        marginTop: 10,
    },
    chatAiBox: {
        backgroundColor: "#e7e7e7",
        alignItems: 'flex-start',
        justifyContent: 'center',
        borderRadius: 20,
    },
    chatAiChild: {
        left: 0,
    },
    chatAi: {
        width: 239,
        height: 64,
    },
    chatAiFrame: {
        alignSelf: "flex-start",
        justifyContent: "center",
        paddingLeft: 14,
        marginTop: 10,
    },
    chatting: {
        flexGrow: 1,
        width: "100%",
        paddingHorizontal: 10,
        paddingVertical: 10,
        marginBottom: 60,
    },
    plusIcon: {
        width: 30,
        height: 30,
        marginBottom: 20
    },
    fab: {
        padding: 14,
        justifyContent: "center",
    },
    text2: {
        fontSize: FontSize.m3BodyLarge_size,
        letterSpacing: 1,
        color: Color.colorDarkgray_200,
    },
    //전송버튼
    gravityUimagnifierIcon: {
        width: 18,
        height: 18,
        overflow: "hidden",
    },
    chatWindow: {
        borderRadius: 28,
        width: 321,
        height: 55,
        paddingHorizontal: 23,
        paddingVertical: 6,
        marginLeft: 1,
        marginBottom: 20,
        backgroundColor: Color.backgroundDefaultDefault,
        justifyContent: "space-between",
    },
    chatBar: {
        height: 100,
        backgroundColor: Color.colorAliceblue,
        width: "100%",
        justifyContent: "center",
        position: "absolute",
    },
    chatChatting: {
        backgroundColor: Color.colorLavender,
        flex: 1,
        width: "100%",
        height: "100%",
        alignItems: 'stretch',
        justifyContent: 'center',
    },
});

export default ChatChatting;
