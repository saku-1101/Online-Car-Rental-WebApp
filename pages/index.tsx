// Client
import { Inter } from 'next/font/google';
import { GetStatusDocument } from '@@/graphql/generated/graphql';
import { _apolloClient } from '@@/apollo/client';
import { useQuery } from '@apollo/client';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  // TypedDocumentNodeのおかげでドキュメントをuseQueryに渡すだけで
  //　返却されるdataや第二引数など，これ以降の変数に動的に?型付けがされる
  const { data, loading, error } = useQuery(GetStatusDocument);

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
