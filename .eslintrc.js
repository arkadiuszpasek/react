module.exports = {
  env: {
    es6: true,
    node: true,
    browser: true
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: "babel-eslint",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    'react/jsx-filename-extension': "off",
    'arrow-body-style': "off",
    'react/state-in-constructor': "off",
    'react/prefer-stateless-function': "off",
  },
};
