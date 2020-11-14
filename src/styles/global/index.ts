import { createGlobalStyle } from 'styled-components';

import { Animations } from './animations';
import { ColorsCssVariables } from './colors';
import { GlobalClassNames } from './common';
import { Normalizer } from './normalizer';

const GlobalStyles = createGlobalStyle`
  ${ColorsCssVariables}
  ${Normalizer}
  ${GlobalClassNames}
  ${Animations}
`;

export default GlobalStyles;
