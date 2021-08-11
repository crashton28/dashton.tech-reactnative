import React, { useRef } from 'react';
import { StyleSheet, Text, View, ScrollView, SectionList, Image, Animated, Dimensions } from 'react-native';
import orderBy from 'lodash/orderBy';
import CONSTANTS from '../constants';
import Section from '../components/Section';
import { SvgCssUri } from 'react-native-svg';
import SafeAreaView from 'react-native-safe-area-view';

import DATA from '../data/experience';
import Highlights from '../components/Highlights';

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
        <ScrollView>
            <SafeAreaView forceInset={{ top: 'always', bottom: 'never' }}>
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
                                <View style={styles.header}>
                                    <View style={{flexShrink : 1}}>
                                        <Text style={styles.employer}>{company.employer.name}</Text>
                                        <Text style={styles.location}>{company.employer.location}</Text>
                                    </View>
                                    <SvgCssUri
                                        height={40}
                                        width="100"
                                        fill="#000"
                                        uri={company.employer.logo}
                                    />
                                </View>
                                <Text style={styles.title}>{company.title}</Text>
                                <Text style={styles.description}>{company.description}</Text>
                                {company.highlights && <Highlights data={company.highlights} />}
                                {company.positions && (
                                    <View>
                                        {company.positions.map((position, idx) => (
                                            <View key={idx}>
                                                <View style={{marginTop: 20}}>
                                                    <Text style={styles.timeframeTextAlt}>
                                                        <Text style={styles.year}>{getYear(company.date.from)}</Text>
                                                        <Text> - </Text>
                                                        {company.date.to ? (
                                                            <Text style={styles.year}>{getYear(company.date.to)}</Text>
                                                        ) : <Text style={styles.year}>Today</Text>}
                                                    </Text>
                                                    <Text>{position.title}</Text>
                                                </View>
                                                {position.highlights && <Highlights data={position.highlights} />}
                                            </View>
                                        ))}
                                    </View>
                                )}
                            </View>
                        </View>
                    )
                })}
                </Section>
            </SafeAreaView>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container : {
        flex : 1,
        flexDirection : 'column',
        paddingVertical : 20,
        fontFamily : 'Lato-Light',
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
        flex : 1,
        flexDirection : 'column',
        padding : 20
    },
    employer : {
        fontFamily : 'Lato-Black',
        fontSize : 20
    },
    location : {
        fontFamily : 'Lato-Light',
        fontSize : 16
    },
    header : {
        flex : 1,
        flexDirection : 'row',
        justifyContent : 'space-between',
        width : '100%'
    },
    title : {
        color : CONSTANTS.COLOR_PRIMARY,
        fontFamily : 'Lato-Black',
        fontSize : 24,
        marginVertical : 20,
    },
    description : {
        fontFamily : 'Lato-Light',
        fontSize : 20,
    },
    timeframeTextAlt : {
        textTransform : 'uppercase',
    }
});