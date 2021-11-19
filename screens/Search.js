import React from 'react';
import { View, ImageBackground, Text, StyleSheet, TouchableOpacity, Dimensions, Alert } from 'react-native';

import { colors } from '../constants/colors'

const WIDTH = Dimensions.get('window').width;

const Search = () => {
    return (
        <View style={styles.container}>
            <TouchableOpacity>
                <View styles></View>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
});

export default Search;