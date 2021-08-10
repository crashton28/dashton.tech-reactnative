import React from 'react';
import { Text } from 'react-native';
import CONSTANTS from '../../constants';

export default function H2(props) {
    return (
        <Text style={{
            color : '#7D6B7D',
            fontFamily: 'Lato-Light',
            fontSize : 24,
            marginVertical : 20,
            textTransform : 'uppercase',
            textAlign : 'center'
        }}>
            {props.children}
        </Text>
    );
};