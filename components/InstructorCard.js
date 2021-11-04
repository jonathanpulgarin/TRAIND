import React from 'react';
import { View, ImageBackground, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';

import { Ionicons } from '@expo/vector-icons';
import { colors } from '../constants/colors';

const InstructorCard = (props) => {
    return (
        <TouchableOpacity style={styles.container}>
            <View>
                <ImageBackground source={{uri: props.postData.image_url}} resizeMode="cover" style={styles.imageContainer}>
                    <View style={styles.ratingContainer}>
                        <Image source={require('../assets/rating_star.png')}></Image>
                        <Text style={styles.ratingValue}>{props.postData.ratingValue}</Text>
                        <Text style={styles.numberOfRatings}>({props.postData.numberOfRatings})</Text>
                    </View>
                </ImageBackground>
                <View style={styles.cardInfoContainer}>
                    <View style={styles.cardInfoSection}>
                        <Text style={styles.trainingType}>{props.postData.trainingType}</Text>
                        <Text style={styles.location}>{props.postData.location}</Text>
                    </View>
                    <View style={styles.cardInfoSection}>
                        <View>
                            <Text style={{ fontSize: 10 }}>with</Text>
                            <Text style={{ fontSize: 24 }}>{props.postData.name}</Text>
                        </View>
                        <View style={styles.costContainer}>
                            <Text style={styles.costValue}>{props.postData.cost}</Text>
                            <Ionicons style={styles.calendarIcon} name={"calendar"} color={"black"} size={24} />
                        </View>
                    </View>
                    <Text style={{ marginTop: 10 }}>{props.postData.description}</Text>
                </View>
            </View>
            <Image
                style={styles.tinyLogo}
                source={require('../assets/heart_empty.png')}
            />
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
        width: 298,
        marginRight: 10,
        borderRadius: 16,
        overflow: "hidden"
    },
    tinyLogo: {
        position: "absolute",
        right: 10,
        top: 10
    },
    imageContainer: {
        height: 180
    },
    ratingContainer: {
        position: "absolute",
        bottom: 10,
        right: 10,
        backgroundColor: "rgba(255, 255, 255, 0.4)",
        paddingHorizontal: 5,
        paddingVertical: 5,
        borderRadius: 30,
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    ratingValue: {
        fontSize: 18,
        fontWeight: "600",
        marginLeft: 5,
        margin: 2
    },
    numberOfRatings: {
        fontSize: 10,
        marginLeft: 3,
        marginTop: 6
    },
    cardInfoContainer: {
        fontSize: 16,
        fontWeight: "300",
        paddingTop: 10,
        paddingLeft: 20,
        paddingRight: 20,
        paddingBottom: 10
    },
    cardInfoSection: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop: 5
    },
    trainingType: {
        backgroundColor: "black",
        color: "white",
        paddingHorizontal: 15,
        paddingVertical: 3,
        fontSize: 16,
        fontWeight: "600",
        borderRadius: 13,
        overflow: 'hidden'
    },
    location: {
        position: "absolute",
        right: 0,
        fontSize: 16,
        fontWeight: "400",
        marginTop: 3
    },
    costContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        position: "absolute",
        right: 0
    },
    calendarIcon: {
        backgroundColor: colors.brown,
        paddingVertical: 4,
        paddingHorizontal: 5,
        borderRadius: 17,
        overflow: 'hidden'
    },
    costValue: {
        marginRight: 10,
        marginTop: 12,
        fontSize: 10,
        fontWeight: "400"
    }
});

export default InstructorCard;