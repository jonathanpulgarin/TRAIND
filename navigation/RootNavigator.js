import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import TabNavigator from './TabNavigator';

const RootNavigator = () => {
  return (
    <NavigationContainer>
      <TabNavigator navigationOptions={{header: null}}/>
    </NavigationContainer>
  );
};

export default RootNavigator;