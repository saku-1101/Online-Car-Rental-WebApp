// Client
import Image from 'next/image';
import { Inter } from 'next/font/google';
import { _apolloClient } from '@@/pages/api/apollo/client';
import { gql, useQuery } from '@apollo/client';
import { graphql } from '../src/gql/gql';

const inter = Inter({ subsets: ['latin'] });

// codegenによって自動生成された型提供ありのgraphqlを用いる
// ここではTypedDocumentNode
const GET_STATUS = graphql(
  `
    query getStatus {
      statuses {
        author
        body
        createdAt
        id
      }
    }
  `,
);

export default function Home() {
  // TypedDocumentNodeのおかげでドキュメントをuseQueryに渡すだけで
  //　返却されるdataや第二引数など，これ以降の変数に動的に?型付けがされる
  const { data, loading, error } = useQuery(GET_STATUS);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    console.error(error);
    return <div>Error</div>;
  }

  if (!data) {
    return <div>No data</div>;
  }

  const { statuses } = data;
  console.log(statuses);

  return (
    <main className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}>
      <div>
        {statuses.map((status, index) => {
          return <p key={index}>{status?.author}</p>;
        })}
      </div>
    </main>
  );
}
