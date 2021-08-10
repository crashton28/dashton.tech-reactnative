import React, { useRef } from 'react';
import { StyleSheet, Text, View, Animated, Dimensions, Image } from 'react-native';
import orderBy from 'lodash/orderBy';
import CONSTANTS from '../../constants';
import Section from '../Section';

import DATA from '../../data/experience';

const getYear = (date) => {
    let newDate = new window.Date(date);
    return newDate.toLocaleString('en-us', { year: 'numeric' });
}
const getMonth = (date) => {
    let newDate = new window.Date(date);
    return newDate.toLocaleString('en-us', { month: 'short' });
}

export default function Experience() {
    let DATA_ORDERED = orderBy(DATA, ['date.from'], ['desc','desc']);
    return (
        <Section title="Experience">
            {DATA_ORDERED.map((company, idx) => {
                return (
                    <View key={idx} style={styles.container}>
                        <View style={styles.timeframe}>
                            <Text style={styles.timeframeText}>
                                <Text>{getMonth(company.date.from)} </Text>
                                <Text style={styles.year}>{getYear(company.date.from)}</Text>
                                <Text> - </Text>
                                {company.date.to ? (
                                    <>
                                        <Text>{getMonth(company.date.to)} </Text>
                                        <Text style={styles.year}>{getYear(company.date.to)}</Text>
                                    </>
                                ) : <Text style={styles.year}>Today</Text>}
                            </Text>
                        </View>
                        <View style={styles.details}>
                            <Text>{company.employer.name}</Text>
                        </View>
                    </View>
                )
            })}
        </Section>
    );
}

const styles = StyleSheet.create({
    container : {
        paddingVertical : 20,
    },
    timeframe : {
        backgroundColor : CONSTANTS.COLOR_PRIMARY,
        borderRadius: 20,
        flex : 1,
        flexDirection : 'row',
        justifyContent: 'center',
        overflow: 'hidden',
        paddingHorizontal : 20,
        paddingVertical : 4,
        marginHorizontal : 20,
    },
    timeframeText : {
        color : '#fff',
        fontSize : 16,
        textTransform: 'uppercase',
    },
    year : {
        fontFamily : 'Lato-Black',
    },
    details : {
        padding : 20
    }
});