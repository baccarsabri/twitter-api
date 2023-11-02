import {StyleSheet, View} from 'react-native';
import React from 'react';
import {verticalScale, scale, moderateScale} from 'react-native-size-matters';
import Colors from '../constants/Colors';
import {Text} from 'react-native-paper';
const DiaryCard = ({time, color, name, pu, timing}) => {
  return (
    <View style={styles.diary_Card_root}>
      {/* Left Side */}
      <View style={styles.diary_Card_left}>
        <View
          style={[
            styles.diary_Card_left_hours,
            {
              backgroundColor:
                color === 'blue'
                  ? 'rgba(0, 107, 212, 0.1)'
                  : color === 'orange'
                  ? 'rgba(254, 138, 12, 0.1)'
                  : color === 'red'
                  ? 'rgba(223, 17, 0, 0.1)'
                  : color === 'green'
                  ? 'rgba(0, 116, 47, 0.1)'
                  : null,
            },
          ]}>
          <Text
            style={[
              styles.diary_Card_left_hours_title1,
              {
                color:
                  color === 'blue'
                    ? 'rgba(0, 107, 212, 1)'
                    : color === 'orange'
                    ? 'rgba(254, 138, 12, 1)'
                    : color === 'red'
                    ? 'rgba(223, 17, 0, 1)'
                    : color === 'green'
                    ? 'rgba(0, 116, 47, 1)'
                    : null,
              },
            ]}>
            {time}
          </Text>
          <Text
            style={[
              styles.diary_Card_left_hours_title2,
              {
                color:
                  color === 'blue'
                    ? 'rgba(0, 107, 212, 1)'
                    : color === 'orange'
                    ? 'rgba(254, 138, 12, 1)'
                    : color === 'red'
                    ? 'rgba(223, 17, 0, 1)'
                    : color === 'green'
                    ? 'rgba(0, 116, 47, 1)'
                    : null,
              },
            ]}>
            Hours
          </Text>
        </View>
        <View>
          <Text style={styles.diary_Card_left_title1}>{name}</Text>
          <Text style={styles.diary_Card_left_title2}>{timing}</Text>
        </View>
      </View>
      {/* Right Side */}
      <Text style={{color: 'rgba(245, 130, 32, 1)'}}>{pu}</Text>
    </View>
  );
};

export default DiaryCard;

const styles = StyleSheet.create({
  diary_Card_root: {
    backgroundColor: Colors.WHITE,
    padding: moderateScale(10),
    borderRadius: moderateScale(10),
    elevation: 6,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: verticalScale(6),
    marginHorizontal: moderateScale(20),
  },
  diary_Card_left: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  diary_Card_left_hours: {
    height: moderateScale(60),
    width: moderateScale(60),
    borderRadius: moderateScale(8),
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: moderateScale(10),
  },
  diary_Card_left_hours_title1: {
    fontWeight: '600',
    fontSize: scale(16),
    lineHeight: scale(16),
    fontFamily: 'Electrolux-Sans-Semibold',
  },
  diary_Card_left_hours_title2: {
    fontWeight: '300',
    fontSize: scale(13),
    lineHeight: scale(15),
  },

  diary_Card_left_title1: {
    color: Colors.THEME_TEXT,
    fontWeight: '600',
    fontSize: scale(16),
    fontFamily: 'Electrolux-Sans-Semibold',
  },
  diary_Card_left_title2: {
    color: '#83829A',
    fontWeight: '400',
    fontSize: scale(14),
  },
});
