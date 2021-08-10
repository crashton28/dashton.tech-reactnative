import React from 'react';
import { View, Text } from 'react-native';
import CONSTANTS from '../constants';
import H2 from './content/H2';

export default function Section(props) {
    return (
        <View style={{ flex : 1 }}>
            <Text style={{ color : 'rgba(0,0,0,.2)', textAlign: 'center', fontSize : 24 }}>· · ·</Text>
            {props.title && <H2>{props.title}</H2>}
            {props.children}
        </View>
    );
}