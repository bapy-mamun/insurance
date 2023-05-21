module.exports = {
  plugins: ['stylelint-order', 'stylelint-scss'],
  extends: [
    'stylelint-config-standard',
    'stylelint-config-standard-scss',
    'stylelint-config-recommended-scss', // Add extension rule for scss
    'stylelint-config-recess-order', // Set up automatic sorting of css properties for visibility
    'stylelint-config-prettier', // Turn off conflict rules with Prettier
  ],
  ignoreFiles: ['**/node_modules/**'],
  rules: {
    // Stylelint default rules
    'at-rule-no-unknown': null,
    // `color-hex-case` conflicts with `prettier`
    'color-hex-length': 'long',
    'color-function-notation': 'legacy', // Specify modern or legacy notation for color-functions. Options (string: "modern"|"legacy")
    'alpha-value-notation': 'number', // Specify percentage or number notation for alpha-values. Options (string: "number"|"percentage")
    'comment-empty-line-before': 'never',
    'comment-whitespace-inside': 'always',
    // `declaration-block-trailing-semicolon` conflicts with `prettier`
    // `declaration-colon-space-after` conflicts with `prettier`
    // `declaration-colon-space-before` conflicts with `prettier`
    'font-family-name-quotes': 'always-where-recommended',
    'function-url-quotes': 'always',
    // `identation` conflicts with `prettier`
    // `media-feature-colon-space-after` is set by `stylelint-config-prettier`
    // `media-feature-colon-space-before` is set by `stylelint-config-prettier`
    'media-feature-name-no-vendor-prefix': true,
    'media-feature-range-operator-space-after': 'never',
    'media-feature-colon-space-after': 'always',
    'media-feature-range-operator-space-before': 'never',
    // `media-feature-parentheses-space-inside` is set by `stylelint-config-prettier`
    // `number-leading-zero` conflicts with `prettier`
    'property-no-vendor-prefix': true,
    // `rule-empty-line-before` conflicts with `prettier
    // `selector-attribute-brackets-space-inside` is set by `stylelint-config-prettier`
    'selector-attribute-operator-space-after': 'never',
    'selector-attribute-operator-space-before': 'never',
    // `selector-combinator-space-after` conflicts with `prettier`
    'selector-no-vendor-prefix': true,
    // `selector-pseudo-class-parentheses-space-inside` is set by `stylelint-config-prettier`
    // `string-quotes` conflicts with `prettier`
    'value-no-vendor-prefix': true,

    // `stylelint-scss` rules
    'scss/at-rule-no-unknown': true,
    'selector-id-pattern': /^[a-z][a-zA-Z0-9]*$/,
    'unit-disallowed-list': ['vw'],
    'selector-pseudo-class-disallowed-list': ['hover'],
    'property-disallowed-list': ['font', 'z-index'],
    'selector-anb-no-unmatchable': 'never',
    'selector-class-pattern': null,
  },
  overrides: [
    {
      files: ['**/*.scss'],
      customSyntax: 'postcss-scss',
    },
  ],
};
