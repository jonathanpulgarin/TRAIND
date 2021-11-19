import React from 'react';
import { View, ImageBackground, Text, StyleSheet, ScrollView } from 'react-native';

import InstructorCard from './InstructorCard';

import { fakePostData } from '../fakePostData';
import { colors } from '../constants/colors';

const FeaturedSection = (props) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Featured Trainers</Text>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                <View style={styles.emptyView}></View>

                {fakePostData.map((item) => (
                    <InstructorCard key={item.id} postData={item}></InstructorCard>
                ))}
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        backgroundColor: colors.secondary,
        paddingTop: 10,
        paddingBottom: 20
    },
    title: {
        fontSize: 24,
        fontWeight: "600",
        marginBottom: 10,
        marginLeft: 40
    },
    emptyView: {
        width: 40,
    }
});

export default FeaturedSection;