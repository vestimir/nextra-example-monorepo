import React from 'react';
import theme from '../../../packages/ui/src/theme';
import { ThemeProvider } from 'styled-components';
// import { theme } from "@raketa-builder/ui";

export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <Story />
    </ThemeProvider>
  ),
];

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}