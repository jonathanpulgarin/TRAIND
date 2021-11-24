
import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    Dimensions,
    Image
} from 'react-native';

import { data, fakePostData } from './data';
import { colors } from '../constants/colors';

const TrainingSession = ({ navigation, route }) => {
    const sessionData = fakePostData[route.params.key];

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{sessionData.name}'s boi</Text>
            <View>
                <Image></Image>
                <View>
                    <Text>{sessionData.location}</Text>
                    <Text>{sessionData.cost}</Text>
                    <View>
                        <Image source={require('../assets/rating_star.png')}></Image>
                        <Text>{sessionData.ratingValue}</Text>
                        <Text>{sessionData.numberOfRatings}</Text>
                    </View>
                </View>
                <Text>{sessionData.subject}</Text>
                <Text>{sessionData.fullDescription}</Text>
                {/* <View>
                    {
                        sessionData.keyAttributes.map(item => {
                            return <Text>{item}</Text>
                        })
                    }
                </View> */}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
});

export default TrainingSession;