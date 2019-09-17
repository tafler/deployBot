module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    "ecmaVersion": 2019,
    "sourceType": "module"
  },
  plugins: ['prettier'],
  extends: [
    'airbnb-base',
    'plugin:@typescript-eslint/recommended',
    'prettier/@typescript-eslint',
    'plugin:prettier/recommended',
  ],
  rules: {
    'prettier/prettier': 'error',
  },
};
