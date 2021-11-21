import React from 'react';
import { View, ImageBackground, Text, StyleSheet, TouchableOpacity, Dimensions, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { colors } from '../constants/colors'

const WIDTH = Dimensions.get('window').width;

const image = { uri: "https://images.pexels.com/photos/3822170/pexels-photo-3822170.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" };

const HeroSection = () => {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <ImageBackground source={image} resizeMode="cover" style={styles.image}>
                <Text style={styles.title}>It's time to get TRAIND.</Text>
                <Text style={styles.description}>Find a trainer that is perfect for you, anywhere, anytime.</Text>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity onPress={() => navigation.navigate('Search')}>
                        <Text style={styles.button}>GET TRAIND</Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0f0f0f',
    },
    image: {
        height: 300,
        paddingVertical: 15,
        paddingHorizontal: 20
    },
    title: {
        fontSize: 24,
        fontWeight: "600",
    },
    description: {
        width: 300,
        fontSize: 18,
        fontWeight: "500",
        marginTop: 10
    },
    buttonContainer: {
        width: WIDTH,
        alignItems: "center",
        position: "absolute",
        bottom: 40,
    },
    button: {
        fontSize: 18,
        fontWeight: "bold",
        color: "white",
        textAlign: "center",
        fontWeight: "600",
        backgroundColor: colors.primary,
        paddingTop: 13,
        paddingBottom: 15,
        paddingHorizontal: 50,
        borderRadius: 25,
        overflow: 'hidden',
    }
});

export default HeroSection;