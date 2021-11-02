import React from 'react';
import { View, ImageBackground, Text, StyleSheet } from 'react-native';

const ActivityTypeImagePost = (props) => {
	return (
		<View style={styles.container}>
			<ImageBackground source={props.image} resizeMode="cover" style={styles.image}>
                <Text style={styles.title}>{props.title}</Text>
            </ImageBackground>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#0f0f0f',
        width: "100%",
        borderRadius: '16px',
        overflow: 'hidden',
        marginBottom: "20px"
	},
	image: {
        height: "300px",
        alignItems: "center"
    },
    title: {
        position: "absolute",
        fontSize: 18,
        fontWeight: "600",
        color: "white",
        bottom: 30,
        textAlign: "center",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        paddingTop: 7,
        paddingBottom: 10,
        paddingHorizontal: 20,
        borderRadius: 50
    },
});

export default ActivityTypeImagePost;