import styled, { css } from 'styled-components';

import { getCssValue } from 'src/styles/functions';
import { CustomValueType } from 'src/types';
import { AlignItemsType } from '../types';

interface GetColumnValue {
  (value: string | number): string;
}

const getColumnValue: GetColumnValue = value => {
  if (typeof value === 'number') {
    const newValue = parseFloat(((value / 12) * 100).toFixed(4));
    return `
      flex: 0 0 ${newValue}%;
      max-width: ${newValue}%;
    `;
  } else if (value === 'col') {
    return `
    flex-basis: 0;
    flex-grow: 1;
    max-width: 100%;
    `;
  }
  return `
    flex: 0 0 auto;
    width: auto;
    max-width: 100%;
  `;
};

export type ColumnSize = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 'auto' | 'col';

export interface ColumnProps {
  value?: CustomValueType<ColumnSize>;
  order?: CustomValueType<number>;
  alignSelf?: CustomValueType<AlignItemsType>;
}

const Column = styled.div<ColumnProps>(
  ({ theme, value = 'auto', order, alignSelf }) => css`
    ${getCssValue(theme, [
      { key: getColumnValue, value },
      { key: 'order', value: order },
      { key: 'align-self', value: alignSelf },
    ])}
  `,
);

export default Column;
