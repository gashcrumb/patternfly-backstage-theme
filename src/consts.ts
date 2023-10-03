export const pageFontFamily = 'RedHatText, helvetica, arial, sans-serif';
export const headerFontFamily = 'RedHatDisplay';
export const htmlFontSize = 16;
export const fontWeight: number = 400;
export const marginBottom: number = 8;

/**
 * Typography definition, shared by themes
 */
export const typography = {
  fontFamily: pageFontFamily,
  htmlFontSize,
  // Patternfly uses root em for these values but numbers are required, so using the pixel equivalent:
  h1: {
    fontSize: 24,
    fontWeight: 700,
    marginBottom,
  },
  h2: {
    fontSize: 20,
    fontWeight,
    marginBottom,
  },
  h3: {
    fontSize: 18,
    fontWeight,
    marginBottom,
  },
  h4: {
    fontSize: 16,
    fontWeight,
    marginBottom,
  },
  h5: {
    fontSize: 16,
    fontWeight,
    marginBottom,
  },
  h6: {
    fontSize: 16,
    fontWeight,
    marginBottom,
  },
} as const;

// Patternfly base color palette entries
export const pfColorBlue200 = '#73bcf7';
export const pfColorBlue300 = '#2b9af3';
export const pfColorBlue400 = '#0066cc';
export const pfColorBlue500 = '#004080';
export const pfColorGold50 = '#fdf7e7';
export const pfColorGold400 = '#f0ab00';
export const pfColorGold600 = '#795600';
export const pfColorGold700 = '#3d2c00';
export const pfColorGreen50 = '#f3faf2';
export const pfColorGreen200 = '#95d58e';
export const pfColorGreen400 = '#5ba352';
export const pfColorGreen600 = '#1e4f18';
export const pfColorPurple200 = '#b2a3ff';
export const pfColorPurple300 = '#a18fff';
export const pfColorPurple400 = '#8476d1';
export const pfColorRed100 = '#c9190b';
export const pfColorRed200 = '#a30000';
export const pfColorRed400 = '#470000';
export const pfColorWhite = '#ffffff';

// Patternfly light color greys
export const pfColorBlack100 = '#fafafa';
export const pfColorBlack150 = '#f5f5f5';
export const pfColorBlack200 = '#f0f0f0';
export const pfColorBlack300 = '#d2d2d2';
export const pfColorBlack400 = '#b8bbbe';
export const pfColorBlack500 = '#8a8d90';
export const pfColorBlack600 = '#6a6e73';
export const pfColorBlack700 = '#4f5255';
export const pfColorBlack800 = '#3c3f42';
export const pfColorBlack900 = '#151515';
export const pfColorBlack1000 = '#030303';

// Patternfly dark color greys
export const pfColorBlack50_dark = '#e0e0e0';
export const pfColorBlack100_dark = '#c6c7c8';
export const pfColorBlack200_dark = '#aaabac';
export const pfColorBlack300_dark = '#868789';
export const pfColorBlack400_dark = '#57585a';
export const pfColorBlack500_dark = '#444548';
export const pfColorBlack600_dark = '#36373a';
export const pfColorBlack700_dark = '#26292d';
export const pfColorBlack800_dark = '#1b1d21';
export const pfColorBlack850_dark = '#212427';
export const pfColorBlack900_dark = '#0f1214';
export const pfColorBlack1000_dark = '#030303';

// Patternfly dark theme color overrides
export const pfColorRed9999_dark = '#fe5142';
export const pfColorRed8888_dark = '#ff7468';
export const pfColorBlue300_dark = '#1fa7f8';

// Patternfly box shadows
export const pfBoxShadowSm =
  '0 0.0625rem 0.125rem 0 rgba(3, 3, 3, 0.12), 0 0 0.125rem 0 rgba(3, 3, 3, 0.06)';
export const pfBoxShadowLg =
  '0 0.5rem 1rem 0 rgba(3, 3, 3, 0.16), 0 0 0.375rem 0 rgba(3, 3, 3, 0.08)';
