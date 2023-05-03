import PageTitle from '../atoms/PageTitle';
import OrderDetails from '../atoms/OrderDetails';
import OrderCard from '@@/components/morecules/OrderCard';
import { useRentalsContext } from '@@/hooks/useRentalContext';
import { Rental } from '@@/hooks/types/rentalContextTypes';
import { useEffect, useState } from 'react';
import { useMutation } from '@apollo/client';
import { UpdateRentalDocument } from '@@/pages/api/front/generated/graphql';
import { useCustomerContext } from '@@/hooks/useCustomerContext';
import { useRouter } from 'next/router';

export type itemState = { rental_id: number; isSelected: boolean };
export type itemSubTotal = { rental_id: number; subTotal: number };

export default function Cart() {
  const [updateRentalFunc, { data, loading, error }] = useMutation(UpdateRentalDocument);
  const router = useRouter();
  const { customerId } = useCustomerContext();
  const { rentals, HandleDeleteRentals } = useRentalsContext(); // fetch from localstrage
  const [rs, setRs] = useState<Rental[]>([]); // ローカルストレージの値を細かく変えるのが手間なので、一旦stateに入れる
  useEffect(() => {
    setRs(rentals);
  }, [rentals]);

  // change total_price when the user changes the rental days
  const changeSubTotalAndDays = (rental_id: number, fee: number, days: number) => {
    const newRs = rs.map((rental) => {
      if (rental.rental_id === rental_id) {
        return { ...rental, total_price: fee, rental_days: days };
      } else {
        return rental;
      }
    });
    setRs(newRs);
  };

  // Delete a rental from the UI and localstorage
  const deleteRental = (rental_id: number) => {
    let afterDeleteRentals = rs;
    afterDeleteRentals = afterDeleteRentals.filter((rental) => rental.rental_id !== rental_id);
    HandleDeleteRentals(afterDeleteRentals); // delete from localstorage
  };

  // update rental days and total_price in the database
  const updateRental = async (rentals: Rental[]) => {
    for (const rental of rentals) {
      const res = await updateRentalFunc({
        variables: {
          rentalId: rental.rental_id,
          input: {
            rental_days: Number(rental.rental_days),
            car_id: rental.car?.car_id || 0,
            customer_id: customerId,
            payment_id: 1, // default for now
          },
        },
      });
      console.log(res);
    }
  };
  const handleOnclick = async () => {
    await updateRental(rs);
    console.log('Everything is updated');
    router.push('/order');
  };

  if (loading) return <p>Loading...</p>;

  return (
    <div className='flex flex-col justify-center'>
      <PageTitle title='Your Cart' />
      <div className='flex justify-center'>
        <div className='w-3/4 grid grid-cols-3 gap-10'>
          {rs.map((rental: Rental) => (
            <OrderCard
              key={rental.rental_id}
              rental={rental}
              changeSubTotalAndDays={changeSubTotalAndDays}
              deleteRental={deleteRental}
            />
          ))}
        </div>
      </div>
      <div className='w-full flex flex-row justify-center gap-10'>
        <OrderDetails rentals={rs} />
        {/* rentalの日付やtotal金額などをアプデした後にリンクに飛ぶ */}
        <button className='btn btn-secondary' onClick={() => handleOnclick()}>
          Confirm your Order
        </button>
      </div>
    </div>
  );
}
