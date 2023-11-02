import {StyleSheet, View} from 'react-native';
import React from 'react';
import {TextInput, Text} from 'react-native-paper';
import Feather from 'react-native-vector-icons/Feather';
const CustomTextInput = ({
  label,
  onTextChange = () => {},
  value,
  keyboardType = 'default',
  autoCapitalize='none',
  showPassword = false,
  isPasswordInput = false,
  onPressShowPassword = () => {},
}) => {
  return (
    <>
      {isPasswordInput ? (
        <TextInput
          label={label}
          placeholderTextColor="#83829A"
          mode="outlined"
          secureTextEntry={!showPassword}
          keyboardType={keyboardType}
          autoCapitalize={autoCapitalize}
          style={styles.root}
          outlineColor="#A19DBD"
          value={value}
          onChangeText={onTextChange}
          right={
            <TextInput.Icon
              icon={showPassword ? 'eye' : 'eye-off'}
              onPress={onPressShowPassword}
            />
          }
        />
      ) : (
        <TextInput
          label={label}
          placeholderTextColor="#83829A"
          mode="outlined"
          keyboardType={keyboardType}
          style={styles.root}
          outlineColor="#A19DBD"
          value={value}
          onChangeText={onTextChange}
        />
      )}
    </>
  );
};

export default CustomTextInput;

const styles = StyleSheet.create({
  root: {
    backgroundColor: '#fff',
  },
});
