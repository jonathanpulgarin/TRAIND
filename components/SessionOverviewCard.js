
import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    TouchableOpacity,
    Image
} from 'react-native';

import { Ionicons, Feather } from '@expo/vector-icons';
import { colors } from '../constants/colors';

const SessionOverviewCard = (props) => {
    const sessionData = props.sessionData;
    return (
        <View style={styles.trainerInfoContainer}>
            <Image style={styles.trainerImage} source={{ uri: sessionData.image_url }} resizeMode="cover"></Image>
            <View style={styles.quickTrainerInfo}>
                <Text style={styles.quickTrainerText}>{sessionData.location}</Text>
                <Text style={styles.quickTrainerText}>{sessionData.cost}</Text>
                <View style={styles.trainerRatingInfo}>
                    <Ionicons name="md-star" size={24} color={colors.orange} />
                    <Text style={styles.ratingValue}>{sessionData.ratingValue}</Text>
                    <Text style={styles.numberOfRatings}>({sessionData.numberOfRatings})</Text>
                </View>
            </View>
            <Text style={styles.trainerSubject}>{sessionData.subject}</Text>
            <Text style={styles.trainerFullDescription}>{sessionData.fullDescription}</Text>
            <View style={styles.keyAttributesContainer}>
                {
                    sessionData.keyAttributes.map((item, index) => {
                        return <View key={index} style={styles.keyAttributesTextContainer}>
                            <Feather name="check" size={24} color="white" />
                            <Text style={styles.keyAttributesText}>{item}</Text>
                        </View>
                    })
                }
            </View>
            <View style={{ alignItems: 'center' }}>
                <TouchableOpacity style={styles.bookingButton}>
                    <Text style={styles.bookingButtonText}>BOOK NOW</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    trainerInfoContainer: {
        paddingHorizontal: 20,
        paddingVertical: 20,
        borderRadius: 30,
        borderColor: "black",
        borderWidth: 1,
        width: "100%",
        marginTop: 50
    },
    trainerImage: {
        width: 100,
        height: 100,
        borderRadius: 50
    },
    quickTrainerInfo: {
        position: 'absolute',
        right: 20,
        top: 20,
        alignItems: 'center'
    },
    quickTrainerText: {
        fontWeight: "300",
        fontSize: 16,
        marginBottom: 10
    },
    trainerRatingInfo: {
        flexDirection: 'row',
        borderColor: colors.orange,
        borderWidth: 1,
        borderRadius: 20,
        paddingVertical: 5,
        paddingHorizontal: 10
    },
    ratingValue: {
        fontSize: 16,
        fontWeight: "600",
        marginLeft: 5,
        marginRight: 5,
        marginTop: 3
    },
    numberOfRatings: {
        fontSize: 10,
        marginTop: 6
    },
    trainerSubject: {
        fontSize: 18,
        fontWeight: "600",
        marginTop: 20,
        marginBottom: 20
    },
    trainerFullDescription: {
        fontSize: 18,
    },
    keyAttributesContainer: {
        backgroundColor: colors.primary,
        paddingHorizontal: 20,
        paddingVertical: 20,
        borderRadius: 20,
        marginTop: 20
    },
    keyAttributesTextContainer: {
        flexDirection: 'row',
    },
    keyAttributesText: {
        color: "white",
        fontSize: 16,
        fontWeight: "600",
        textTransform: 'uppercase',
        marginLeft: 10
    },
    bookingButton: {
        backgroundColor: colors.primary,
        borderRadius: 20,
        marginTop: 20,
        alignItems: 'center'
    },
    bookingButtonText: {
        fontSize: 18,
        fontWeight: "600",
        color: "white",
        paddingHorizontal: 15,
        paddingVertical: 10
    },
});

export default SessionOverviewCard;