import React from 'react';
import { View, Text } from 'react-native';

export default function Highlights(props) {
    let data = props.data;

    if (!data) {
        return null;
    }

    return data.map((item, idx) => (
        <View style={{
            flexDirection: 'row',
            marginVertical: 10
        }} key={idx}>
            <Text style={{
                fontFamily: 'Lato-Light',
                fontSize : 16,
                marginRight: 4
            }}>•</Text>
            <Text style={{
                fontFamily: 'Lato-Light',
                fontSize : 16,
                flex: 1}}
            >
                {item}
            </Text>
        </View>
    ));
}