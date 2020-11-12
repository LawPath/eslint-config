module.exports = {
  parser: 'babel-eslint',
  plugins: ['prettier', 'react-hooks'],
  extends: ['airbnb', 'prettier', 'prettier/react'],
  rules: {
    'prefer-destructuring': 'off',
    'react/sort-comp': 'off',
    'jsx-a11y/alt-text': 'off',
    'react/require-default-props': 'off',
    'import/prefer-default-export': 'off',
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        trailingComma: 'all',
        arrowParens: 'always',
      },
    ],
    'react/jsx-filename-extension': [
      'warn',
      {
        extensions: ['.js', '.jsx'],
      },
    ],
    'react/no-direct-mutation-state': 'error',
    'react/destructuring-assignment': 'off',
    'id-length': 'off',
    'padded-blocks': 'off',
    'no-underscore-dangle': 'off',
    'no-unused-vars': [
      'error',
      {
        vars: 'all',
        args: 'after-used',
        argsIgnorePattern: '^_',
        ignoreRestSiblings: true,
      },
    ],
    curly: ['error', 'all'],
    'import/named': 'error',
    'import/default': 'error',
    'import/namespace': 'error',
    'import/no-cycle': 'off',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'error',
    'react/jsx-props-no-spreading': 'off',
    'no-nested-ternary': 'off',
    'jsx-a11y/anchor-is-valid': 'off',
    'jsx-a11y/click-events-have-key-events': 'off',
    "jsx-a11y/label-has-associated-control": [ "error", {
      "required": {
        "some": [ "nesting", "id"  ]
      }
    }],
    "jsx-a11y/label-has-for": [ "error", {
      "required": {
        "some": [ "nesting", "id"  ]
      }
    }],
    'jsx-a11y/no-noninteractive-element-interactions': 'off',
    'jsx-a11y/no-static-element-interactions': 'off',
    'lines-between-class-members': 'off',
    'no-negated-condition': 'off',
    'no-plusplus': 'off',
    'no-prototype-builtins': 'off',
    'default-case': 'off',
    radix: 'off',
    'react/default-props-match-prop-types': 'off',
    'react/forbid-prop-types': 'off',
    'react/jsx-no-target-blank': 'off',
    'react/no-access-state-in-setstate': 'off',
    'react/no-find-dom-node': 'off',
    'react/no-unescaped-entities': 'off',
    'react/prop-types': 'off',
    'react/self-closing-comp': 'off',
  },
};
