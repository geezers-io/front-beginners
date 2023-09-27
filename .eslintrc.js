module.exports = {
  root: true,
  parser: '@babel/eslint-parser',
  extends: [
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:promise/recommended',
    'plugin:prettier/recommended',
    'prettier',
  ],
  plugins: ['react-hooks', 'promise', '@emotion'],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    'prettier/prettier': ['error', { endOfLine: 'auto' }],
    'no-else-return': 2,
    'no-restricted-syntax': [
      2,
      {
        selector: "LogicalExpression[right.type='AssignmentExpression']",
        message: 'right-hand assign is not allowed',
      },
    ],
    'promise/param-names': 0,
    'promise/catch-or-return': 0,
    'promise/always-return': 0,
    'react/prop-types': 2,
    'react/jsx-no-target-blank': 0,
    'react-hooks/exhaustive-deps': 1,
    'react/display-name': 0,
    'react/no-unknown-property': 0,
    'react/jsx-key': 0,
    'react/react-in-jsx-scope': 0,
  },
  settings: {
    react: {
      pragma: 'React',
      version: '18.0',
    },
  },
};
