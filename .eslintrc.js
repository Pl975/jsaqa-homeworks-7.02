module.exports = {
  env: {
    browser: true,
    es2023: true,
  },

  plugins: ['react', '@typescript-eslint', 'import', 'prettier'],

  rules: {
    'no-debugger': 'off',
    'no-console': 0,
    'prettier/prettier': 'error',
    'react/prop-types': 0,
  },


  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:import/recommended',
    'airbnb',
    'prettier',
    'plugin:prettier/recommended',
    'prettier/@typescript-eslint',
  ],

  parser: '@babel/eslint-parser',

  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
};
