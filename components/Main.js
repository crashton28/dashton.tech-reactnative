import React, { useRef } from "react";
import { Animated, StyleSheet, Text, SafeAreaView, ScrollView, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import Header from "./Header";
import Content from "./Content";

const HEADER_EXPANDED_HEIGHT = 200;
const HEADER_COLLAPSED_HEIGHT = 100;

export default function App() {

    const scrollY = useRef(new Animated.Value(0)).current;
    const headerHeight = scrollY.interpolate({
        inputRange: [0, HEADER_EXPANDED_HEIGHT-HEADER_COLLAPSED_HEIGHT],
        outputRange: [HEADER_EXPANDED_HEIGHT, HEADER_COLLAPSED_HEIGHT],
        extrapolate: 'clamp'
    });

    return (
        <View style={styles.container}>
            <Header height={headerHeight}/>
            <ScrollView
            style={{
                width: "100%",
                height : '100%'
            }}
            scrollEventThrottle={10}
            onScroll={Animated.event(
                [{ nativeEvent: { contentOffset: { y: scrollY } } }],
                { useNativeDriver: false })
            }
            >
                <SafeAreaView>
                    <View style={{
                        paddingTop : HEADER_EXPANDED_HEIGHT,
                    }}>
                        <Content />
                    </View>
                </SafeAreaView>
            </ScrollView>
            <StatusBar style="auto" />
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: "#fff",
    },
});
