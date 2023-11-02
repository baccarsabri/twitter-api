import {StyleSheet, View, TouchableOpacity} from 'react-native';
import React from 'react';
import Sizes from '../constants/Sizes';
import {scale} from 'react-native-size-matters';
import Colors from '../constants/Colors';
import {Text} from 'react-native-paper';
const Button = ({
  props,
  width =  177,
  height = 48,
  textColor = '#fff',
  buttontext = 'Login',
  customStyle,
  onPress = () => {},
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      {...props}
      style={{
        width: width,
        height: height,
        backgroundColor: Colors.THEME_COLOR2,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: Sizes.hp('1.5%'),
        marginVertical: Sizes.hp('2%'),
        alignSelf: 'center',
        ...customStyle,
      }}>
      <Text style={{color: textColor, fontSize: scale(16), textTransform: 'uppercase'}}>{buttontext}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({});
