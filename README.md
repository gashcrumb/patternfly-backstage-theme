# patternfly-backstage-theme

This is a POC to create a theme for [Backstage](https://github.com/backstage/backstage) that follows the Patternfly color scheme and layouts as closely as possible.

Importing this into a backstage app should be a matter of adding:

```
// needed imports
import { UnifiedThemeProvider } from '@backstage/theme';
import LightIcon from '@mui/icons-material/WbSunny';
import DarkIcon from '@mui/icons-material/Brightness2';
import { lightTheme, darkTheme } from 'patternfly-backstage-theme';

/*
... and then add to the options for createApp

*/
themes: [
    {
        id: 'light-theme',
        title: 'Light Theme',
        variant: 'light',
        icon: <LightIcon />,
        Provider: ({ children }) => (<UnifiedThemeProvider theme={lightTheme} children={children} />)
    },
    {
        id: 'dark-theme',
        title: 'Dark Theme',
        variant: 'dark',
        icon: <DarkIcon />,
        Provider: ({ children }) => (<UnifiedThemeProvider theme={darkTheme} children={children} />)
    }
],
/*
other createApp options
*/
```
