module.exports = {
    env: {
        browser: true,
        es6: true,
        node: true,
    },
    extends: [
        'airbnb-base',
        'plugin:vue/essential',
        'plugin:import/errors',
        'plugin:import/warnings',
    ],
    parserOptions: {
        sourceType: 'module',
    },
    rules: {
        'max-len': [
            'error',
            120,
        ],
        indent: [
            'error',
            4,
            { SwitchCase: 1 },
        ],
        'space-before-function-paren': [
            'error',
            'always',
        ],
        'padding-line-between-statements': [
            'error',
            { blankLine: 'always', prev: '*', next: 'return' },
        ],
        'no-param-reassign': [
            'error',
            { props: false },
        ],
        'no-plusplus': [
            'error',
            { allowForLoopAfterthoughts: true },
        ],
        'no-underscore-dangle': 'off',
    },
    settings: {
        'import/resolver': 'nuxt',
    },
};
