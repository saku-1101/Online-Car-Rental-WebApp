import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: 'graphql/schemas/*.graphql', // apiエンドポイント
  documents: ['./graphql/resolvers/**/*.graphql'],
  generates: {
    './graphql/generated/': {
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
