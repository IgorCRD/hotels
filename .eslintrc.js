module.exports = {
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
      modules: true,
      experimentalObjectRestSpread: true,
    },
  },
  rules: {
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'react/no-did-mount-set-state': [false],
  },
  extends: ['airbnb', 'plugin:react/recommended'],
  env: {
    es6: true,
    browser: true,
    node: true,
    jest: true,
  },
  settings: {
    react: {
      pragma: 'React',
      version: '16.3.2',
    },
    'import/resolver': {
      webpack: {
        config: 'webpack.config.js',
      },
    },
  },
};
