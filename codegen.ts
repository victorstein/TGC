import { type CodegenConfig } from '@graphql-codegen/cli'

const config: CodegenConfig = {
  overwrite: true,
  schema: 'https://rubikcloud.net/graphql',
  documents: './src/**/*.gql',
  generates: {
    'src/types/schema.ts': { plugins: ['typescript'] },
    'src/integrations/graphql/operations.ts': {
      plugins: ['typescript-operations', 'typescript-document-nodes'],
      preset: 'import-types-preset',
      presetConfig: {
        typesPath: '@appTypes/schema'
      },
      config: {
        gqlImport: '@apollo/client#gql',
        nameSuffix: '',
        skipTypename: true,
        omitOperationSuffix: true,
        onlyOperationTypes: true
      }
    },
    './': {
      preset: 'near-operation-file',
      presetConfig: {
        extension: '.generated.tsx',
        baseTypesPath: './src/types/schema.ts'
      },
      plugins: ['typescript-operations', 'typescript-react-apollo'],
      config: {
        skipTypename: true,
        omitOperationSuffix: true,
        onlyOperationTypes: true,
        withRefetchFn: true
      }
    }
  }
}

export default config
