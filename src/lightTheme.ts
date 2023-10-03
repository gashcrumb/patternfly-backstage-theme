import { createUnifiedTheme } from '@backstage/theme';
import { createComponentOverrides } from './componentOverrides';
import {
  pageFontFamily,
  pfColorBlack100,
  pfColorBlack1000,
  pfColorBlack150,
  pfColorBlack200,
  pfColorBlack300,
  pfColorBlack400,
  pfColorBlack500,
  pfColorBlack600,
  pfColorBlack700,
  pfColorBlack800,
  pfColorBlack900,
  pfColorBlue200,
  pfColorBlue300,
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
  pfColorRed100,
  pfColorRed200,
  pfColorRed400,
  pfColorWhite,
  typography,
} from './consts';
import { createPagesTheme } from './pageTheme';

/**
 * Definition for the light palette variant
 */
const palette = {
  background: {
    default: pfColorWhite,
    paper: pfColorWhite,
  },
  border: pfColorBlack300,
  common: {
    black: pfColorBlack900,
    white: pfColorWhite,
  },
  error: {
    dark: pfColorRed400,
    light: pfColorRed200,
    main: pfColorRed100,
  },
  errorBackground: pfColorWhite,
  errorText: pfColorBlack900,
  grey: {
    50: pfColorBlack100,
    100: pfColorBlack150,
    200: pfColorBlack200,
    300: pfColorBlack300,
    400: pfColorBlack400,
    500: pfColorBlack500,
    600: pfColorBlack600,
    700: pfColorBlack700,
    800: pfColorBlack800,
    900: pfColorBlack900,
    A100: pfColorBlack100,
    A200: pfColorBlack300,
    A400: pfColorBlack600,
    A700: pfColorBlack900,
  },
  gold: pfColorGold400,
  highlight: pfColorGold50,
  info: {
    dark: pfColorBlue400,
    light: pfColorBlue200,
    main: pfColorBlue300,
  },
  infoBackground: pfColorWhite,
  infoText: pfColorBlack900,
  link: pfColorBlue400,
  linkHover: pfColorBlue500,
  mode: 'light',
  navigation: {
    background: pfColorBlack900,
    indicator: pfColorBlue200,
    color: pfColorBlack200,
    selectedColor: pfColorWhite,
    navItem: {
      hoverBackground: pfColorBlack800,
    },
    subMenu: {
      background: pfColorBlack800,
    },
  },
  primary: {
    contrastText: pfColorWhite,
    dark: pfColorBlue500,
    light: pfColorBlue200,
    main: pfColorBlue400,
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
    indicator: pfColorBlue400,
  },
  text: {
    disabled: pfColorBlack500,
    icon: pfColorBlack600,
    primary: pfColorBlack900,
    secondary: pfColorBlack600,
  },
  textContrast: pfColorBlack1000,
  textSubtle: pfColorBlack600,
  textVerySubtle: pfColorBlack500,
  type: 'light',
  warning: {
    dark: pfColorGold700,
    light: pfColorGold400,
    main: pfColorGold600,
  },
  warningBackground: pfColorWhite,
  warningText: pfColorBlack900,
} as const;

/**
 * Theme instance
 */
export const customLightTheme = createUnifiedTheme({
  fontFamily: pageFontFamily,
  palette,
  defaultPageTheme: 'home',
  pageTheme: createPagesTheme(palette),
  components: createComponentOverrides(palette),
  typography,
});
