import React from 'react';
import { StyleSheet, Animated, Image } from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Logo from './Logo';
import CONSTANTS from '../constants';


export default function Header(props) {
    const insets = useSafeAreaInsets();
    return (
        <Animated.View style={{
            backgroundColor : CONSTANTS.COLOR_PRIMARY,
            shadowOffset: {width: 0, height: 2},
            shadowOpacity: .3,
            shadowRadius : 2,
            top : 0,
            transform: [{translateY: props.translateY}],
            width : '100%',
            zIndex : 2
        }}>
            <Animated.Image
                source={{
                    uri: 'https://res.cloudinary.com/crashton28/image/upload/v1623200508/dashton.tech/pics/biopic_2x_imneow.jpg'
                }}
                style={{
                    height: props.imageHeight || 0,
                    // marginTop : insets.top * -1,
                    transform : [{translateY: insets.top || 0}],
                    opacity : props.imageOpacity || 1,
                    width: '100%'
                }}
            />
            <SafeAreaView forceInset={{ top: 'always', bottom: 'never' }}>
                <Animated.View style={{
                    alignItems: 'center',
                    flexDirection: 'row',
                    padding : 20,
                    justifyContent: 'space-between'
                }}>
                    <Logo/>
                    {/* <Image
                        source={{
                            uri: 'https://res.cloudinary.com/crashton28/image/upload/v1623200508/dashton.tech/pics/biopic_2x_imneow.jpg'
                        }}
                        style={styles.avatar}
                    /> */}
                </Animated.View>
            </SafeAreaView>
        </Animated.View>
    );
}

const styles = StyleSheet.create({
    avatar : {
        borderWidth: 2,
        borderColor: '#fff',
        width: 70,
        height: 70,
        borderRadius: 40,
    },
})