// Private
const size = {
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '576px',
  tabletP: '768px',
  tabletL: '1024px',
  laptop: '1280px',
  laptopL: '1440px',
  desktop: '2560px',
};

const deviceBreakpoints = {
  xs: `@media (max-width: ${size.mobileL})`, // till 576 px
  sm: `@media (min-width: ${size.mobileL})`, // from 576 px onwards to up
  md: `@media (min-width: ${size.tabletP})`, // from 768 px onwards and up
  lg: `@media (min-width: ${size.tabletL})`, // from 1024 px onwards and up
  xl: `@media (min-width: ${size.laptop})`, // from 1280 px onwards and up
};

export default { ...deviceBreakpoints };
