import { css } from 'styled-components';

interface CreateSpaceClassName {
  (args: {
    type: string;
    cssValueType: string;
    direction: string;
    key: string;
    value: string | number;
    cssDirection: string | string[] | null;
  }): string;
}

const createSpaceClassName: CreateSpaceClassName = ({ type, cssValueType, direction, key, value, cssDirection }) => {
  let cssProperty = `${cssValueType}`;
  const cssValue = typeof value === 'number' ? `${value}rem` : value;

  let cssCode = '';

  if (Array.isArray(cssDirection)) {
    cssDirection.forEach(dir => {
      cssCode += `${cssProperty}-${dir}: ${cssValue};`;
    });
  } else {
    if (typeof cssDirection === 'string') {
      cssProperty += `-${cssDirection}`;
    }

    cssCode = `${cssProperty}: ${cssValue};`;
  }

  let classNameDirection = `-${direction}`;
  if (direction === 'a') {
    classNameDirection = '';
  }

  const className = `.${type}${classNameDirection}-${key} { ${cssCode} }`;

  return className;
};

const spaces = {
  0: 0,
  1: 0.25,
  2: 0.5,
  3: 1,
  4: 1.5,
  5: 3,
  auto: 'auto',
};

const spaceTypes = {
  m: 'margin',
  p: 'padding',
};

const spaceDirections = {
  t: 'top',
  b: 'bottom',
  l: 'left',
  r: 'right',
  x: ['left', 'right'],
  y: ['top', 'bottom'],
  a: null,
};

const spacesClasses = Object.entries(spaces).reduce((acc, [key, value]) => {
  let className = '';

  Object.entries(spaceTypes).forEach(([type, cssValueType]) => {
    Object.entries(spaceDirections).forEach(([direction, cssDirection]) => {
      className += createSpaceClassName({
        cssDirection,
        cssValueType,
        type,
        direction,
        key,
        value,
      });
    });
  });
  acc += className;

  return acc;
}, '');

const distances = [25, 50, 75, 100, 'auto'];
const measurments = { h: 'height', w: 'width' };

const heightWidthClassNames = Object.entries(measurments).reduce((acc, [key, value]) => {
  let className = '';
  distances.forEach(distance => {
    className += `.${key}-${distance} { ${value}: ${typeof distance === 'number' ? `${distance}%` : distance}; }`;
  });

  acc += className;
  return acc;
}, '');

export const GlobalClassNames = css`
  ${spacesClasses}

  ${heightWidthClassNames}
`;
