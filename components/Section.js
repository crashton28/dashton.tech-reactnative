import React from 'react';
import { View, Text } from 'react-native';
import CONSTANTS from '../constants';
import H2 from './content/H2';

export default function Section(props) {
    return (
        <View style={{ flex : 1 }}>
            {props.title && <H2>{props.title}</H2>}
            {props.children}
        </View>
    );
}