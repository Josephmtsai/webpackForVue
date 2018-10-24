module.exports = {
  extends: 'airbnb-base',
  parser: 'babel-eslint',
  rules: {
    semi: [2, 'always'],
    'semi-spacing': [
      0,
      {
        before: false,
        after: true
      }
    ],
    quotes: ['error', 'single'],
    "indent": ["error", 4],
    'linebreak-style': 0,
    'padded-blocks': ['error', 'always'],
    'eol-last': ['error', 'always'],
    'comma-style': ['error', 'last'],
    'no-multiple-empty-lines': ['error', {
      'max': 1,
      "maxEOF": 1,
      "maxBOF": 1
    }]
  }
};