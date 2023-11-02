import {Dimensions} from 'react-native';
const {width, height} = Dimensions.get('screen');

/*
To make the screens pixel perfect with the design
- Screen height in figma = 926
- Screen width in figma = 428
*/
export const ScreenHeight = height;
export const ScreenWidth = width;
export const vertical = value => (value / 926) * height;
export const horizontal = value => (value / 428) * width;
