/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  'extends': [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-typescript',
    '@vue/eslint-config-prettier/skip-formatting',
  ],
  parserOptions: {
    ecmaVersion: 'latest'
  },


  // add rules here
  rules: {
    "no-console": "warn",
    "no-debugger": "warn",
    "no-unused-vars": "off",
    "no-undef": "warn",
    "no-empty": "warn",
    "vue/multi-word-component-names": "off",
    "vue/no-multiple-template-root": "off",
  }
}
