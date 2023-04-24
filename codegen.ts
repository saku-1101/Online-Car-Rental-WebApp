import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: 'http://localhost:3000/api/graphql', // apiエンドポイント
  documents: ['./pages/*.tsx'], // clientサイドでクエリが書かれている場所
  generates: {
    './graphql/generated/': {
      preset: 'client',
      plugins: ['typescript', 'typescript-operations'],
    },
    './graphql.schema.json': {
      plugins: ['introspection'],
    },
  },
};

export default config;
