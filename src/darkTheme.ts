import { createUnifiedTheme } from '@backstage/theme';
import { createComponentOverrides } from './componentOverrides';
import {
  pageFontFamily,
  pfColorBlack100_dark,
  pfColorBlack1000_dark,
  pfColorBlack200_dark,
  pfColorBlack300_dark,
  pfColorBlack400_dark,
  pfColorBlack50_dark,
  pfColorBlack500_dark,
  pfColorBlack600_dark,
  pfColorBlack700_dark,
  pfColorBlack800_dark,
  pfColorBlack850_dark,
  pfColorBlack900_dark,
  pfColorBlue200,
  pfColorBlue300_dark,
  pfColorBlue400,
  pfColorBlue500,
  pfColorGold400,
  pfColorGold50,
  pfColorGold600,
  pfColorGold700,
  pfColorGreen200,
  pfColorGreen400,
  pfColorGreen600,
  pfColorPurple200,
  pfColorPurple300,
  pfColorPurple400,
  pfColorRed200,
  pfColorRed400,
  pfColorRed9999_dark,
  pfColorWhite,
  typography,
} from './consts';
import { createPagesTheme } from './pageTheme';

/**
 * Definition for the dark palette variant
 */
const palette = {
  mode: 'dark',
  type: 'dark',
  background: {
    default: pfColorBlack700_dark,
    paper: pfColorBlack850_dark,
  },
  border: pfColorBlack500_dark,
  common: {
    black: pfColorBlack1000_dark,
    white: pfColorBlack50_dark,
  },
  error: {
    dark: pfColorRed400,
    light: pfColorRed200,
    main: pfColorRed9999_dark,
  },
  errorBackground: pfColorBlack700_dark,
  errorText: pfColorRed9999_dark,
  grey: {
    50: pfColorBlack50_dark,
    100: pfColorBlack100_dark,
    200: pfColorBlack200_dark,
    300: pfColorBlack300_dark,
    400: pfColorBlack400_dark,
    500: pfColorBlack500_dark,
    600: pfColorBlack600_dark,
    700: pfColorBlack700_dark,
    800: pfColorBlack800_dark,
    900: pfColorBlack900_dark,
    A100: pfColorBlack100_dark,
    A200: pfColorBlack300_dark,
    A400: pfColorBlack600_dark,
    A700: pfColorBlack900_dark,
  },
  gold: pfColorGold400,
  highlight: pfColorGold50,
  info: {
    dark: pfColorBlue400,
    light: pfColorBlue200,
    main: pfColorBlue300_dark,
  },
  infoBackground: pfColorBlack700_dark,
  infoText: pfColorBlue300_dark,
  link: pfColorBlue300_dark,
  linkHover: pfColorBlue200,
  navigation: {
    background: pfColorBlack900_dark,
    indicator: pfColorBlue300_dark,
    color: pfColorBlack200_dark,
    selectedColor: pfColorWhite,
    navItem: {
      hoverBackground: pfColorBlack800_dark,
    },
    subMenu: {
      background: pfColorBlack800_dark,
    },
  },
  primary: {
    contrastText: pfColorWhite,
    dark: pfColorBlue500,
    light: pfColorBlue200,
    main: pfColorBlue300_dark,
  },
  secondary: {
    contrastText: pfColorWhite,
    dark: pfColorPurple400,
    light: pfColorPurple200,
    main: pfColorPurple300,
  },
  success: {
    dark: pfColorGreen600,
    light: pfColorGreen200,
    main: pfColorGreen400,
  },
  tabbar: {
    indicator: pfColorBlue300_dark,
  },
  text: {
    disabled: pfColorBlack300_dark,
    icon: pfColorBlack200_dark,
    primary: pfColorBlack50_dark,
    secondary: pfColorBlack200_dark,
  },
  textContrast: pfColorBlack50_dark,
  textSubtle: pfColorBlack200_dark,
  textVerySubtle: pfColorBlack300_dark,
  warning: {
    dark: pfColorGold700,
    light: pfColorGold400,
    main: pfColorGold600,
  },
  warningBackground: pfColorBlack700_dark,
  warningText: pfColorGold400,
} as const;

/**
 * Theme instance
 */
export const customDarkTheme = createUnifiedTheme({
  fontFamily: pageFontFamily,
  palette,
  defaultPageTheme: 'home',
  pageTheme: createPagesTheme(palette),
  components: createComponentOverrides(palette),
  typography,
});
