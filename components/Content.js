import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import P from './content/P';
import CONSTANTS from '../constants';
import Portfolio from './sections/Portfolio';

export default function Content() {
    return (
        <View>
            <View style={{padding : 20}}>
                <Text style={styles.main}>
                    <Text style={{
                        color : CONSTANTS.COLOR_PRIMARY,
                        fontFamily: 'Lato-BlackItalic',
                        fontSize : 24,
                    }}>
                        Hello, I'm Dave!
                        {"\n"}
                        {"\n"}
                    </Text>
                    <P>I'm a <Text style={styles.i}>hybrid designer/developer</Text> (the unicorn does exist!) and I've built web apps for over 20 years. I've seen the internet go from construction sign gifs to augmented reality dinosaurs.</P>
                    <P>Connecticut has been my home since the day I was born and I'm an avid fan of NASCAR, the New England Patriots and in my spare time I enjoy spending time with my family and the occasional sim race.</P>
                </Text>
            </View>
            <Portfolio />
        </View>
    );
}

const styles = StyleSheet.create({
    main : {
        fontFamily : 'Lato-LightItalic',
        fontSize : 20
    },
    i : {
        fontStyle : 'italic',
        fontFamily : 'Lato-BlackItalic'
    }
});