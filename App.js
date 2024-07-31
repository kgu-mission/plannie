import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NativeBaseProvider } from 'native-base';
import StartPage from './screens/StartPage';
import Login from './screens/Login';

import Calendar from './screens/Calendar';
import MonthList from "./screens/MonthList";

import ChatMain from "./screens/ChatMain";

import MyPageMain from "./screens/MyPageMain";

const Stack = createNativeStackNavigator();

export default function App() {
    const RootStack = createNativeStackNavigator();
    const [hideSplashScreen, setHideSplashScreen] = React.useState(true);
    return (
        <NativeBaseProvider>
            <SafeAreaProvider>
                <NavigationContainer>
                    <RootStack.Navigator
                        initialRouteName={"StartPage"}
                        screenOptions={{ headerShown: false}}
                    >

                        <RootStack.Screen
                            name="StartPage"
                            component={StartPage}
                        />
                        <RootStack.Screen
                            name="Login"
                            component={Login}
                            />
                        <RootStack.Screen
                            name="Calendar"
                            component={Calendar}
                            />
                        <RootStack.Screen
                            name="MonthList"
                            component={MonthList}
                            />
                        <RootStack.Screen
                            name="ChatMain"
                            component={ChatMain}
                        />
                        <RootStack.Screen
                            name="MyPageMain"
                            component={MyPageMain}
                            />
                    </RootStack.Navigator>
                </NavigationContainer>
            </SafeAreaProvider>
        </NativeBaseProvider>
    );
}
