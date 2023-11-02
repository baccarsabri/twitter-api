import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import NavigationName from '../constants/NavigationName';
import {
  ForgetPassword,
  Login,
  ResetPassword,
  SignupSelect,
  Singup,
  Terms,
  VerifyOtp,
  WrongApp,
} from '../screens';
const Stack = createStackNavigator();
const AuthStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={NavigationName.LOGIN} component={Login} />
      <Stack.Screen name={NavigationName.SIGNUP} component={Singup} />
      <Stack.Screen
        name={NavigationName.FORGET_PASSWORD}
        component={ForgetPassword}
      />
      <Stack.Screen
        name={NavigationName.RESET_PASSWORD}
        component={ResetPassword}
      />
      <Stack.Screen
        name={NavigationName.SIGNUP_SELECT}
        component={SignupSelect}
      />
      <Stack.Screen name={NavigationName.WRONG_APP} component={WrongApp} />
      <Stack.Screen name={NavigationName.VERIFY_OTP} component={VerifyOtp} />
    </Stack.Navigator>
  );
};

export default AuthStack;
