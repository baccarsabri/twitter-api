import {Pressable, StyleSheet, View} from 'react-native';
import React, {useEffect} from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import Colors from '../constants/Colors';
import {Text} from 'react-native-paper';
const CustomSelectInput = ({
  value,
  onPress = () => {},
  arrow = false,
  placeholder = 'placeholder',
  arrowText = '',
}) => {
  return (
    <Pressable
      onPress={onPress}
      style={[
        styles.input_root,
        value ? {borderColor: Colors.THEME_COLOR2} : null,
      ]}>
      <Text
        style={[
          styles.text1,
          value
            ? {
                position: 'absolute',
                top: -9,
                left: 10,
                fontSize: 12,
                color: Colors.THEME_COLOR2,
              }
            : null,
        ]}>
        {placeholder}
      </Text>
      {value ? (
        <Text
          style={[
            styles.text1,
            value ? {color: Colors.THEME_TEXT, fontWeight: '500'} : null,
          ]}>
          {value}
        </Text>
      ) : null}
      {arrow ? (
        <MaterialIcons name="keyboard-arrow-down" style={styles.icon} />
      ) : null}
      {arrowText ? (
        <Text
          style={[
            styles.text1,
            {color: Colors.THEME_TEXT, fontWeight: '300', fontSize: 14},
          ]}>
          {arrowText}
        </Text>
      ) : null}
    </Pressable>
  );
};

export default CustomSelectInput;

const styles = StyleSheet.create({
  input_root: {
    backgroundColor: Colors.WHITE,
    height: 50,
    borderColor: '#A19DBD',
    borderWidth: 1,
    borderRadius: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  text1: {
    color: '#83829A',
    fontSize: 16,
    fontWeight: '400',
    backgroundColor: '#fff',
    paddingHorizontal: 3,
  },
  icon: {
    color: '#83829A',
    fontSize: 30,
  },
});
