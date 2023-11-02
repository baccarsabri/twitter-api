import {Dimensions, Platform, PixelRatio} from 'react-native';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';

const {height, width} = Dimensions.get('window');

export function normalize(size, multiplier = 2) {
  const scale = (width / height) * multiplier;

  const newSize = size * scale;

  return Math.round(PixelRatio.roundToNearestPixel(newSize));
}

export default {
  height,
  width,
  hp: heightPercentageToDP,
  wp: widthPercentageToDP,
};

