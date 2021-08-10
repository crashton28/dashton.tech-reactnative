import React from 'react';
import { Text } from 'react-native';
import CONSTANTS from '../../constants';

export default function H1(props) {
    return (
        <Text style={{
            color : CONSTANTS.COLOR_PRIMARY,
            fontFamily: 'Lato-BlackItalic',
            fontSize : 24,
        }}>
            {props.children}
        </Text>
    );
};