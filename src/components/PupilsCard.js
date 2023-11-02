import {StyleSheet, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {verticalScale, scale, moderateScale} from 'react-native-size-matters';
import Colors from '../constants/Colors';
import {Text} from 'react-native-paper';
import Feather from 'react-native-vector-icons/Feather';
import { ColorsNAS } from 'react-native/Libraries/NewAppScreen';
const PupilsCard = ({img, title1, title2, onPressEdit}) => {
  return (
    <View style={styles.pupils_Card_root}>
      {/* Left Side */}
      <View style={styles.pupils_Card_left}>
        <Image source={img} style={[styles.pupils_Card_left_img]} />

        <View style={styles.title_cont}>
          <Text style={styles.pupils_Card_left_title1}>{title1}</Text>
          <Text style={styles.pupils_Card_left_title2}>{title2}</Text>
        </View>
      </View>
      {/* Right Side */}
      <TouchableOpacity style={styles.pupils_Card_right} onPress={onPressEdit}>
        <Feather name="edit" style={styles.pupils_Card_right_icon} />
        <Text style={styles.pupils_Card_right_title}>Edit</Text>
      </TouchableOpacity>
    </View>
  );
};

export default PupilsCard;

const styles = StyleSheet.create({
  pupils_Card_root: {
    backgroundColor: Colors.WHITE,
    paddingVertical: moderateScale(8),
    paddingHorizontal: moderateScale(15),
    borderRadius: moderateScale(10),
    elevation: 6,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: verticalScale(8),
    marginHorizontal: moderateScale(12),
  },
  pupils_Card_left: {
    flexDirection: 'row',
  },
  pupils_Card_left_img: {
    height: moderateScale(60),
    width: moderateScale(60),
    borderRadius: moderateScale(8),
    resizeMode: 'stretch',
    marginRight: moderateScale(10),
    borderWidth: 1,
    borderColor: Colors.lightPurple
  },
  title_cont: {
    marginTop: moderateScale(5),
  },
  pupils_Card_left_title1: {
    color: Colors.THEME_TEXT,
    fontWeight: '600',
    fontSize: scale(16),
    fontFamily: 'Electrolux-Sans-Semibold',
  },
  pupils_Card_left_title2: {
    color: '#83829A',
    fontWeight: '400',
    fontSize: scale(14),
  },
  pupils_Card_right: {
    flexDirection: 'row',
    marginTop: moderateScale(5),
  },
  pupils_Card_right_icon: {
    color: 'rgba(245, 130, 32, 1)',
    marginRight: 5,
    fontSize: scale(14),
    marginTop: scale(2),
  },
  pupils_Card_right_title: {
    color: 'rgba(245, 130, 32, 1)',
    fontSize: scale(14),
  },
});
