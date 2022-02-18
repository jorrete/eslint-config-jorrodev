module.exports = {
  'env': {
    'browser': true,
    'es2021': true,
  },
  'extends': [
    'eslint:recommended',
  ],
  'parserOptions': {
    'ecmaVersion': 'latest',
    'sourceType': 'module'
  },
  'plugins': [
  ],
  'rules': {
    'object-curly-spacing': [
      'error',
      'always',
    ],
    'linebreak-style': [
      'error',
      'unix'
    ],
    'quotes': [
      'error',
      'single'
    ],
    'semi': [
      'error',
      'always'
    ],
    'no-multiple-empty-lines': [
      'error',
      { 'max': 1, 'maxBOF': 1 },
    ],
  }
};
