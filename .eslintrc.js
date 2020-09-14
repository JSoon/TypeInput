const {
  NODE_ENV,
} = process.env;
const NODE_ENV_DEV = 'development';
const NODE_ENV_STAGE = 'staging';
const NODE_ENV_PROD = 'production';

module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  globals: {
    chai: 'readonly',
    mocha: 'readonly',
    describe: 'readonly',
    it: 'readonly',
  },
  plugins: [
    'html',
  ],
  extends: [
    'airbnb-base',
  ],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 6,
    ecmaFeatures: {
      experimentalObjectRestSpread: true
    },
    sourceType: 'module',
  },
  rules: {
    // #region ESlint规则

    // https://eslint.org/docs/rules/
    // https://eslint.org/docs/user-guide/configuring#extending-configuration-files
    'no-console': NODE_ENV === NODE_ENV_PROD ? 'warn' : 'off',
    'no-debugger': NODE_ENV === NODE_ENV_PROD ? 'warn' : 'off',
    'max-len': ['error', 200],
    'comma-dangle': ['error', 'always-multiline'],
    'consistent-return': 'off',
    'import/extensions': 'off',
    'import/no-cycle': 'off',
    'import/no-unresolved': 'off',
    'import/no-extraneous-dependencies': 'off',
    'import/prefer-default-export': 'off',
    'func-names': 'off',
    'linebreak-style': 'off',
    'no-unused-vars': 'warn',
    'no-useless-return': 'warn',
    'no-use-before-define': ['error', 'nofunc'],
    'no-unused-expressions': 'off',
    'no-param-reassign': 'warn',
    'no-shadow': 'warn',
    'brace-style': ['error', 'stroustrup', {
      allowSingleLine: true,
    }],
    'no-irregular-whitespace': 'off',
    'no-underscore-dangle': 'off',

    // #endregion
  },
  overrides: [{
    files: [
      '**/tests/*.{j,t}s?(x)',
      '**/__tests__/*.{j,t}s?(x)',
      '**/tests/unit/**/*.spec.{j,t}s?(x)',
    ],
    env: {
      mocha: true,
    },
  }],
};
