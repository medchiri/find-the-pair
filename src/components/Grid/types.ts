export type AllBreakpoints = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';

export type ValuePerBreakpointType<T> = {
  [key in AllBreakpoints]?: T;
};

export type CustomValueType<T> = T | ValuePerBreakpointType<T>;

export type DirectionType = 'row' | 'row-reverse' | 'column' | 'column-reverse';
export type AlignItemsType = 'flex-start' | 'flex-end' | 'center' | 'baseline' | 'stretch';
export type JustifyContentType =
  | 'flex-start'
  | 'flex-end'
  | 'center'
  | 'space-between'
  | 'space-around'
  | 'space-evenly';
export type AlignContentType =
  | 'stretch'
  | 'flex-start'
  | 'flex-end'
  | 'center'
  | 'space-between'
  | 'space-around'
  | 'space-evenly';

export type ValueOrArrayOfValue<T> = T | T[];
