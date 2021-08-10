import AppLoading from 'expo-app-loading';
import * as Font from 'expo-font';
import React, { useState } from "react";
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Main from "./components/Main";

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
        return <SafeAreaProvider><Main /></SafeAreaProvider>;
    }
}
