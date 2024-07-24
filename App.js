import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NativeBaseProvider } from 'native-base';
import StartPage from './screens/StartPage'; // 경로를 소문자로 변경
import Login from './screens/Login';

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
                    </RootStack.Navigator>
                </NavigationContainer>
            </SafeAreaProvider>
        </NativeBaseProvider>
    );
}
