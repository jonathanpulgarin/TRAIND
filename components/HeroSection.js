import React from 'react';
import { View, ImageBackground, Text, StyleSheet } from 'react-native';

const image = { uri: "https://images.pexels.com/photos/3822170/pexels-photo-3822170.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" };

const HeroSection = (props) => {
    return (
        <View style={styles.container}>
            <ImageBackground source={image} resizeMode="cover" style={styles.image}>
                <Text style={styles.title}>It's time to get TRAIND.</Text>
                <Text style={styles.description}>Find a trainer that is perfect for you, anywhere, anytime.</Text>
                <View style={styles.buttonContainer}>
                    <Text style={styles.button}>GET TRAIND</Text>
                </View>
            </ImageBackground>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0f0f0f',
        width: "100%",
    },
    image: {
        height: "300px",
        paddingVertical: "15px",
        paddingHorizontal: "20px"
    },
    title: {
        position: "absolute",
        fontSize: 24,
        fontWeight: "600",
    },
    description: {
        width: "300px",
        fontSize: 18,
        fontWeight: "500",
        marginTop: "40px"
    },
    buttonContainer: {
        width: "100%",
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
        backgroundColor: "#789948",
        paddingTop: 13,
        paddingBottom: 15,
        paddingHorizontal: 50,
        borderRadius: 50
    }
});

export default HeroSection;