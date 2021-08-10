import React from 'react';
import { Text } from 'react-native';

export default function P(props) {
    return (
        <Text style={{
            marginVertical: 20,
            fontFamily : 'Lato-LightItalic',
            fontSize : 20
        }}>
            {props.children}
        </Text>
    );
}