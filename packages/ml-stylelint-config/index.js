module.exports = {
  extends: 'stylelint-config-standard',
  rules: {
    'string-quotes': 'single',
    'color-hex-length': 'short',
    'declaration-colon-newline-after': null,
    'no-missing-end-of-source-newline': true,
  },
  overrides: [
    {
      files: '**/*.less',
      customSyntax: 'postcss-less',
    },
    {
      files: ['*.scss', '**/*.scss'],
      customSyntax: 'postcss-scss',
    },
  ],
}
