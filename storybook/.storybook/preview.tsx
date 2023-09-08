import React from "react";
import { Preview } from "@storybook/react";
import { UnifiedThemeProvider } from "@backstage/theme";
import { patternflyTheme } from "patternfly-backstage-theme";
import { CssBaseline } from "@material-ui/core";
import { apis } from "./apis";

import { Content, AlertDisplay } from "@backstage/core-components";
import { TestApiProvider } from "@backstage/test-utils";

export const preview: Preview = {
  decorators: [
    (Story) => (
      <TestApiProvider apis={apis}>
        <UnifiedThemeProvider theme={darkTheme}>
          <CssBaseline>
            <AlertDisplay />
            <Content>
            <pre>hi there</pre>
              <Story />
            </Content>
          </CssBaseline>
        </UnifiedThemeProvider>
      </TestApiProvider>
    ),
  ],
};

export const parameters = {
  options: {
    storySort: {
      order: ["Plugins", "Layout", "Navigation"],
    },
  },
};
