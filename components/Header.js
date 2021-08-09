import React from 'react';
import { StyleSheet, Animated, SafeAreaView, View, Image } from 'react-native';
import Logo from './Logo';


export default function Header(props) {
    return (
        <Animated.View style={{
            backgroundColor : '#FF665A',
            position : 'absolute',
            shadowOffset: {width: 0, height: 2},
            shadowOpacity: .3,
            shadowRadius : 2,
            top : 0,
            width : '100%',
            zIndex : 2
        }}>
            {/* <Image
                source={{
                    uri: 'https://res.cloudinary.com/crashton28/image/upload/v1623200508/dashton.tech/pics/biopic_2x_imneow.jpg'
                }}
                style={{
                    height: 200,
                    width: '100%'
                }}
            /> */}
            <SafeAreaView>
                <Animated.View style={{
                    alignItems: 'center',
                    flexDirection: 'row',
                    height : props.height || 0,
                    padding : 20,
                    justifyContent: 'space-between'
                }}>
                    <Logo />
                    <Image
                        source={{
                            uri: 'https://res.cloudinary.com/crashton28/image/upload/v1623200508/dashton.tech/pics/biopic_2x_imneow.jpg'
                        }}
                        style={styles.avatar}
                    />
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