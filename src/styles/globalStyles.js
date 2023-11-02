import {StyleSheet} from 'react-native';
import {scale} from 'react-native-size-matters';
import Colors from '../constants/Colors';
import Sizes from '../constants/Sizes';
const globalsyles = StyleSheet.create({
  float_add_icon_root: {
    position: 'absolute',
    bottom: Sizes.hp('2%'),
    right: Sizes.wp('3%'),
    backgroundColor: Colors.THEME_COLOR2,
    height: Sizes.hp('7%'),
    width: Sizes.hp('7%'),
    borderRadius: Sizes.hp('3.5%'),
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 10,
    zIndex: 5,
  },
  float_add_icon: {
    color: Colors.WHITE,
    fontSize: scale(30),
  },
});
export default globalsyles;
