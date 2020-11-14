export interface Breakpoints {
  min: {
    [key in 'sm' | 'md' | 'lg' | 'xl' | 'xxl']: string;
  };
  max: {
    [key in 'xs' | 'sm' | 'md' | 'lg' | 'xl']: string;
  };
}

const breakpoints: Breakpoints = {
  min: {
    sm: '(min-width: 576px)',
    md: '(min-width: 768px)',
    lg: '(min-width: 992px)',
    xl: '(min-width: 1200px)',
    xxl: '(min-width: 1440px)',
  },
  max: {
    xs: '(max-width: 575.98px)',
    sm: '(max-width: 767.98px)',
    md: '(max-width: 991.98px)',
    lg: '(max-width: 1199.98px)',
    xl: '(max-width: 1439.98px)',
  },
};

export default breakpoints;
