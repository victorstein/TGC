module.exports = {
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      plugins: ['react', 'react-native', 'check-file'],
      extends: [
        'standard-with-typescript',
        'plugin:react/recommended',
        'plugin:react-native/all',
        'plugin:react-hooks/recommended',
        'plugin:react/jsx-runtime'
      ],
      settings: {
        react: {
          version: 'detect'
        }
      },
      rules: {
        '@typescript-eslint/no-var-requires': 0,
        '@typescript-eslint/triple-slash-reference': 0,
        '@typescript-eslint/indent': 0,
        '@typescript-eslint/no-confusing-void-expression': 0,
        'multiline-ternary': 0,
        'react-native/no-inline-styles': 0,
        'react-native/no-color-literals': 0,
        'react-native/sort-styles': 0,
        'react-hooks/exhaustive-deps': 'error',
        'check-file/filename-naming-convention': [
          'error',
          {
            'src/**/*.{ts,tsx}': 'KEBAB_CASE'
          }
        ],
        'check-file/folder-naming-convention': [
          'error',
          {
            'src/**/': 'KEBAB_CASE'
          }
        ]
      }
    }
  ]
}
