module.exports = {
  '*.{js,jsx,ts,tsx,html,css,json}': ['cspell --no-summary --color'],
  'apps/**/*.{js,ts,jsx,tsx,json}': [
    (files) => `nx affected:lint --files=${files.join(',')}`,
    (files) => `nx format:write --files=${files.join(',')}`,
  ],
};
