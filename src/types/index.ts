export type ValueOrArrayOfValue<T> = T | T[];

export type CustomValueType<T> = T | ValuePerBreakpointType<T>;

export type AllBreakpoints = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';

export type ValuePerBreakpointType<T> = {
  [key in AllBreakpoints]?: T;
};
