module.exports = {
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      extends: 'standard-with-typescript',
      rules: {
        '@typescript-eslint/triple-slash-reference': 0,
        '@typescript-eslint/indent': 0
      }
    }
  ]
}
