module.exports = {
  'env': {
    'node': true,
    'browser': true,
    'es2021': true,
  },
  'extends': [
    'eslint:recommended',
    "plugin:perfectionist/recommended-natural",
  ],
  'parserOptions': {
    'ecmaVersion': 'latest',
    'sourceType': 'module'
  },
  'plugins': [
    'newline-destructuring',
    'import-newlines',
  ],
  'rules': {
    'no-unused-vars': 'error',
    "no-multi-spaces": "error",
    'array-bracket-newline': [
      'error',
      "consistent",
    ],
    'array-element-newline': [
      'error',
      "consistent"
    ],
    'object-curly-newline': [
      'error',
      {
        'ObjectExpression': {
          'multiline': true,
          'minProperties': 1
        },
        'ObjectPattern': {
          'multiline': true,
          'minProperties': 1
        },
        'ImportDeclaration': {
          'consistent': true
        },
        'ExportDeclaration': {
          'multiline': true
        }
      }
    ],
    'object-curly-spacing': [
      'error',
      'always',
    ],
    'object-property-newline': [
      'error'
    ],
    'function-call-argument-newline': [
      'error',
      'consistent'
    ],
    'space-in-parens': [
      'error',
      'never',
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
    'comma-dangle': [
      'error',
      {
        'arrays': 'always-multiline',
        'objects': 'always-multiline',
        'imports': 'always-multiline',
        'exports': 'always-multiline',
        'functions': 'always-multiline'
      },
    ],
    'newline-destructuring/newline': [
      'error',
      { items: 1 },
    ],
    'import-newlines/enforce': [
      'error',
      {
        'items': 3
      }
    ],
  }
};
