import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: 'graphql/schemas/schema.ts', // schema codegen
  documents: ['./pages/**/*.{graphql, ts, tsx}'], // front codegen
  generates: {
    './graphql/server/generated/graphql.ts': {
      // server
      plugins: ['typescript', 'typescript-resolvers'],
      config: {
        rawRequest: true,
        mapperTypeSuffix: 'Model', // これを指定しないと，型定義が重複してしまう
        mappers: {
          Customer: '@@/node_modules/.prisma/client#Customer',
          Car: '@@/node_modules/.prisma/client#Car',
          PaymentMethod: '@@/node_modules/.prisma/client#PaymentMethod',
          Rental: '@@/node_modules/.prisma/client#Rental',
        },
        inputMaybeValue: 'undefined | T',
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
