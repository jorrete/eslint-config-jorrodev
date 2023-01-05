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
    'sort-imports-es6-autofix',
  ],
  'rules': {
    'array-bracket-newline': [
      'error',
      'always'
    ],
    'array-element-newline': [
      'error',
      'always'
    ],
    'object-property-newline': [
      'error'
    ],
    'object-curly-newline': [
      'error',
      'always'
    ],
    'object-curly-spacing': [
      'error',
      'always',
    ],
    'function-call-argument-newline': [
      'error',
      'always'
    ],
    'function-paren-newline': [
      'error',
      'multiline-arguments'
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
      {
        'SwitchCase': 1,
      },
    ],
    'no-multiple-empty-lines': [
      'error',
      { 'max': 1, 'maxEOF': 0 },
    ],
    'sort-imports-es6-autofix/sort-imports-es6': [
      2,
      {
        'ignoreCase': false,
        'ignoreMemberSort': false,
        'memberSyntaxSortOrder': [
          'none',
          'all',
          'multiple',
          'single'
        ]
      },
    ],
    'comma-dangle': ['error', {
        'arrays': 'always-multiline',
        'objects': 'always-multiline',
        'imports': 'always-multiline',
        'exports': 'always-multiline',
        'functions': 'always-multiline'
    }],
  }
};
