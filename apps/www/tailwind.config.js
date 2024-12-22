const { createGlobPatternsForDependencies } = require('@nx/angular/tailwind');
const { join } = require('path');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    join(__dirname, 'src/**/!(*.stories|*.spec).{ts,html}'),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    colors: {
      'uranian-blue': '#add7f6ff', // 100
      'jordy-blue': '#87bfffff', // 300
      'chefchaouen-blue': '#3f8efcff', // 500
      'neon-blue': '#2667ffff', // 700
      'chrysler-blue': '#3b28ccff', // 900
    },
    extend: {},
  },
  plugins: [],
};
