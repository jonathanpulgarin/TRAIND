
import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity
} from 'react-native';

import { AntDesign } from '@expo/vector-icons';
import { colors } from '../constants/colors';

const TrainerArea = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Join Team Traind</Text>
            <Image style={styles.headerImage} source={{ uri: "https://images.pexels.com/photos/4056613/pexels-photo-4056613.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" }}></Image>
            <Text style={styles.boldDescription}>Gone are the days of desperately trying to recruit new clients. Join the TRAIND Team of instructors and have clients come to you.</Text>
            <Text style={styles.description}>Our platform provides a search engine and listing specs to help our interested members to find, book, and pay you directly for your services.</Text>
            <Text style={styles.description}>Welcome to TRAIND! The professional platform for all types of fitness instruction. </Text>
            <TouchableOpacity style={styles.button} activeOpacity={0.6}>
                <AntDesign name="plus" size={24} color={colors.primary} />
                <Text style={styles.buttonText}>BECOME A TRAINER</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        paddingHorizontal: 20,
        alignItems: 'center'
    },
    title: {
        fontSize: 24,
        fontWeight: "600",
        marginTop: 20,
        marginBottom: 20
    },
    headerImage: {
        width: "100%",
        height: 200,
        resizeMode: 'cover',
    },
    boldDescription: {
        marginVertical: 20,
        fontSize: 18,
        fontWeight: "600"
    },
    description: {
        marginVertical: 20,
        fontSize: 18
    },
    button: {
        flexDirection: 'row',
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderColor: colors.primary,
        borderWidth: 1,
        borderRadius: 25,
        marginTop: 20
    },
    buttonText: {
        fontSize: 14,
        color: colors.primary,
        textTransform: 'uppercase',
        marginTop: 4,
        marginLeft: 10
    }
});

export default TrainerArea;