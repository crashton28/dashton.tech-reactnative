import React from 'react';
import { View } from 'react-native';
import Lead from './sections/Lead';
import Highlights from './sections/Highlights';
import Experience from './sections/Experience';

export default function Content() {
    return (
        <View>
            <Lead />
            <Highlights />
            <Experience />
        </View>
    );
}