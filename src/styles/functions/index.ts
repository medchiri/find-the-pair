import { AllBreakpoints, CustomValueType, ValueOrArrayOfValue } from 'src/types';
import { Theme } from '../theme';

export interface GetCssValueArgs {
  key: string | ((value: string | number) => string);
  value: CustomValueType<string | number | undefined>;
}

export interface GetBreakpointCssValue {
  (theme: Theme, breakpoint: AllBreakpoints, value: string): string;
}

export const getBreakpointCssValue: GetBreakpointCssValue = (theme, breakpoint, value) => {
  if (breakpoint !== 'xs') {
    return `@media ${theme.breakpoints.min[breakpoint]} { ${value} }`;
  }
  return value;
};

export interface GetValue {
  (key: string | ((value: string | number) => string), value: string | number): string;
}

export const getValue: GetValue = (key, value) => {
  return typeof key === 'function' ? key(value) : `${key}: ${value};`;
};

export interface GetConditionalCssValue {
  (theme: Theme, args: GetCssValueArgs): string;
}

export const getConditionalCssValue: GetConditionalCssValue = (theme, { key, value }) => {
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

export interface GetCssValue {
  (theme: Theme, args: ValueOrArrayOfValue<GetCssValueArgs>): string;
}

export const getCssValue: GetCssValue = (theme, args) => {
  if (Array.isArray(args)) {
    return args.reduce((acc, arg) => `${acc}${getConditionalCssValue(theme, arg)}`, '');
  } else {
    return getConditionalCssValue(theme, args);
  }
};
