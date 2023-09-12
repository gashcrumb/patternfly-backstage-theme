import {
  c_alert_BackgroundColor,
  c_alert_m_danger__icon_Color,
  c_alert_m_danger__title_Color,
  c_alert_m_danger_BorderTopColor,
  c_alert_m_info__icon_Color,
  c_alert_m_info__title_Color,
  c_alert_m_info_BorderTopColor,
  c_alert_m_success__icon_Color,
  c_alert_m_success__title_Color,
  c_alert_m_success_BorderTopColor,
  c_alert_m_warning__icon_Color,
  c_alert_m_warning__title_Color,
  c_alert_m_warning_BorderTopColor,
  c_card_BackgroundColor,
  c_card_BoxShadow,
  c_card_m_flat_BorderColor,
  c_card_m_flat_BorderWidth,
  c_nav__link_Color,
  c_nav__link_hover_BackgroundColor,
  c_nav__link_m_current_Color,
  c_tabs__item_m_current__link_after_BorderColor,
  global_BackgroundColor_100,
  global_BorderColor_100,
  global_BorderRadius_sm,
  global_BorderWidth_sm,
  global_BorderColor_200,
  global_Color_100,
  global_Color_200,
  global_Color_dark_100,
  global_Color_light_100,
  global_danger_color_100,
  global_danger_color_200,
  global_danger_color_300,
  global_FontSize_md,
  global_info_color_100,
  global_info_color_200,
  global_link_Color_hover,
  global_link_Color,
  global_palette_black_100,
  global_palette_black_1000,
  global_palette_black_150,
  global_palette_black_200,
  global_palette_black_300,
  global_palette_black_400,
  global_palette_black_500,
  global_palette_black_600,
  global_palette_black_700,
  global_palette_black_800,
  global_palette_black_900,
  global_palette_blue_50,
  global_palette_gold_400,
  global_palette_gold_50,
  global_palette_green_50,
  global_palette_purple_200,
  global_palette_purple_300,
  global_palette_purple_400,
  global_palette_white,
  global_primary_color_100,
  global_primary_color_200,
  global_primary_color_light_100,
  global_spacer_md,
  global_spacer_lg,
  global_success_color_100,
  global_success_color_200,
  global_warning_color_100,
  global_warning_color_200,
} from "@patternfly/react-tokens";

import { AlertClassKey } from "@mui/lab/Alert";
import { AutocompleteClassKey, PaletteOptions } from "@mui/material";
import { createUnifiedTheme } from "@backstage/theme";

import "@patternfly/patternfly/patternfly.css";

// Labs types not included in overrides; https://github.com/mui/material-ui/issues/19427
declare module "@mui/material/styles/overrides" {
  export interface ComponentNameToClassKey {
    MuiAlert: AlertClassKey;
    MuiAutocomplete: AutocompleteClassKey;
  }
}

const fontFamily = "RedHatText, helvetica, arial, sans-serif";
const htmlFontSize = 16;
const fontWeight: number = 400;
const marginBottom: number = 8;

export const createThemeFromBasePalette = () => {
  // All the theme colors
  const palette = {
    background: {

      default: global_BackgroundColor_100.value,
      paper: c_card_BackgroundColor.value,
    },
    border: global_BorderColor_100.value,
    common: {
      white: global_Color_light_100.value,
      black: global_Color_dark_100.value,
    },
    error: {
      dark: global_danger_color_300.value,
      light: global_danger_color_200.value,
      main: global_danger_color_100.value,
    },
    errorBackground: global_danger_color_200.value,
    errorText: global_Color_dark_100.value,
    grey: {
      50: global_palette_black_100.value,
      100: global_palette_black_150.value,
      200: global_palette_black_200.value,
      300: global_palette_black_300.value,
      400: global_palette_black_400.value,
      500: global_palette_black_500.value,
      600: global_palette_black_600.value,
      700: global_palette_black_700.value,
      800: global_palette_black_800.value,
      900: global_palette_black_900.value,
      A100: global_palette_black_200.value,
      A200: global_palette_black_300.value,
      A400: global_palette_black_600.value,
      A700: global_palette_black_900.value,
    },
    gold: global_palette_gold_400.value,
    highlight: "#fffbcc",
    info: {
      dark: global_info_color_200.value,
      light: global_palette_blue_50.value,
      main: global_info_color_100.value,
    },
    infoBackground: global_palette_blue_50.value,
    infoText: global_Color_dark_100.value,
    link: global_link_Color.value,
    linkHover: global_link_Color_hover.value,
    navigation: {
      background: global_palette_black_900.value,
      indicator: global_primary_color_light_100.value,
      color: c_nav__link_Color.value,
      selectedColor: c_nav__link_m_current_Color.value,
      navItem: {
        hoverBackground: c_nav__link_hover_BackgroundColor.value,
      },
      submenu: {
        background: global_palette_black_800.value,
      },
    },
    primary: {
      contrastText: global_palette_white.value,
      dark: global_primary_color_200.value,
      light: global_primary_color_light_100.value,
      main: global_primary_color_100.value,
    },
    // Patternfly doesn't quite have a match to this concept
    secondary: {
      contrastText: global_palette_white.value,
      dark: global_palette_purple_400.value,
      light: global_palette_purple_200.value,
      main: global_palette_purple_300.value,
    },
    success: {
      dark: global_success_color_200.value,
      light: global_success_color_100.value,
      main: global_palette_green_50.value,
    },
    tabbar: {
      indicator: c_tabs__item_m_current__link_after_BorderColor.value,
    },
    textContrast: global_palette_black_1000.value,
    textSubtle: global_Color_200.value,
    textVerySubtle: global_palette_black_400.value,
    warning: {
      dark: global_warning_color_200.value,
      light: global_palette_gold_50.value,
      main: global_warning_color_100.value,
    },
    warningBackground: global_palette_gold_50.value,
    warningText: global_Color_dark_100.value,
  } as PaletteOptions;

  // Component overrides for this theme
  const components = {
    BackstageHeader: {
      styleOverrides: {
        header: {
          backgroundImage: "unset",
          boxShadow: "unset",
          paddingBottom: 8,
        },
        title: {
          color: global_Color_100.value,
        },
        subtitle: {
          color: global_Color_100.value,
        },
        type: {
          color: "rgba(21, 21, 21, 0.8)",
        },
      },
    },
    BackstageHeaderTabs: {
      styleOverrides: {
        defaultTab: {
          fontSize: "inherit",
          textTransform: "none",
          padding: "16px",
        },
      },
    },
    BackstageOpenedDropdown: {
      styleOverrides: {
        icon: {
          "& path": {
            fill: "#FFFFFF",
          },
        },
      },
    },
    BackstageTable: {
      styleOverrides: {
        root: {
          boxShadow: c_card_BoxShadow.value,
          backgroundColor: c_card_BackgroundColor.value,
          borderColor: c_card_m_flat_BorderColor.value,
          borderWidth: c_card_m_flat_BorderWidth.value,
          borderRadius: global_BorderRadius_sm.value,
          borderStyle: "solid",
          padding: global_spacer_lg.value,
          paddingTop: 3, // works around padding from the header title
          "&> :first-child": {
            boxShadow: "none",
          },
          "& tr": {
            borderBottomColor: c_card_m_flat_BorderColor.value,
            borderBottomWidth: c_card_m_flat_BorderWidth.value,
            borderBottomStyle: "solid",
          },
          "& th": {
            padding: global_spacer_md.value,
            borderTop: "none",
            textTransform: "none !important",
          },
          "& td": {
            paddingTop: global_spacer_lg.value,
            paddingBottom: global_spacer_lg.value,
          },
        },
      },
    },
    BackstageTableHeader: {
      styleOverrides: {
        header: {
          borderBottom: "1px solid rgb(210, 210, 210)",
        },
      },
    },
    BackstageTableToolbar: {
      styleOverrides: {
        root: {
          paddingTop: "1.5rem",
          paddingBottom: "1.5rem",
          paddingLeft: 0,
          paddingRight: 0,
        },
      },
    },
    CatalogReactUserListPicker: {
      styleOverrides: {
        root: {
          border: "none",
          borderRadius: global_BorderRadius_sm.value,
          padding: "0.6rem",
        },
        groupWrapper: {
          backgroundColor: global_BackgroundColor_100.value,
          boxShadow: "none",
          border: "none",
          // removes 1px divider from the last list item
          "& > ul > li:last-child > div": {
            borderBottom: "none",
          },
        },
        menuItem: {
          padding: "1rem",
        },
      },
    },
    MuiAccordion: {
      styleOverrides: {
        root: {
          boxShadow: "none",
          borderTop: "1px solid #d5d5d5",
          margin: "0px !important",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: global_BorderRadius_sm.value,
          paddingLeft: "1rem",
          paddingRight: "1rem",
          textTransform: "none",
        },
        contained: {
          boxShadow: "none",
          marginLeft: "0.625rem",
          marginRight: "0.625rem",
        },
        startIcon: {
          marginRight: "0.25rem",
        },
      },
    },
    MuiAlert: {
      styleOverrides: {
        root: {
          borderRadius: 0,
          boxShadow:
            "0 0.5rem 1rem 0 rgba(3, 3, 3, 0.16), 0 0 0.375rem 0 rgba(3, 3, 3, 0.08)",
          borderTop: "2px solid #d2d2d2",
        },
        standardError: {
          borderTopColor: c_alert_m_danger_BorderTopColor.value,
          color: c_alert_m_danger__title_Color.value,
          backgroundColor: c_alert_BackgroundColor.value,
          "& $icon": {
            color: c_alert_m_danger__icon_Color.value,
          },
        },
        standardInfo: {
          borderTopColor: c_alert_m_info_BorderTopColor.value,
          color: c_alert_m_info__title_Color.value,
          backgroundColor: c_alert_BackgroundColor.value,
          "& $icon": {
            color: c_alert_m_info__icon_Color.value,
          },
        },
        standardSuccess: {
          borderTopColor: c_alert_m_success_BorderTopColor.value,
          color: c_alert_m_success__title_Color.value,
          backgroundColor: c_alert_BackgroundColor.value,
          "& $icon": {
            color: c_alert_m_success__icon_Color.value,
          },
        },
        standardWarning: {
          borderTopColor: c_alert_m_warning_BorderTopColor.value,
          color: c_alert_m_warning__title_Color.value,
          backgroundColor: c_alert_BackgroundColor.value,
          "& $icon": {
            color: c_alert_m_warning__icon_Color.value,
          },
        },
      },
    },
    MuiAutocomplete: {
      styleOverrides: {
        popper: {
          backgroundColor: global_BackgroundColor_100.value,
        },
        root: {
          "&[aria-expanded=true]": {
            backgroundColor: global_BackgroundColor_100.value,
            color: global_Color_100.value,
          },
          "&[aria-expanded=true] path": {
            fill: global_BackgroundColor_100.value,
          },
        },
      },
    },
    MuiBackdrop: {
      styleOverrides: {
        root: {
          backgroundColor: "rgba(9,30,69,0.54)",
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: c_card_BackgroundColor.value,
          borderColor: c_card_m_flat_BorderColor.value,
          borderWidth: c_card_m_flat_BorderWidth.value,
          borderRadius: 0,
          borderStyle: "solid",
          boxShadow:
            "0 0.0625rem 0.125rem 0 rgba(3, 3, 3, 0.12), 0 0 0.125rem 0 rgba(3, 3, 3, 0.06)",
          display: "flex",
          flexDirection: "column",
          "& > hr": {
            display: "none",
          },
        },
      },
    },
    MuiCardHeader: {
      styleOverrides: {
        root: {
          padding: "1.1rem",
          fontSize: global_FontSize_md.value,
          color: global_Color_100.value,
        },
      },
    },
    MuiDialog: {
      styleOverrides: {
        paper: {
          background: global_BackgroundColor_100.value,
        },
      },
    },
    MuiFormControl: {
      styleOverrides: {
        searchBar: {
          border: "1px solid #d5d5d5 !important",
          boxShadow: "none !important:",
        },
      },
    },
    MuiListItem: {
      styleOverrides: {
        divider: {
          borderBottomColor: global_BorderColor_200.value,
          borderBottomStyle: "solid",
          borderBottomWidth: global_BorderWidth_sm.value,
        },
      },
    },
    MuiTabs: {
      styleOverrides: {
        indicator: {
          transition: "none",
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        h1: {
          fontFamily: "RedHatDisplay",
        },
        h2: {
          fontFamily: "RedHatDisplay",
        },
        h3: {
          fontFamily: "RedHatDisplay",
        },
        h4: {
          fontFamily: "RedHatDisplay",
        },
        h5: {
          fontFamily: "RedHatDisplay",
        },
      },
    },
    OAuthRequestDialog: {
      styleOverrides: {
        actionButtons: {
          padding: "1rem",
        },
      },
    },
  };

  // Typography definitions for this theme
  const typography = {
    fontFamily,
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
  };

  return {
    components,
    fontFamily,
    htmlFontSize,
    palette,
    // don't fix this spelling :-)
    typeography: typography,
  };
};

export const getPatternflyTheme = () =>
  createUnifiedTheme(createThemeFromBasePalette() as any);

export const patternflyTheme = getPatternflyTheme();
