/**
 * @tokens Font Families
 * @presenter FontFamily
 */

const FONT_FAMILIES = {
  CAIRO: "'Cairo', sans-serif",
  CairoBlack: 'Cairo-Black',
  CairoBold: 'Cairo-Bold',
  CairoExtraLight: 'Cairo-ExtraLight',
  CairoLight: 'Cairo-Light',
  CairoRegular: 'Cairo-Regular',
  CairoSemiBold: 'Cairo-SemiBold',
};

// Private
const HEADING_SIZES = {
  h1: '2.1875rem',
  h2: '2rem',
  h3: '1.6875rem',
  h4: '1.3125rem',
  h5: '0.875rem',
};

// Private
const HEADING_LINE_HEIGHTS = {
  h1: '40px',
  h2: '37px',
  h3: '32px',
  h4: '25px',
  h5: '20px',
};

const FONT_SIZES = {
  base: '16px',
  largeH1: HEADING_SIZES.h1,
  mediumH1: HEADING_SIZES.h2,
  smallH1: HEADING_SIZES.h4,

  largeH2: HEADING_SIZES.h2,
  mediumH2: HEADING_SIZES.h3,
  smallH2: HEADING_SIZES.h4,

  largeH3: HEADING_SIZES.h3,
  mediumH3: HEADING_SIZES.h3,
  smallH3: HEADING_SIZES.h4,

  largeH4: HEADING_SIZES.h4,
  mediumH4: HEADING_SIZES.h4,
  smallH4: HEADING_SIZES.h4,

  largeH5: HEADING_SIZES.h5,
  mediumH5: HEADING_SIZES.h5,
  smallH5: HEADING_SIZES.h5,

  smallLabel: '0.625rem',
  regularLabel: '0.75rem',
  largeLabel: '0.875rem',
  xlargeLabel: '1rem',
  button: '0.875rem',

  regularBody: '1rem',
  mediumBody: '0.875rem',
  smallBody: '0.75rem',
};

const LINE_HEIGHT = {
  largeH1: HEADING_LINE_HEIGHTS.h1,
  mediumH1: HEADING_LINE_HEIGHTS.h2,
  smallH1: HEADING_LINE_HEIGHTS.h4,

  largeH2: HEADING_LINE_HEIGHTS.h2,
  mediumH2: HEADING_LINE_HEIGHTS.h3,
  smallH2: HEADING_LINE_HEIGHTS.h4,

  largeH3: HEADING_LINE_HEIGHTS.h3,
  mediumH3: HEADING_LINE_HEIGHTS.h3,
  smallH3: HEADING_LINE_HEIGHTS.h4,

  largeH4: HEADING_LINE_HEIGHTS.h4,
  mediumH4: HEADING_LINE_HEIGHTS.h4,
  smallH4: HEADING_LINE_HEIGHTS.h4,

  largeH5: HEADING_LINE_HEIGHTS.h5,
  mediumH5: HEADING_LINE_HEIGHTS.h5,
  smallH5: HEADING_LINE_HEIGHTS.h5,

  label: '20px',
  input: '20px',
  body: '23px',
  select: '20px',

  regularBody: '23px',
  mediumBody: '20px',
  smallBody: '20px',
};

const FONT_FIELD = '16px';

const FONT_WEIGHTS = {
  regular: 400,
  semiBold: 600,
  bold: 900,
};

export default {
  FONT_FAMILIES,
  FONT_SIZES,
  LINE_HEIGHT,
  FONT_FIELD,
  FONT_WEIGHTS,
};
