import {StyleSheet, View} from 'react-native';
import React from 'react';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';
import Colors from '../constants/Colors';
import {Text} from 'react-native-paper';
const PaymentHeaderCard = ({title1, title2}) => {
  return (
    <View style={styles.root}>
      <View style={styles.divider} />
      <View style={styles.title}>
        <Text style={styles.title1}>{title1}</Text>
        <Text style={styles.title2}>{title2}</Text>
      </View>
    </View>
  );
};

export default PaymentHeaderCard;

const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  divider: {
    height: verticalScale(50),
    width: 5,
    borderRadius: 2,
    backgroundColor: Colors.THEME_COLOR2,
  },
  title: {
    marginLeft: moderateScale(8),
  },
  title1: {
    color: Colors.THEME_COLOR1,
    fontSize: scale(16),
    fontWeight: '600',
    fontFamily: 'Electrolux-Sans-Semibold',
  },
  title2: {
    color: Colors.THEME_COLOR1,
    fontWeight: '300',
    fontSize: scale(14),
  },
});
