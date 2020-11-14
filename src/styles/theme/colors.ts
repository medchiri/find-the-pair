export interface Colors {
  //* Brand
  primary: string;
  primaryLight: string;
  primaryDark: string;
  secondary: string;
  secondaryLight: string;
  secondaryDark: string;
  //* Contextual colors
  error: string;
  success: string;
  warning: string;
  info: string;
  //* Backgrounds
  grey: string;
  blackLight: string;
  black: string;
}

const colors: Colors = {
  //* Brand
  primary: '#941b9a',
  primaryLight: '#c753cb',
  primaryDark: '#62006b',
  secondary: '#cb5393',
  secondaryLight: '#ff84c3',
  secondaryDark: '#971e65',
  //* Contextual colors
  error: '#d90429',
  success: '#8ac926',
  warning: '#ff9f1c',
  info: '#118ab2',
  //* Backgrounds
  grey: '#6c757d',
  blackLight: '#212121',
  black: '#121212',
};

export default colors;
