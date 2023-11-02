import {StyleSheet, View} from 'react-native';
import React from 'react';
import {scale} from 'react-native-size-matters';
import {Text} from 'react-native-paper';
import Colors from '../constants/Colors';
import Sizes from '../constants/Sizes';
const HeaderTitle = ({title}) => {
  return <Text style={styles.title}>{title}</Text>;
};

export default HeaderTitle;

const styles = StyleSheet.create({
  title: {
    color: Colors.WHITE,
    fontSize: scale(16),
    fontFamily: 'Electrolux-Sans-Semibold',
    textAlign: 'center',
    position: 'absolute',
    top: 12,
    width: Sizes.wp(100),
    textAlign:'center',
    zIndex:-100
  },
});
