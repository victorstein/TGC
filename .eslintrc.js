module.exports = {
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      extends: 'standard-with-typescript',
      rules: {
        '@typescript-eslint/no-var-requires': 0,
        '@typescript-eslint/triple-slash-reference': 0,
        '@typescript-eslint/indent': 0,
        '@typescript-eslint/no-confusing-void-expression': 0,
        'multiline-ternary': 0
      }
    }
  ]
}
