module.exports = {
  root: true,
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: [
      '@typescript-eslint/parser',
      'babel-eslint',
    ],
    sourceType: "module",
    ecmaVersion: 2016,
  },
  env: {
    browser: true,
    jest: true,
    es6: true
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:vue/base',
    'plugin:vue/strongly-recommended',
    'prettier',
    'prettier/vue',
  ],
  // required to lint *.vue files
  plugins: ['@typescript-eslint', 'vue'],
  // add your custom rules here
  rules: {
    'vue/max-attributes-per-line': 'off',
    'vue/html-closing-bracket-spacing': 'off',
    // allow async-await
    'generator-star-spacing': 'off',
    // allow debugger during development
    'no-return-await': 'off',
    'no-console': 'off',
    '@typescript-eslint/member-delimiter-style': 'off',
    '@typescript-eslint/explicit-function-return-type' : 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/ban-ts-ignore': 'off',
    '@typescript-eslint/no-unused-vars': ['error', { vars: 'all', args: 'after-used', ignoreRestSiblings: false }],
  }
}
