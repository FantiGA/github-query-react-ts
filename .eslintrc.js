/*
 * @Author: fantiga
 * @Date: 2022-11-16 19:43:52
 * @LastEditTime: 2022-11-16 20:03:03
 * @LastEditors: fantiga
 * @Description: 
 * @FilePath: /test-for-mp-frontend-FantiGA/react/.eslintrc.js
 */

module.exports = {
  root: true,
  env: {
    node: true,
    browser: true,
    es6: true,
  },
  // extends: Specify extended configuration, support rule coverage and aggregation
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    // 'plugin:react-hooks/recommended',
    // 'plugin:import/recommended',
    'plugin:prettier/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:react/jsx-runtime',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  // plugins: Configure those plugins we want Linting rules
  plugins: [
    '@typescript-eslint',
    'react',
    // 'react-hooks',
    // 'import',
    'prettier',
    'jsx-a11y',
  ],
  rules: {
    'react/react-in-jsx-scope': 'off',
    'react/jsx-uses-react': 'off',
    'react/jsx-uses-vars': 'off',
    'jsx-a11y/no-autofocus': 'off',
    // 'import/no-unresolved': 'off',
    // 'jsx-a11y/rule-name': 2,
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
