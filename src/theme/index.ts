import breakpoints, { Breakpoints } from './breakpoints';

export interface Theme {
  breakpoints: Breakpoints;
}

const theme: Theme = {
  breakpoints,
};

export default theme;
