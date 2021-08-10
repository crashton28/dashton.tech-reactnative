import React, { useRef } from "react";
import { Animated, StyleSheet, View } from "react-native";
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { StatusBar } from "expo-status-bar";
import Header from "./Header";
import Content from "./Content";

const HEADER_IMAGE_HEIGHT = 300;

export default function App() {
    const insets = useSafeAreaInsets();

    const scrollY = useRef(new Animated.Value(0)).current;
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

    return (
        <View style={styles.container}>
            <Animated.ScrollView
                bounces={false}
                style={{
                    width: "100%",
                    height : '100%'
                }}
                scrollEventThrottle={16}
                onScroll={Animated.event(
                    [{ nativeEvent: { contentOffset: { y: scrollY } } }],
                    { useNativeDriver: false }
                )}
                stickyHeaderIndices={[0]}
            >
                <Header
                    translateY={translateY}
                    imageOpacity={imageOpacity}
                    imageHeight={HEADER_IMAGE_HEIGHT}
                />
                <Content />
            </Animated.ScrollView>
            <StatusBar style="auto" />
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: "#fff",
    },
});
