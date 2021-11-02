import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from '../../screens/Home';
import Messages from '../../screens/Messages';
import Account from '../../screens/Account';

import { Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

const screenOptions = (route, color) => {
	let iconName;

	switch (route.name) {
		case 'Home':
			iconName = 'search';
			break;
		case 'Calendar':
			iconName = 'calendar';
			break;
		case 'Saved':
			iconName = 'clipboard';
			break;
		case 'Workouts':
			iconName = 'bicycle';
			break;
		case 'Messages':
			iconName = 'chatbubbles';
			break;
		case 'Account':
			iconName = 'person';
			break;
		default:
			break;
	}

	return <Ionicons name={iconName} color={color} size={24} />;
};

const TabNavigator = () => {
	return (
		// <Tab.Navigator screenOptions={{tabBarShowLabel: false,
		// tabBarActiveTintColor: "#789948",
		// tabBarInactiveTintColor: "black"},
		// }>
		<Tab.Navigator
			screenOptions={({ route }) => ({
				tabBarIcon: ({ color }) => screenOptions(route, color),
				tabBarShowLabel: false,
				tabBarActiveTintColor: "#789948",
				tabBarInactiveTintColor: "black"
			})}>

			<Tab.Screen name="Home" component={Home} />
			<Tab.Screen name="Saved" component={Messages} />
			<Tab.Screen name="Workouts" component={Account} />
			<Tab.Screen name="Messages" component={Account} />
			<Tab.Screen name="Calendar" component={Account} />
			<Tab.Screen name="Account" component={Account} />
		</Tab.Navigator >
	);
};

export default TabNavigator;