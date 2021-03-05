module.exports = {
    extends: 'stylelint-config-standard',
    rules: {
        // @"always-multi-line"
        'rule-empty-line-before': ['always', {
            ignore: ['first-nested', 'after-comment'],
        }],

        /**
         * Function (calc, linear-gradient)
         */
        'function-url-no-scheme-relative': true,
        'function-url-quotes': 'always',

        /**
         * Color
         */
        'color-named': 'never',
        'color-hex-case': 'lower',
        'color-hex-length': 'long',

        /**
         * String
         */
        'string-quotes': 'single',

        /**
         * Block
         */
        'block-closing-brace-space-after': 'always-single-line',
        'block-opening-brace-newline-after': 'always', // @"always-multi-line"
        'block-opening-brace-newline-before': 'never-single-line',
        'block-closing-brace-empty-line-before': 'never',

        /**
         * General / Sheet
         */
        indentation: 4, // @2
        'max-nesting-depth': 4,
        'max-line-length': 120,
        'max-empty-lines': 1,
        'no-eol-whitespace': true,

        /**
         * Shorthand property
         */
        'shorthand-property-no-redundant-values': true,

        /**
         * Declaration
         */
        'declaration-block-no-redundant-longhand-properties': true,
        'declaration-no-important': true,
        'declaration-empty-line-before': 'never',
    },
};
