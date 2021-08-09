import AppLoading from 'expo-app-loading';
import * as Font from 'expo-font';
import React, { useState } from "react";
import Main from "./components/Main";

export default function App() {
    const [loaded, setLoaded] = useState(false);

    async function loadResourcesAsync() {
        await Promise.all([
            Font.loadAsync({
                'Lato-Light': require("./assets/fonts/Lato-Light.ttf"),
                'Lato-Black': require("./assets/fonts/Lato-Black.ttf"),
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
        return <Main />;
    }
}
