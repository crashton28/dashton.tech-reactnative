import React, { useRef } from 'react';
import { StyleSheet, Text, View, Animated, Dimensions, Image } from 'react-native';
import { Video } from 'expo-av';
import DATA from '../../data/projects';
import CONSTANTS from '../../constants';

const SCREEN_WIDTH = Dimensions.get('screen').width;
const ITEM_SIZE = SCREEN_WIDTH-100;
const SPACER_ITEM_SIZE = (SCREEN_WIDTH - ITEM_SIZE) / 2;

export default function Portfolio() {
    const scrollX = useRef(new Animated.Value(0)).current;
    return (
        <View style={styles.container}>
            <Animated.FlatList
                horizontal
                data={[
                    { key: 'left-spacer' },
                    ...DATA,
                    { key: 'right-spacer' }
                ]}
                decelerationRate={0}
                initialNumToRender = {3}
                keyExtractor = {(item, index) => index.toString()}
                onScroll={Animated.event(
                    [{ nativeEvent: { contentOffset: { x: scrollX } } }],
                    { useNativeDriver: true }
                )}
                renderItem={({ item, index }) => {
                    const inputRange = [
                        (index - 2) * ITEM_SIZE,
                        (index - 1) * ITEM_SIZE,
                        index * ITEM_SIZE
                    ];
                    const scale = scrollX.interpolate({
                        inputRange,
                        outputRange : [.8, 1, .8]
                    });
                    if (item.key) {
                        return <View style={{width: SPACER_ITEM_SIZE}} />
                    }
                    return (
                        <Animated.View
                            key={index}
                            onPress={() => this._onPress(item)}
                            style={{
                                flexDirection : 'column',
                                paddingTop : 20,
                                flex : 1,
                                height : 440,
                                transform : [
                                    {scale}
                                ],
                                width : ITEM_SIZE,
                            }}
                        >
                            <View style={styles.screen}>
                                {item.screens && (
                                    <Image
                                        source={{uri : item.screens[0].image}}
                                        style={styles.asset}
                                    />
                                )}
                                {item.video && (
                                    <Video
                                        isLooping
                                        resizeMode="contain"
                                        source={{ uri: item.video.mp4 }}
                                        shouldPlay
                                        style={styles.asset}
                                        useNativeControls={false}
                                    />
                                )}
                            </View>
                            <View style={styles.textContainer}>
                                <Text style={styles.text}>
                                    <Text style={styles.title}>
                                        {item.title}
                                        {"\n"}
                                    </Text>
                                    <Text style={styles.role}>
                                        {item.role}
                                        {"\n"}{"\n"}
                                    </Text>
                                    <Text style={styles.description}>
                                        {item.description}
                                    </Text>
                                </Text>
                            </View>
                        </Animated.View>
                    )
                }}
                scrollEventThrottle={1}
                snapToInterval={ITEM_SIZE}
                // ItemSeparatorComponent={() => <View style={{margin: 10}}/>}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container : {
        backgroundColor: '#333',
        flex : 1,
        paddingBottom : 20,
        paddingTop : 20,
        width : '100%',
    },
    textContainer : {
        flexDirection : 'column',
        flex : 1,
        paddingLeft : 20,
        paddingRight : 20
    },
    screen : {
        backgroundColor: '#1d1e1f',
        borderRadius : 6,
        paddingBottom : '75%',
        marginBottom : 20,
        overflow : 'hidden',
        position : 'relative',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: .3,
        shadowRadius : 2,
        width : '100%',
    },
    asset : {
        position : 'absolute',
        top : 0,
        bottom : 0,
        left : 0,
        right : 0,
    },
    text : {
        color : '#fff'
    },
    title : {
        color : CONSTANTS.COLOR_PRIMARY,
        fontFamily: 'Lato-Black',
        fontSize: 20,
        textAlign : 'center'
    },
    role : {
        fontFamily: 'Lato-Black',
        fontSize: 20,
        textAlign : 'center'
    },
    description : {
        fontSize: 16,
        opacity : .8,
        textAlign : 'center'
    }
});