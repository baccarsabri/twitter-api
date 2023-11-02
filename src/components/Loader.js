import {StyleSheet, View} from 'react-native';
import React from 'react';
import {ActivityIndicator, Modal, Portal, Text} from 'react-native-paper';
import Colors from '../constants/Colors';
import Sizes from '../constants/Sizes';
import {scale} from 'react-native-size-matters';

const Loader = ({open = false, text = 'Loading'}) => {
  return (
    <Portal>
      <Modal visible={open}>
        <View style={styles.root}>
          <View style={styles.loader_wrap}>
            <ActivityIndicator color="#fff" size={Sizes.hp('5%')} />
            <Text style={styles.text}>{text}</Text>
          </View>
        </View>
      </Modal>
    </Portal>
  );
};

export default Loader;

const styles = StyleSheet.create({
  root: {
    backgroundColor: Colors.THEME_COLOR2,
    height: Sizes.hp('10%'),
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: Sizes.wp('10%'),
  },
  loader_wrap: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    color: '#fff',
    marginLeft: 15,
    fontSize: scale(18),
  },
});
