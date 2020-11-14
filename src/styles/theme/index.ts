import breakpoints, { Breakpoints } from './breakpoints';
import colors, { Colors } from './colors';

export interface Theme {
  breakpoints: Breakpoints;
  colors: Colors;
}

const theme: Theme = {
  breakpoints,
  colors,
};

export default theme;
