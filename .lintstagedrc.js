module.exports = {
  // Lint & Test TS and JS files
  '*.{js,jsx,ts,tsx}': (filenames) => [
    `npm run eslint --fix . ${filenames.join(' --file')}`,
    `npm test -- --findRelatedTests ${filenames.join(' ')}`,
  ],
}
