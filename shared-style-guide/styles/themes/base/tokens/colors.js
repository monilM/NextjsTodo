/**
 * @tokens Colors
 * @presenter Color
 */

import palletteColorTokens from './colorPallette';

const colorTokens = {
  ...palletteColorTokens,

  /* TODO - The below color codes are outside of the color pallette and has to be removed */

  primaryGoldLight: '#bc8d49',
  primaryGrey: '#b8b8b8',
  primaryDarkGrey: '#afafaf',
  primaryGreyDark: '#838383',

  greyDisabled: '#f3f4f5',
  greyscaleLight: '#f0f0f0',

  greySeprator: '#e1e1e1',
  greyBackground: '#fafafa',
  itemBackground: '#f3f0ea',
  greyColorText: '#a7a7a7',

  secondaryGreen: '#62b902',
  tertiaryGreen: '#86cc5b',
  secondaryPurple: '#a63b47',

  secondaryYellow: '#F1CB4B',
  secondaryBlue: '#6095FF',
  linenScaleLighter: '#f9f6f0',
  linenScaleDark: '#f8eee4',
  lightGreyShade: '#eeeeee',

  // These colors are used in dashboard doughnut charts
  yourContribution: '#D8AC77',
  pensionMilitary: '#A33107',
  pensionCivilian: '#D16901',
  netPension: '#F7B638',
  netBeneficiarySalarySecondary: '#C19453',
  netBeneficiarySalaryTertiary: '#C9A674',
  darkGreen: '#14BD2B',
  darkRed: '#CF002A'
};

export default function tokens (portal = 'member') {
  const memberPortalColors = {
    primary: palletteColorTokens.primaryGold,
    secondary: palletteColorTokens.secondarySorrell,
    secondaryLight: palletteColorTokens.secondarySorrellLight,
    secondaryLighter: palletteColorTokens.secondaryLinen,
    secondaryLightest: palletteColorTokens.secondaryRomance,
  };

  const employerPortalColors = {
    primary: palletteColorTokens.primaryPurple,
    secondary: palletteColorTokens.secondaryChetwode,
    secondaryLight: palletteColorTokens.secondaryChetwodeLight,
    secondaryLighter: palletteColorTokens.secondaryLavender,
    secondaryLightest: palletteColorTokens.secondaryLavenderLight,
  };

  if (portal === 'employer') {
    return {
      ...colorTokens,
      ...employerPortalColors,
    };
  }

  return {
    ...colorTokens,
    ...memberPortalColors,
  };
}
