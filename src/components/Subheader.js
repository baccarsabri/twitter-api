import {StyleSheet} from 'react-native';
import React from 'react';
import {scale} from 'react-native-size-matters';
import {Text} from 'react-native-paper';
import { fonts } from '../../assets';
import Colors from '../constants/Colors';
const Subheader = ({title}) => {
  return <Text style={styles.title}>{title}</Text>;
};

export default Subheader;

const styles = StyleSheet.create({
  title: {
    fontSize: scale(14),
    color: Colors.gray,
    fontFamily: fonts.Semibold,
  },
});
