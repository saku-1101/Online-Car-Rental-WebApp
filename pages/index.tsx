// Client
import { Inter } from 'next/font/google';
import { GetBooksDocument, GetUsersDocument, SayHelloDocument } from '@@/pages/api/front/generated/graphql';
import { useQuery } from '@apollo/client';
import { useEffect, useState } from 'react';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  // TypedDocumentNodeでドキュメントをuseQueryに渡すだけで
  //　返却されるdataや第二引数など，これ以降の変数に動的に?型付けがされる
  const [message, setMessage] = useState('');
  const { data, loading, error } = useQuery(GetUsersDocument);
  const HandleGetData = async () => {
    // const message = await useQuery(SayHelloDocument);
    setMessage('Hora!');
  };
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

  // const { books } = data; // ここのbookとかってどうやってわかるんやろ
  // console.log(data.hello);

  return (
    <main className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}>
      <h1>Users</h1>
      <div>
        {data.allUsers.map((user, index) => {
          return (
            <div key={index}>
              <p>
                {user?.id} {user?.name}
              </p>
            </div>
          );
        })}
        {message}
      </div>
      <button onClick={() => HandleGetData()}>Button</button>
    </main>
  );
}
