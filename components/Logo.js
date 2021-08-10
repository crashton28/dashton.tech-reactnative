import React from 'react';
import { StyleSheet, Text, Animated, View, SafeAreaView, Image } from 'react-native';
import Svg, { G, Path } from 'react-native-svg';

export default function Logo(props) {
    return (
        <View style={[styles.container, props.style]}>
            <Svg height="64" width="70" viewBox="0 0 220 200">
                <G id="Layer_2" data-name="Layer 2">
                    <G id="Layer_1-2" data-name="Layer 1">
                        <Path fill="#fff" d="M220 200h-40L100 0h40l80 200zM0 0v40a60 60 0 010 120v40A100 100 0 000 0z"/>
                    </G>
                </G>
            </Svg>
            <View style={{marginLeft: 12}}>
                <Text style={styles.text}>Design</Text>
                <Text style={styles.text}>Developer</Text>
                <Text style={styles.textName}>Dave Ashton</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container : {
        alignItems: 'center',
        flexDirection: 'row'
    },
    text : {
        color : '#fff',
        fontFamily: 'Lato-Light',
        fontSize : 20,
        textTransform: 'uppercase',
    },
    textName : {
        color : '#fff',
        fontFamily : 'Lato-Black',
        fontSize : 20,
        textTransform: 'uppercase',
    }
})