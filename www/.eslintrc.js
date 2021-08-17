module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    tsconfigRootDir: __dirname,
  },
  extends: [
    'airbnb-typescript/base',
    'plugin:@typescript-eslint/recommended',
    'plugin:eslint-comments/recommended',
    'plugin:sonarjs/recommended'
  ],
  plugins: [
    '@typescript-eslint',
    'sonarjs'
  ],
  env: {
    node: true,
    browser: true,
    jest: true
  },
  rules: {
    // Too restrictive, writing ugly code to defend against a very unlikely scenario: https://eslint.org/docs/rules/no-prototype-builtins
    'no-prototype-builtins': 'off',
    'no-bitwise': 'off',
    // https://basarat.gitbooks.io/typescript/docs/tips/defaultIsBad.html
    'import/prefer-default-export': 'off',
    // Use function hoisting to improve code readability
    'no-use-before-define': [
      'error',
      { functions: false, classes: true, variables: true }
    ],
    // Makes no sense to allow type inferrence for expression parameters, but require typing the response
    // '@typescript-eslint/explicit-function-return-type': [
    //   'error',
    //   { allowExpressions: true, allowTypedFunctionExpressions: true },
    // ],
    '@typescript-eslint/no-use-before-define': [
      'error',
      { functions: false, classes: true, variables: true, typedefs: true }
    ]
  }
};
