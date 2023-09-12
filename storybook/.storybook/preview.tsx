import React from "react";
import { MemoryRouter as Router } from "react-router-dom";
import { Preview } from "@storybook/react";
import { UnifiedThemeProvider } from "@backstage/theme";
import { getPatternflyTheme } from "patternfly-backstage-theme";
import { CssBaseline } from "@mui/material";
import { apis } from "./apis";

import { Content, AlertDisplay } from "@backstage/core-components";
import { TestApiProvider } from "@backstage/test-utils";

const preview: Preview = {
  decorators: [
    (Story) => (
      <TestApiProvider apis={apis as any}>
        <UnifiedThemeProvider theme={getPatternflyTheme() as any}>
          <CssBaseline>
            <AlertDisplay />
            <Content>
              <Story />
            </Content>
          </CssBaseline>
        </UnifiedThemeProvider>
      </TestApiProvider>
    ),
  ],
};
export default preview;
