module.exports = {
  'env': {
    'node': true,
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
    'indent': [
      'error',
      2,
    ],
    'no-multiple-empty-lines': [
      'error',
      { 'max': 1, 'maxEOF': 0 },
    ],
  }
};
