import {StyleSheet, Image, View} from 'react-native';
import React from 'react';
import Images from '../constants/Images';
import Sizes from '../constants/Sizes';
import {Dimensions} from 'react-native';
const HeaderForTerms = ({marginTop = 4}) => {
  return (
    <View>
      <Image source={Images.header} style={styles.imgCircles} />
   
    </View>
  );
};

export default HeaderForTerms;

const styles = StyleSheet.create({
  imgCircles: {
    width: '100%',
    // Without height undefined it won't work
    height: undefined,
    // figure out your image aspect ratio
    aspectRatio: 428 / 105,
  },
  imgLogo: {
    height: Sizes.hp('7%'),
    width: Sizes.wp('90%'),
    alignSelf: 'center',
    resizeMode: 'contain',
  },
});
