const base = require('./base.js');

module.exports = Object.assign({}, base, {
  'extends': [].concat(base.extends, [
    'plugin:@typescript-eslint/recommended',
  ]),
  'plugins': [].concat(base.plugins, [
    '@typescript-eslint'
  ]),
  'parser': '@typescript-eslint/parser',
  'rules': Object.assign({}, base.rules, {
    '@typescript-eslint/no-unused-vars': 'off',
    '@typescript-eslint/no-inferrable-types': 'off',
    '@typescript-eslint/indent': [
      'error',
      2
    ],
  }),
});
