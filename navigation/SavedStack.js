import React from 'react';
import Saved from '../screens/Saved'
import Search from '../screens/Search';
import TrainingSession from '../screens/TrainingSession';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const SavedStack = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="SavedHome" component={Saved} />
            <Stack.Screen name="SavedTrainingSession" component={TrainingSession} />
        </Stack.Navigator>
    );
}

export default SavedStack;