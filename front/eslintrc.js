module.exports = {
    root: true,
    env: {
        browser: true,
        es6: true
    },
    extends: [
        'standard'
    ],
    globals: {
        Atomics: 'readonly',
        SharedArrayBuffer: 'readonly'
    },
    parserOptions: {
        ecmaVersion: 2018,
        sourceType: 'module'
    },
    parser: 'babel-eslint',
    rules: {
        'no-var': 1,
        'no-console': 'off',
        'linebreak-style': [
            0,
            'error',
            'windows'
        ],
        'max-len': [
            0,
            160,
            4
        ],
        'class-methods-use-this': 0,
        'import/newline-after-import': 0,
        'import/no-extraneous-dependencies': [
            'error',
            {
                devDependencies: true
            }
        ],
        indent: [
            'error',
            4,
            {
                SwitchCase: 1,
                VariableDeclarator: 1
            }
        ],
        'arrow-parens': [
            'error',
            'always'
        ],
        'react/forbid-prop-types': [
            0
        ],
        'react/react-in-jsx-scope': [
            0
        ],
        'react/button-has-type': [
            0
        ],
        'react/no-danger': [
            0
        ],
        'jsx-a11y/no-static-element-interactions': 'off',
        'jsx-a11y/click-events-have-key-events': 'off',
        'jsx-a11y/no-noninteractive-element-interactions': 'off',
        camelcase: 'off',
        'no-cycle': 'off',
        'no-plusplus': [
            'error',
            {
                allowForLoopAfterthoughts: true
            }
        ],
        'no-unused-expressions': [
            'error',
            {
                allowShortCircuit: true
            }
        ],
        'react/jsx-uses-react': 'off',
        'react/jsx-uses-vars': 'off',
        'no-unused-vars': 0,
        'no-nested-ternary': 0,
        'prefer-destructuring': 0,
        'global-require': 0,
        radix: 0,
        'func-names': 0,
        'no-underscore-dangle': 0,
        'prefer-rest-params': 0,
        'import/extensions': 0,
        'no-param-reassign': 0,
        'no-prototype-builtins': 0,
        'jsx-a11y/interactive-supports-focus': 0,
        'react/display-name': 0,
        'import/prefer-default-export': 0,
        'no-multi-assign': 0,
        'no-return-assign': 0,
        'array-callback-return': 0,
        semi: [1, 'always']
    }
}
