import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { View, Image, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import TabNavigator from './TabNavigator';
import Login from '../screens/Login';
import SignUp from '../screens/SignUp';

const RootNavigator = () => {
	return (
		<NavigationContainer>
			<View style={styles.navBarContainer}>
				<Image
					style={styles.logo}
					source={require('../assets/TRAIND.png')}
				/>
			</View>
			<TabNavigator navigationOptions={{ header: null }} />
		</NavigationContainer>
		// <Login></Login>
	);
};

const styles = StyleSheet.create({
    navBarContainer: {
        backgroundColor: 'white',
		paddingTop: 50,
		paddingBottom: 10,
		paddingLeft: 20
    },
	logo: {
		width: 80,
		resizeMode: 'contain'
	}
});

export default RootNavigator;