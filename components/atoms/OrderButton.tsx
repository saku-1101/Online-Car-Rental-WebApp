import { useCustomerContext } from '@@/hooks/useCustomerContext';
import { useRentalsContext } from '@@/hooks/useRentalContext';
import { Car, CreateRentalDocument, Rental } from '@@/pages/api/front/generated/graphql';
import { useMutation } from '@apollo/client';

export default function OrderButton(props: { label: string; car: Car }) {
  const { customerId } = useCustomerContext();
  const [addOrderFunc, { data, loading, error }] = useMutation(CreateRentalDocument);
  const { HandleSetRentals } = useRentalsContext();
  async function AddOrderHandler() {
    // add rental to DB
    const res = await addOrderFunc({
      variables: {
        input: {
          car_id: props.car.car_id,
          customer_id: Number(customerId), // RentalはCustomerに依存しているので，Customerが作成されていないとエラーになる
          payment_id: 1, // default 1 for now - refer to Payment.payment_id = 1
          rental_days: 0, // default 0 for now
        },
      },
    });
    console.log(res.data?.createRental);

    // add rental to localstorage
    // 複数のコンポーネントで同時に処理すると，localstorageの値が更新されない！
    // (どちらもresでawaitして更新しているため最後の方が採用される？)
    HandleSetRentals(res.data?.createRental as Rental);
  }

  if (loading) return <div>Loading...</div>;
  if (error) return <div>An error occurred</div>;

  return (
    <>
      <button
        disabled={props.car.availability ? false : true}
        className='btn btn-primary'
        onClick={(e: any) => AddOrderHandler()}
      >
        {props.label}
      </button>
    </>
  );
}
