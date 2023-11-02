import {StyleSheet, View} from 'react-native';
import React from 'react';
import {scale} from 'react-native-size-matters';
import {Text} from 'react-native-paper';
import Colors from '../constants/Colors';

const AuthScreensTitle = ({title}) => {
  return <Text style={styles.title}>{title}</Text>;
};

export default AuthScreensTitle;

const styles = StyleSheet.create({
  title: {
    color: Colors.THEME_TEXT,
    fontSize: scale(18),
    textAlign: 'center',
    fontFamily: 'Electrolux-Sans-Bold',   
    margin: 12,    
  },
});
