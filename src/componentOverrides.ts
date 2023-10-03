import { UnifiedThemeOptions } from '@backstage/theme';
import { AlertClassKey } from '@mui/lab/Alert';
import { AutocompleteClassKey } from '@mui/material/Autocomplete';
import { PaletteOptions, SimplePaletteColorOptions } from '@mui/material/styles';
import {
  headerFontFamily,
  pfBoxShadowLg,
  pfBoxShadowSm,
  pfColorGreen400,
} from './consts';

// Labs types not included in overrides; https://github.com/mui/material-ui/issues/19427
declare module '@mui/material/styles/overrides' {
  export interface ComponentNameToClassKey {
    MuiAlert: AlertClassKey;
    MuiAutocomplete: AutocompleteClassKey;
  }
}

/**
 * Creates the Material v5 component overrides for the theme based
 * on the current palette
 * @param palette
 * @returns
 */
export function createComponentOverrides(
  palette: UnifiedThemeOptions['palette'] & PaletteOptions,
) {
  return {
    BackstageHeader: {
      styleOverrides: {
        header: {
          backgroundImage: 'unset',
          boxShadow: pfBoxShadowSm,
        },
        title: {
          fontSize: '24px',
          color: palette.text?.primary,
        },
        subtitle: {
          color: palette.text?.primary,
        },
        type: {
          color: palette.text?.secondary,
        },
      },
    },
    BackstageHeaderTabs: {
      styleOverrides: {
        tabsWrapper: {
          backgroundColor: 'inherit',
        },
        defaultTab: {
          fontSize: 'inherit',
          textTransform: 'none',
          padding: '16px',
        },
      },
    },
    BackstageOpenedDropdown: {
      styleOverrides: {
        icon: {
          '& path': {
            fill: palette.background?.default,
          },
        },
      },
    },
    BackstageSelectInputBase: {
      styleOverrides: {
        input: {
          border: `1px solid ${palette.border}`,
        },
      },
    },
    BackstageTable: {
      styleOverrides: {
        root: {
          boxShadow: pfBoxShadowSm,
          backgroundColor: palette.background?.paper,
          borderColor: palette.border,
          borderWidth: '1px',
          borderRadius: '3px',
          borderStyle: 'solid',
          padding: '1.5rem',
          paddingTop: 3, // works around padding from the header title
          '&> :first-child': {
            boxShadow: 'none',
          },
          '& tr': {
            // alternating colors in the dark theme look odd
            backgroundColor: `${palette.background?.paper} !important`,
            borderBottomColor: palette.border,
            borderBottomWidth: '1px',
            borderBottomStyle: 'solid',
          },
          '& th': {
            padding: '1.5rem',
            borderTop: 'none',
            textTransform: 'none !important',
          },
          '& td': {
            paddingTop: '1.5rem',
            paddingBottom: '1.5rem',
          },
        },
      },
    },
    BackstageTableHeader: {
      styleOverrides: {
        header: {
          borderBottom: `1px solid r${palette.border}`,
        },
      },
    },
    BackstageTableToolbar: {
      styleOverrides: {
        root: {
          paddingTop: '1.5rem',
          paddingBottom: '1.5rem',
          paddingLeft: 0,
          paddingRight: 0,
        },
      },
    },
    BackstageWarningPanel: {
      styleOverrides: {
        panel: {
          backgroundColor: `${palette.background?.default}`,
          boxShadow: pfBoxShadowLg,
        },
      },
    },
    CatalogReactUserListPicker: {
      styleOverrides: {
        root: {
          border: 'none',
          borderRadius: '3px',
          padding: '0.6rem',
        },
        groupWrapper: {
          backgroundColor: palette.background?.default,
          boxShadow: 'none',
          border: 'none',
          // removes 1px divider from the last list item
          '& > ul > li:last-child > div': {
            borderBottom: 'none',
          },
        },
        menuItem: {
          padding: '1rem',
        },
      },
    },
    MuiAccordion: {
      styleOverrides: {
        root: {
          boxShadow: 'none',
          borderTop: `1px solid ${palette.border}`,
          margin: '0px !important',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '3px',
          paddingLeft: '1rem',
          paddingRight: '1rem',
          textTransform: 'none',
        },
        contained: {
          boxShadow: 'none',
          marginLeft: '0.625rem',
          marginRight: '0.625rem',
        },
        startIcon: {
          marginRight: '0.25rem',
        },
      },
    },
    MuiAlert: {
      styleOverrides: {
        root: {
          borderRadius: 0,
          boxShadow: pfBoxShadowLg,
          borderTop: `2px solid ${palette.border}`,
        },
        standardError: {
          borderTopColor: (palette.error as SimplePaletteColorOptions).main,
          color: (palette.error as SimplePaletteColorOptions).main,
          backgroundColor: palette.background?.default,
          '& $icon': {
            color: (palette.error as SimplePaletteColorOptions).main,
          },
        },
        standardInfo: {
          borderTopColor: (palette.info as SimplePaletteColorOptions).main,
          color: (palette.info as SimplePaletteColorOptions).main,
          backgroundColor: palette.background?.default,
          '& $icon': {
            color: (palette.info as SimplePaletteColorOptions).main,
          },
        },
        standardSuccess: {
          borderTopColor: pfColorGreen400,
          color: pfColorGreen400,
          backgroundColor: palette.background?.default,
          '& $icon': {
            color: pfColorGreen400,
          },
        },
        standardWarning: {
          borderTopColor: (palette.warning as SimplePaletteColorOptions).main,
          color: palette.warningText,
          backgroundColor: (palette.warning as SimplePaletteColorOptions).main,
          '& $icon': {
            color: (palette.warning as SimplePaletteColorOptions).main,
          },
        },
      },
    },
    MuiAutocomplete: {
      styleOverrides: {
        popper: {
          backgroundColor: palette.background?.default,
        },
        root: {
          '&[aria-expanded=true]': {
            backgroundColor: palette.background?.default,
            color: palette.text?.primary,
          },
          '&[aria-expanded=true] path': {
            fill: palette.background?.default,
          },
        },
      },
    },
    MuiBackdrop: {
      styleOverrides: {
        root: {
          backgroundColor: 'rgba(3, 3, 3, 0.62)',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: palette.background?.paper,
          borderColor: palette.border,
          borderWidth: '1px',
          borderRadius: 0,
          borderStyle: 'solid',
          boxShadow: pfBoxShadowSm,
          display: 'flex',
          flexDirection: 'column',
          '& > hr': {
            display: 'none',
          },
        },
      },
    },
    MuiCardHeader: {
      styleOverrides: {
        root: {
          padding: '1.1rem',
          fontSize: '1rem',
          color: palette.text?.primary,
        },
      },
    },
    MuiDialog: {
      styleOverrides: {
        paper: {
          background: palette.background?.paper,
        },
      },
    },
    MuiFormControl: {
      styleOverrides: {
        searchBar: {
          border: `1px solid ${palette.border} !important`,
          boxShadow: 'none !important:',
        },
      },
    },
    MuiListItem: {
      styleOverrides: {
        divider: {
          borderBottomColor: palette.border,
          borderBottomStyle: 'solid',
          borderBottomWidth: '1px',
        },
      },
    },
    MuiTabs: {
      styleOverrides: {
        indicator: {
          transition: 'none',
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        h1: {
          fontFamily: headerFontFamily,
        },
        h2: {
          fontFamily: headerFontFamily,
        },
        h3: {
          fontFamily: headerFontFamily,
        },
        h4: {
          fontFamily: headerFontFamily,
        },
        h5: {
          fontFamily: headerFontFamily,
        },
      },
    },
    OAuthRequestDialog: {
      styleOverrides: {
        actionButtons: {
          padding: '1rem',
        },
      },
    },
  } as UnifiedThemeOptions['components'];
}
