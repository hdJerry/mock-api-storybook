import {
  initialize,
  mswDecorator
} from 'msw-storybook-addon';

import {
  setupGraphQL
} from '@/init';

// Initialize MSW
initialize();

// Initialize graphql setup

setupGraphQL();

// Provide the MSW addon decorator globally
export const decorators = [mswDecorator];

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}