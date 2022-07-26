module.exports = {
  root: true,
  extends: '@react-native-community',
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  rules: {
    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': ['error'],
    semi: 'off',
    'prettier/prettier': 'off',
    'react-hooks/exhaustive-deps': 'off',
  },
}
