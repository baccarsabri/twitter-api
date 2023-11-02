import { View, Text, StatusBar } from 'react-native';
import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import NavigationName from '../constants/NavigationName';

import Colors from '../constants/Colors';

import Login from '../screens/Login';
import Home from '../screens/Home';

const Stack = createStackNavigator();
const Routes = () => {

  return (
    <>
      <StatusBar backgroundColor={Colors.THEME_COLOR2} />
      <NavigationContainer
        theme={{
          colors: {
            background: Colors.WHITE,
          },
        }}>
        <Stack.Navigator screenOptions={{ headerShown: false }}>

          <>
            <Stack.Screen
              name={NavigationName.LOGIN}
              component={Login}
            />
            <Stack.Screen
              name={NavigationName.HOME}
              component={Home}
            />



          </>

        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default Routes;
