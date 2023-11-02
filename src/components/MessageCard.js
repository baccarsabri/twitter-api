import {StyleSheet, View, Image} from 'react-native';
import React from 'react';
import {verticalScale, scale, moderateScale} from 'react-native-size-matters';
import Colors from '../constants/Colors';
import {Text} from 'react-native-paper';
import Feather from 'react-native-vector-icons/Feather';
const MessageCard = ({img, title1, title2}) => {
  return (
    <View style={styles.message_Card_root}>
      {/* Left Side */}
      <View style={styles.message_Card_left}>
        <Image source={img} style={[styles.message_Card_left_img]} />

        <View style={styles.title_cont}>
          <Text style={styles.message_Card_left_title1}>{title1}</Text>
          <Text style={styles.message_Card_left_title2}>{title2}</Text>
        </View>
      </View>
    </View>
  );
};

export default MessageCard;

const styles = StyleSheet.create({
  message_Card_root: {
    backgroundColor: Colors.WHITE,
    paddingVertical: moderateScale(10),
    paddingHorizontal: moderateScale(15),
    borderRadius: moderateScale(10),
    elevation: 6,
    flexDirection: 'row',
    justifyContent: 'space-between',

    marginVertical: verticalScale(6),
    marginHorizontal: moderateScale(20),
  },
  message_Card_left: {
    flexDirection: 'row',
  },
  message_Card_left_img: {
    height: moderateScale(60),
    width: moderateScale(60),
    borderRadius: moderateScale(8),
    resizeMode: 'stretch',
    marginRight: moderateScale(10),
  },
  title_cont: {
    justifyContent: 'space-between',
    marginVertical: verticalScale(5),
  },
  message_Card_left_title1: {
    color: Colors.THEME_TEXT,
    fontWeight: '600',
    fontSize: scale(16),
    fontFamily: 'Electrolux-Sans-Semibold',
  },
  message_Card_left_title2: {
    color: 'rgba(245, 130, 32, 1)',
    fontWeight: '400',
    fontSize: scale(12),
  },
});
