import AppLoading from 'expo-app-loading';
import * as Font from 'expo-font';
import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from 'react-native-safe-area-context';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import Navigation from './components/Navigation';

import ROUTES from './routes';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
const Tab = createBottomTabNavigator();

import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();

export default function App() {
    const [loaded, setLoaded] = useState(false);

    async function loadResourcesAsync() {
        await Promise.all([
            Font.loadAsync({
                'Lato-Light': require("./assets/fonts/Lato-Light.ttf"),
                'Lato-LightItalic': require("./assets/fonts/Lato-LightItalic.ttf"),
                'Lato-Black': require("./assets/fonts/Lato-Black.ttf"),
                'Lato-BlackItalic': require("./assets/fonts/Lato-BlackItalic.ttf"),
            }),
        ]);
    }

    if (!loaded) {
        return (
            <AppLoading
                startAsync={loadResourcesAsync}
                onFinish={() => setLoaded(true)}
                onError={console.warn}
            />
        );
    } else {
        return (
            <NavigationContainer>
                <SafeAreaProvider>
                    <Tab.Navigator
                        tabBar={(props) => <Navigation {...props} />}
                        screenOptions={{headerShown: false}}
                    >
                        {ROUTES.map((route, idx) => <Stack.Screen key={idx} name={route.name} component={route.component} />)}
                    </Tab.Navigator>
                    <StatusBar style="auto" />
                </SafeAreaProvider>
            </NavigationContainer>
        );
    }
}
