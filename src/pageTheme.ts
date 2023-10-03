import {
  PageTheme,
  UnifiedThemeOptions,
  genPageTheme,
  shapes,
} from '@backstage/theme';
import { PaletteOptions } from '@mui/material/styles';

/**
 * Create the theme entries for the app pages based on the current palette
 * @param palette
 * @returns
 */
export function createPagesTheme(
  palette: UnifiedThemeOptions['palette'] & PaletteOptions,
): Record<string, PageTheme> {
  const light = palette.background!.default!;
  const dark = palette.background!.default!;
  return {
    home: genPageTheme({ colors: [dark, light], shape: shapes.wave }),
    app: genPageTheme({ colors: [dark, light], shape: shapes.wave }),
    apis: genPageTheme({ colors: [dark, light], shape: shapes.wave }),
    documentation: genPageTheme({
      colors: [dark, light],
      shape: shapes.wave,
    }),
    tool: genPageTheme({ colors: [dark, light], shape: shapes.round }),
    other: genPageTheme({ colors: [dark, light], shape: shapes.wave }),
  };
}
