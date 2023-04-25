import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: 'graphql/schemas/schema.graphql', // スキーマcodegen
  documents: ['./pages/api/**/*.graphql'], // frontクエリcodegen
  generates: {
    './graphql/server/generated/graphql.ts': {
      // server
      plugins: ['typescript', 'typescript-resolvers'],
      config: {
        rawRequest: true,
      },
    },
    './pages/api/front/generated/': {
      // client
      preset: 'client',
      plugins: [], // client-presetに含まれているのでプラグインは使用しない(*使用した場合，重複した型定義がなされる）
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

// typescript-react-apolloは使用しない．reactに限定しない方法で解決する
