import React from 'react';
import Home from '../screens/Home'
import Search from '../screens/Search';
import TrainingSession from '../screens/TrainingSession';
import InstructorAvailability from '../screens/InstructorAvailability';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const SearchStack = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="StartSearch" component={Home} />
            <Stack.Screen name="Search" component={Search} />
            <Stack.Screen name="TrainingSession" component={TrainingSession} />
            <Stack.Screen name="InstructorAvailability" component={InstructorAvailability} />
        </Stack.Navigator>
    );
}

export default SearchStack;