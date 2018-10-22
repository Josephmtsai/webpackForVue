module.exports = {
  extends: 'airbnb-base',
  parser: 'babel-eslint',
  rules: {
    semi: [2, 'always'],
    'semi-spacing': [
      4,
      {
        before: false,
        after: true
      }
    ],
    quotes: ['error', 'single'],
    'linebreak-style': 0,
    'padded-blocks': ['error', 'always'],
    'eol-last': ['error', 'always'],
    'comma-style': ['error', 'last']
  }
};
