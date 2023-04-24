import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: 'graphql/schemas/schema.graphql', // apiエンドポイント
  documents: ['./graphql/**/*.graphql'],
  generates: {
    './graphql/generated/': {
      preset: 'client',
      plugins: [], // client-presetに含まれているのでプラグインは使用しない(*使用する場合，重複した型定義がなされる）
      config: {
        rawRequest: true,
      },
    },
    './graphql.schema.json': {
      plugins: ['introspection'],
    },
  },
};

export default config;
