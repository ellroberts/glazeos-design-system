/** Storybook for plain HTML + CSS (no React). */
export default {
  stories: ['../src/**/*.stories.@(js|mjs)'],
  addons: [],
  framework: {
    name: '@storybook/html-vite',
    options: {},
  },
};
