import {StyleSheet, View} from 'react-native';
import React from 'react';
import {verticalScale, scale, moderateScale} from 'react-native-size-matters';
import Colors from '../constants/Colors';
import {Text} from 'react-native-paper';
import {
  formatCurrency,
  getSupportedCurrencies,
} from "react-native-format-currency";
import moment from 'moment';

const PaymentCard = ({hours, minutes, name, currency, type, amount, paymentDate}) => {

  const [valueFormattedWithSymbol, valueFormattedWithoutSymbol, symbol] =
  formatCurrency({ amount: amount.toFixed(2), code: currency });

  const paymentDateDisplay = moment(paymentDate).format(moment.localeData().longDateFormat('L'))

  return (
    <View style={styles.payment_Card_root}>
      {/* Left Side */}
      <View style={styles.payment_Card_left}>
        <View style={[styles.payment_Card_left_hours]}>          
          {minutes > 0 &&
            <Text style={[styles.payment_Card_left_hours_title1]}>{hours}:{minutes}</Text>
          }
          {minutes == 0 &&
            <Text style={[styles.payment_Card_left_hours_title1]}>{hours}</Text>
          }
          <Text style={[styles.payment_Card_left_hours_title2]}>Hours</Text>
        </View>
        <View style={styles.payment_title}>
          <Text style={styles.payment_Card_left_title1}>{valueFormattedWithSymbol}</Text>
          <Text style={styles.payment_Card_left_title2}>{name}</Text>
          <Text style={styles.payment_Card_left_title3}>{paymentDateDisplay}</Text>
        </View>
      </View>
      {/* Right Side */}
      <View style={styles.payment_right}>
        <Text style={styles.payment_right_title}>{type}</Text>
      </View>
    </View>
  );
};

export default PaymentCard;

const styles = StyleSheet.create({
  payment_Card_root: {
    backgroundColor: Colors.WHITE,
    paddingVertical: moderateScale(10),
    paddingHorizontal: moderateScale(15),
    borderRadius: moderateScale(10),
    elevation: 6,
    flexDirection: 'row',
    justifyContent: 'space-between',

    marginVertical: verticalScale(6),
    marginHorizontal: moderateScale(12),
  },
  payment_Card_left: {
    flexDirection: 'row',
  },
  payment_title: {
    marginTop: verticalScale(5),
  },
  payment_Card_left_hours: {
    height: moderateScale(70),
    width: moderateScale(60),
    borderRadius: moderateScale(8),
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: moderateScale(10),
    backgroundColor: 'rgba(101,57,138,0.1)',
  },
  payment_Card_left_hours_title1: {
    fontWeight: '600',
    fontSize: scale(16),
    lineHeight: scale(16),
    color: '#65398A',
    fontFamily: 'Electrolux-Sans-Semibold',
  },
  payment_Card_left_hours_title2: {
    fontWeight: '200',
    fontSize: scale(13),
    lineHeight: scale(15),
    color: '#65398A',
  },

  payment_Card_left_title1: {
    color: Colors.THEME_TEXT,
    fontWeight: '600',
    fontSize: scale(16),
    fontFamily: 'Electrolux-Sans-Semibold',
  },
  payment_Card_left_title2: {
    color: Colors.THEME_TEXT,
    fontWeight: '600',
    fontSize: scale(14),
  },
  payment_Card_left_title3: {
    color: '#83829A',
    fontWeight: '400',
    fontSize: scale(14),
  },
  payment_right: {
    paddingTop: verticalScale(5),
  },
  payment_right_title: {
    color: 'rgba(245, 130, 32, 1)',
  },
});
