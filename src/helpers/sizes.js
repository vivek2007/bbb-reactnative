import { ms } from 'react-native-size-matters';

const fontScale = 0.1;
const iconScale = 1.5;

const fontSize = {
  minix: 8,
  mini: 10,
  smallx: 12,
  small: 14,
  regular: 16,
  large: 18,
  largex: 20,
  xxlarge: 22,
  xxmini: 7,
  xxsmall: 10.5,
  // minix: ms(8, fontScale),
  // mini: ms(10, fontScale),
  // smallx: ms(12, fontScale),
  // small: ms(14, fontScale),
  // regular: ms(16, fontScale),
  // large: ms(18, fontScale),
  // largex: ms(20, fontScale),
  // xxlarge: ms(22, fontScale),
  // xxmini: ms(7, fontScale),
  // xxsmall: ms(10.5, fontScale),
};

const iconSize = {
  mini: ms(16, iconScale),
  small: ms(18, iconScale),
  regular: ms(25, iconScale),
  large: ms(28, iconScale),
  xlarge: ms(30, iconScale),
};

export { fontSize, iconSize };
