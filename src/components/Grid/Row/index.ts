import styled, { css } from 'styled-components';

import { Theme } from 'src/styles/theme';
import {
  AlignContentType,
  AlignItemsType,
  AllBreakpoints,
  CustomValueType,
  DirectionType,
  JustifyContentType,
  ValueOrArrayOfValue,
} from '../types';

interface GetGutterValue {
  (value: string | number): string;
}

const getGutterValue: GetGutterValue = (value = 1) => {
  if (typeof value === 'number') value = `${value}rem`;
  return `
    margin-left: -${value};
    margin-right: -${value};
    margin-bottom: calc(-${value} * 2);

    & > * {
      padding-left: ${value};
      padding-right: ${value};
      padding-bottom: calc(${value} * 2);
    }
  `;
};

interface RowProps {
  gutter?: CustomValueType<number | string>;
  direction?: CustomValueType<DirectionType>;
  justifyContent?: CustomValueType<JustifyContentType>;
  alignItems?: CustomValueType<AlignItemsType>;
  alignContent?: CustomValueType<AlignContentType>;
}

interface GetCssValueArgs {
  key: string | ((value: string | number) => string);
  value: CustomValueType<string | number | undefined>;
}

interface GetBreakpointCssValue {
  (theme: Theme, breakpoint: AllBreakpoints, value: string): string;
}

const getBreakpointCssValue: GetBreakpointCssValue = (theme, breakpoint, value) => {
  if (breakpoint !== 'xs') {
    return `@media ${theme.breakpoints.min[breakpoint]} { ${value} }`;
  }
  return value;
};

interface GetValue {
  (key: string | ((value: string | number) => string), value: string | number): string;
}

const getValue: GetValue = (key, value) => {
  return typeof key === 'function' ? key(value) : `${key}: ${value};`;
};

interface GetConditionalCssValue {
  (theme: Theme, args: GetCssValueArgs): string;
}

const getConditionalCssValue: GetConditionalCssValue = (theme, { key, value }) => {
  if (value == null) return '';

  if (typeof value === 'object') {
    const valuesByBreakpoints = Object.entries(value) as [AllBreakpoints, string | number | undefined][];
    return valuesByBreakpoints.reduce((acc, [breakpoint, currValue]) => {
      if (currValue != null) {
        acc += getBreakpointCssValue(theme, breakpoint, getValue(key, currValue));
      }
      return acc;
    }, '');
  } else {
    return getValue(key, value);
  }
};

interface GetCssValue {
  (theme: Theme, args: ValueOrArrayOfValue<GetCssValueArgs>): string;
}

const getCssValue: GetCssValue = (theme, args) => {
  if (Array.isArray(args)) {
    return args.reduce((acc, arg) => `${acc}${getConditionalCssValue(theme, arg)}`, '');
  } else {
    return getConditionalCssValue(theme, args);
  }
};

const Row = styled.div<RowProps>(
  ({ theme, gutter = 1, direction, justifyContent, alignContent, alignItems }) => css`
    display: flex;
    flex-wrap: wrap;

    ${getCssValue(theme, [
      { key: getGutterValue, value: gutter },
      { key: 'direction', value: direction },
      { key: 'justify-content', value: justifyContent },
      { key: 'align-items', value: alignItems },
      { key: 'align-content', value: alignContent },
    ])}
  `,
);

export default Row;
