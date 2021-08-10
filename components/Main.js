import React, { useRef } from "react";
import { Animated, StyleSheet, View, ScrollView } from "react-native";
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { StatusBar } from "expo-status-bar";
import Header from "./Header";
import Content from "./Content";

export default function App() {
    const insets = useSafeAreaInsets();
    const INSET_TOP = insets.top;

    const HEADER_IMAGE_HEIGHT = 300;
    const HEADER_TITLE_HEIGHT_EXPANDED = 200;
    const HEADER_TITLE_HEIGHT_COLLAPSED = 100;
    const HEADER_HEIGHT_EXPANDED = HEADER_IMAGE_HEIGHT + HEADER_TITLE_HEIGHT_EXPANDED;
    const HEADER_HEIGHT_COLLAPSED = HEADER_TITLE_HEIGHT_COLLAPSED;

    const scrollY = useRef(new Animated.Value(0)).current;

    const titleHeight = scrollY.interpolate({
        inputRange : [0, HEADER_HEIGHT_EXPANDED],
        outputRange : [HEADER_TITLE_HEIGHT_EXPANDED, HEADER_TITLE_HEIGHT_COLLAPSED],
        extrapolate : 'clamp'
    });
    const translateY = scrollY.interpolate({
        inputRange: [0, HEADER_IMAGE_HEIGHT],
        outputRange: [-insets.top, -1 * HEADER_IMAGE_HEIGHT],
        extrapolate: 'clamp'
    });
    const imageOpacity = scrollY.interpolate({
        inputRange: [0, HEADER_IMAGE_HEIGHT],
        outputRange : [1, 0],
        extrapolate : 'clamp'
    });
    const thumbTranslateX = scrollY.interpolate({
        inputRange: [HEADER_IMAGE_HEIGHT, HEADER_IMAGE_HEIGHT + 100],
        outputRange : [80, 0],
        extrapolate : 'clamp'
    });
    const thumbOpacity = scrollY.interpolate({
        inputRange: [HEADER_IMAGE_HEIGHT, HEADER_IMAGE_HEIGHT + 100],
        outputRange : [0, 1],
        extrapolate : 'clamp'
    });

    return (
        <View style={styles.container}>
            <Header
                translateY={translateY}
                imageOpacity={imageOpacity}
                imageHeight={HEADER_IMAGE_HEIGHT}
                titleHeight = {titleHeight}
                thumbOpacity = {thumbOpacity}
                thumbTranslateX = {thumbTranslateX}
            />
            <ScrollView
                // bounces={false}
                scrollEventThrottle={16}
                onScroll={Animated.event(
                    [{ nativeEvent: { contentOffset: { y: scrollY } } }],
                    { useNativeDriver: false }
                )}
            >
                <View style={{ paddingTop : HEADER_HEIGHT_EXPANDED }} >
                    <Content />
                </View>
            </ScrollView>
            <StatusBar style="auto" />
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: "#fff",
        flex : 1,
    },
});
