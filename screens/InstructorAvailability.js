
import React from 'react';
import {
	View,
	Text,
	StyleSheet,
	ScrollView,
	Dimensions
} from 'react-native';

import { data } from './data';
import { colors } from '../constants/colors';

const WIDTH = Dimensions.get('window').width;

const InstructorAvailability = ({navigation, route}) => {
	return (
		<View style={styles.container}>
            <Text>{route.params.name}'s Availability</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'white',
	},
});

export default InstructorAvailability;