// Client
import { Inter } from 'next/font/google';
import { GetBooksDocument, SayHelloDocument } from '@@/pages/api/front/generated/graphql';
import { useQuery } from '@apollo/client';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  // TypedDocumentNodeでドキュメントをuseQueryに渡すだけで
  //　返却されるdataや第二引数など，これ以降の変数に動的に?型付けがされる
  const { data, loading, error } = useQuery(GetBooksDocument);

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
      <div>
        {data.books.map((book, index) => {
          return <p key={index}>{book?.author}</p>;
        })}
        {/* {data.hello} */}
      </div>
    </main>
  );
}
