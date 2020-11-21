import styled, { css } from 'styled-components';

import { getCssValue } from 'src/styles/functions';
import { CustomValueType } from 'src/types';
import { AlignContentType, AlignItemsType, DirectionType, JustifyContentType } from '../types';

interface GetGutterValue {
  (withVerticalGutter: boolean): (value: string | number) => string;
}

const getGutterValue: GetGutterValue = withVerticalGutter => value => {
  if (typeof value === 'number') value = `${value}rem`;
  return `
    margin-left: -${value};
    margin-right: -${value};
    ${withVerticalGutter ? `margin-bottom: calc(-${value} * 2);` : ''}

    & > * {
      padding-left: ${value};
      padding-right: ${value};
      ${withVerticalGutter ? `padding-bottom: calc(${value} * 2);` : ''}
    }
  `;
};

export interface RowProps {
  gutter?: CustomValueType<number | string>;
  direction?: CustomValueType<DirectionType>;
  justifyContent?: CustomValueType<JustifyContentType>;
  alignItems?: CustomValueType<AlignItemsType>;
  alignContent?: CustomValueType<AlignContentType>;
  noWrap?: boolean;
  fullHeight?: boolean;
  withVerticalGutter?: boolean;
}

const Row = styled.div<RowProps>(
  ({
    theme,
    gutter = 1,
    direction,
    justifyContent,
    alignContent,
    alignItems,
    noWrap = false,
    fullHeight = false,
    withVerticalGutter = false,
  }) => css`
    display: flex;

    ${!noWrap && 'flex-wrap: wrap;'}
    ${fullHeight && 'height: 100%;'}

    ${getCssValue(theme, [
      { key: getGutterValue(withVerticalGutter), value: gutter },
      { key: 'flex-direction', value: direction },
      { key: 'justify-content', value: justifyContent },
      { key: 'align-items', value: alignItems },
      { key: 'align-content', value: alignContent },
    ])}
  `,
);

export default Row;
