import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import P from '../content/P';
import H1 from '../content/H1';

export default function Lead() {
    return (
        <View style={styles.main}>
            <H1>Hello, I'm Dave!</H1>
            <P>I'm a <Text style={styles.i}>hybrid designer/developer</Text> (the unicorn does exist!) and I've built web apps for over 20 years. I've seen the internet go from construction sign gifs to augmented reality dinosaurs.</P>
            <P>Connecticut has been my home since the day I was born and I'm an avid fan of NASCAR, the New England Patriots and in my spare time I enjoy spending time with my family and the occasional sim race.</P>
        </View>
    );
}

const styles = StyleSheet.create({
    main : {
        padding : 20,
    },
    i : {
        fontStyle : 'italic',
        fontFamily : 'Lato-BlackItalic'
    }
});