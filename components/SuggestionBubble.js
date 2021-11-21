import React from 'react';
import { View, ImageBackground, Text, TextInput, StyleSheet, TouchableOpacity, Dimensions, Alert } from 'react-native';
import { colors } from '../constants/colors'

const WIDTH = Dimensions.get('window').width;

const SuggestionBubble = (props) => {

    return (
        <TouchableOpacity style={styles.container}>
            <Text style={styles.text}>{props.innerText}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        borderWidth: 2,
        borderColor: "black",
        borderRadius: 25,
        paddingHorizontal: 15,
        paddingVertical: 10,
        marginRight: 5,
    },
    text: {
        textTransform: "uppercase"
    }
});

export default SuggestionBubble;