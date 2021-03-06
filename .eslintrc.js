/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * Modified work Copyright 2018-present Mathias Kandelborg.
 * See license in the LICENSE file
 */

// ESLint configuration
// http://eslint.org/docs/user-guide/configuring
module.exports = {
  parserOptions: {
    sourceType: 'module',
    allowImportExportEverywhere: true
  },
  extends: [
    'airbnb',
    'plugin:css-modules/recommended',
    'plugin:prettier/recommended',
    'prettier'
  ],

  plugins: ['css-modules', 'prettier'],

  globals: {
    __DEV__: true
  },

  env: {
    browser: true
  },

  rules: {
    // ESLint plugin for prettier formatting
    // https://github.com/prettier/eslint-plugin-prettier
    'prettier/prettier': [
      'error',
      {
        tabWidth: 2,
        printWidth: 80,
        semi: false,
        trailingComma: 'none',
        singleQuote: true,
        bracketSpacing: true,
        jsxBracketSameLine: true,
        arrowParens: 'always'
      },
      {
        usePrettierrc: false
      }
    ],

    // Forbid the use of extraneous packages
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-extraneous-dependencies.md
    'import/no-extraneous-dependencies': 'off',
    'import/no-unresolved': 'off',
    // Recommend not to leave any console.log in your code
    // Use console.error, console.warn and console.info instead
    // https://eslint.org/docs/rules/no-console
    'no-console': [
      'error',
      {
        allow: ['warn', 'error', 'info']
      }
    ],

    // Prefer destructuring from arrays and objects
    // http://eslint.org/docs/rules/prefer-destructuring
    'prefer-destructuring': [
      'error',
      {
        VariableDeclarator: {
          array: false,
          object: true
        },
        AssignmentExpression: {
          array: false,
          object: false
        }
      },
      {
        enforceForRenamedProperties: false
      }
    ],

    // Ensure <a> tags are valid
    // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/anchor-is-valid.md
    'jsx-a11y/anchor-is-valid': [
      'error',
      {
        components: ['Link'],
        specialLink: ['to'],
        aspects: ['noHref', 'invalidHref', 'preferButton']
      }
    ],
    /*    'import/no-unresolved': 'off',
    'import/no-extraneous-dependencies': 'off', */

    'prefer-destructuring': [
      'error',
      {
        VariableDeclarator: {
          array: true,
          object: false
        },
        AssignmentExpression: {
          array: true,
          object: true
        }
      }
    ],

    'react/jsx-closing-bracket-location': 'off',

    // Allow .js files to use JSX syntax
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-filename-extension.md
    'react/jsx-filename-extension': ['error', { extensions: ['.js', '.jsx'] }],

    // Functional and class components are equivalent from React’s point of view
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prefer-stateless-function.md
    'react/prefer-stateless-function': 'off'
  },

  settings: {}
}
