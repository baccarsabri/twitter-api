import {StyleSheet, Image, View} from 'react-native';
import React from 'react';
import Images from '../constants/Images';
import Sizes from '../constants/Sizes';
import {Dimensions} from 'react-native';
const HeaderImage = ({marginTop = 4}) => {
  return (
    <View>
      <Image source={Images.header} style={styles.imgCircles} />
      <Image
        source={Images.logoIns}
        style={[styles.imgLogo, {marginTop: Sizes.hp(`${marginTop}%`)}]}
      />
    </View>
  );
};

export default HeaderImage;

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
