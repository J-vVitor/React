export const env = {
  browser: true,
  es2021: true,
};
export const extends = 'airbnb';
export const overrides = [
  {
    env: {
      node: true,
    },
    files: [
      '.eslintrc.{js,cjs}',
    ],
    parser: 'babel-eslint',
    parserOptions: {
      sourceType: 'script',
    },
  },
];
export const parserOptions = {
  ecmaVersion: 'latest',
  sourceType: 'module',
};
export const rules = {
  "react/jsx-filename-extension": 0,
  "linebreak-style": 0,
  "padded-blocks": 0
};
