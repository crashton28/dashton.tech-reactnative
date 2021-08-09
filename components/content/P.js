import React from 'react';
import { Text } from 'react-native';

export default function P(props) {
    return (
        <Text>
            {props.children}
            {"\n"}
            {"\n"}
        </Text>
    );
}