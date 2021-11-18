import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import TestComponent from '../components/TestComponent';

const Messages = () => {
	return (
		<View style={styles.container}>
			<View style={styles.contentContainer}>
				<Text style={styles.title}>Messages</Text>
			</View>
			<TestComponent style={styles.test}></TestComponent>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#0f0f0f',
	},
	contentContainer: {
		marginTop: 50,
		alignItems: 'center',
		paddingHorizontal: 20,
	},
	title: {
		fontSize: 20,
		color: '#fff',
	},
	test: {
		marginBottom: 50
	}
});

export default Messages;