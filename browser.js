module.exports = {
  env: {
    browser: true,
  },
  extends: ['./index'].map(require.resolve),
  rules: {
    'jsx-a11y/label-has-for': [
      'error',
      {
        allowChildren: false,
        components: [],
        required: {
          every: ['nesting', 'id'],
        },
      },
    ],
    'no-console': 'off',
  },
  settings: {
    'import/resolver': {
      node: {
        paths: ['src'],
      },
    },
  },
};
