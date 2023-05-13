import ProductCard from '../morecules/ProductCard';
import PageTitle from '../atoms/PageTitle';
import { Car, GetCarsDocument } from '@@/pages/api/front/generated/graphql';
import { useQuery } from '@apollo/client';

export default function ProductsPage() {
  // TypedDocumentNodeでドキュメントをuseQueryに渡すだけで
  //　返却されるdataや第二引数など，これ以降の変数に動的に?型付けがされる
  const { data, loading, error } = useQuery(GetCarsDocument);

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

  // if (loading) return <Loading />;
  // if (error) return <p>An error occurred</p>;
  const { cars } = data; // queryの返却値の型が型推論される

  return (
    <div className='flex flex-col justify-center'>
      <PageTitle title='Cars' />
      <div className='flex justify-center'>
        <div className='w-3/4 grid grid-cols-1 lg:grid-cols-3 gap-10'>
          {cars.map((car: Car) => (
            <ProductCard key={car.car_id} car={car} button='Add to Cart' />
          ))}
        </div>
      </div>
    </div>
  );
}
