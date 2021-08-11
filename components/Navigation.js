import React from 'react';
import { View, Text } from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';
import CONSTANTS from '../constants';
import ROUTES from '../routes';

export default function Navigation({ state, descriptors, navigation }) {
    let currentIndex = state.index;
    return (
        <SafeAreaView style={{
                flex : 1,
                paddingHorizontal : 20,
                position : 'absolute',
                bottom : 0,
                width : '100%'
            }}
            forceInset={{ top: 'never', bottom: 'always' }}
        >
            <View style={{
                backgroundColor : CONSTANTS.COLOR_PRIMARY,
                borderRadius : 20,
                flex : 1,
                flexDirection: 'row',
                justifyContent: 'stretch',
                padding : 4,
                shadowOffset: {width: 0, height: 2},
                shadowOpacity: .3,
                shadowRadius : 2,
                width : '100%'
            }}>
                {ROUTES.map((route, idx) => {
                    return (
                        <View
                            key = {idx}
                            style={{
                                backgroundColor : currentIndex === idx ? '#fff' : CONSTANTS.COLOR_PRIMARY,
                                borderRadius : 20,
                                flex : 1,
                            }}
                        >
                            <Text
                                onPress={() => navigation.navigate(route.name)}
                                style={{
                                    color : currentIndex === idx ? '#1d1e1f' : '#fff',
                                    fontFamily : 'Lato-Light',
                                    fontSize : 16,
                                    paddingVertical : 6,
                                    paddingHorizontal : 10,
                                    textAlign : 'center',
                                    textTransform : 'uppercase',
                                }}
                            >
                                {route.name}
                            </Text>
                        </View>
                    )
                })}
            </View>
        </SafeAreaView>
    );
}