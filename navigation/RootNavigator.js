import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import TabNavigator from './TabNavigator';
import Login from '../screens/Login';
import SignUp from '../screens/SignUp';

const RootNavigator = () => {
	return (
		// <NavigationContainer>
		// 	<TabNavigator navigationOptions={{ header: null }} />
		// </NavigationContainer>
		<Login></Login>
	);
};

export default RootNavigator;