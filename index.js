module.exports = {
  extends: ['airbnb', 'prettier', 'prettier/react'],
  parser: 'babel-eslint',
  plugins: ['prettier', 'react-hooks'],
  rules: {
    curly: ['error', 'all'],
    'default-case': 'off',
    'id-length': 'off',
    'import/default': 'error',
    'import/named': 'error',
    'import/namespace': 'error',
    'import/no-cycle': 'off',
    'import/prefer-default-export': 'off',
    'jsx-a11y/alt-text': 'off',
    'jsx-a11y/anchor-is-valid': 'off',
    'jsx-a11y/click-events-have-key-events': 'off',
    'jsx-a11y/label-has-associated-control': [
      'error',
      {
        required: {
          some: ['nesting', 'id'],
        },
      },
    ],
    'jsx-a11y/label-has-for': [
      'error',
      {
        required: {
          some: ['nesting', 'id'],
        },
      },
    ],
    'jsx-a11y/no-noninteractive-element-interactions': 'off',
    'jsx-a11y/no-static-element-interactions': 'off',
    'lines-between-class-members': 'off',
    'no-case-declarations': 'off',
    'no-negated-condition': 'off',
    'no-nested-ternary': 'off',
    'no-plusplus': 'off',
    'no-prototype-builtins': 'off',
    'no-underscore-dangle': 'off',
    'no-unused-vars': [
      'error',
      {
        args: 'after-used',
        argsIgnorePattern: '^_',
        ignoreRestSiblings: true,
        vars: 'all',
      },
    ],
    'padded-blocks': 'off',
    'prefer-destructuring': 'off',
    'prettier/prettier': [
      'error',
      {
        arrowParens: 'always',
        singleQuote: true,
        trailingComma: 'all',
      },
    ],
    radix: 'off',
    'react-hooks/exhaustive-deps': 'error',
    'react-hooks/rules-of-hooks': 'error',
    'react/default-props-match-prop-types': [
      'error',
      { allowRequiredDefaults: false },
    ],
    'react/destructuring-assignment': 'off',
    'react/forbid-prop-types': 'off',
    'react/jsx-filename-extension': [
      'warn',
      {
        extensions: ['.js', '.jsx'],
      },
    ],
    'react/jsx-no-target-blank': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/no-access-state-in-setstate': 'off',
    'react/no-direct-mutation-state': 'error',
    'react/no-find-dom-node': 'off',
    'react/no-unescaped-entities': 'off',
    'react/prop-types': [
      2,
      {
        skipUndeclared: true,
      },
    ],
    'react/require-default-props': [
      2,
      {
        forbidDefaultForRequired: true,
      },
    ],
    'react/self-closing-comp': 'off',
    'react/sort-comp': 'off',
    'sort-keys': [
      'error',
      'asc',
      {
        caseSensitive: true,
        minKeys: 2,
        natural: false,
      },
    ],
  },
};
