import { css } from 'styled-components';

import colors from '../theme/colors';

const variables = Object.entries(colors).reduce((acc, [key, value]) => {
  const newVariable = `--${key}: ${value};`;
  acc += newVariable;
  return acc;
}, '');

export const ColorsCssVariables = css`
  :root {
    ${variables}
  }
`;
