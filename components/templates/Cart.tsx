import PageTitle from '../atoms/PageTitle';
import OrderDetails from '../atoms/OrderDetails';
import OrderCard from '@@/components/morecules/OrderCard';
import { useRentalsContext } from '@@/hooks/useRentalContext';
import { Rental } from '@@/hooks/types/rentalContextTypes';
import { useEffect, useLayoutEffect, useState } from 'react';
import { useMutation } from '@apollo/client';
import { UpdateRentalDocument } from '@@/pages/api/front/generated/graphql';
import { useCustomerContext } from '@@/hooks/useCustomerContext';
import { useRouter } from 'next/router';
import { passToHandleDeleteRentals, passToHandleRentals } from '@@/hooks/helper/index';
import React from 'react';

export default function Cart() {
  const [updateRentalFunc, { data, loading, error }] = useMutation(UpdateRentalDocument);
  const router = useRouter();
  const { customerId } = useCustomerContext();
  const { rentals, HandleSetRentals, HandleDeleteRentals } = useRentalsContext(); // fetch from localstrage
  const [selected, setSelected] = useState(true);

  ///// Prevent Hydration Error
  const [hasMounted, setHasMounted] = useState(false);
  useEffect(() => {
    setHasMounted(true);
  }, []);
  if (!hasMounted) {
    return null;
  }

  // change total_price when the user changes the rental days
  const changeSubTotalAndDays = (rental_id: number, fee: number, days: number) => {
    const updatedRental = (rentals as Rental[]).map((rental) => {
      if (rental.rental_id === rental_id) {
        console.log('here');
        return { ...rental, total_price: fee, rental_days: days };
      } else {
        return rental;
      }
    });
    const updatedRentalObject = updatedRental.find((rental) => rental.rental_id === rental_id);
    HandleSetRentals(passToHandleRentals(updatedRentalObject as Rental));
    setSelected(false);
  };

  // Delete a rental from the UI and localstorage
  const deleteRental = (rental_id: number) => {
    HandleDeleteRentals(passToHandleDeleteRentals(rental_id));
  };

  // update rental days and total_price in the database
  const updateRental = async (rentals: Rental[]) => {
    for (const rental of rentals) {
      const res = await updateRentalFunc({
        variables: {
          rentalId: rental.rental_id,
          input: {
            rental_days: Number(rental.rental_days),
            car_id: rental.car!.car_id,
            customer_id: customerId,
            payment_id: 1, // default for now
          },
        },
      });
      console.log(res);
    }
  };
  const handleOnclick = async () => {
    setSelected(true);
    await updateRental(rentals as Rental[]);
    router.push('/order');
  };

  return (
    <div className='flex flex-col justify-between content-center'>
      <PageTitle title='Your Cart' />
      <div className='flex justify-center items-around'>
        <div className='w-3/4 grid grid-cols-1 lg:grid-cols-3 gap-10'>
          {(rentals as Rental[]).map((rental: Rental) => (
            <OrderCard
              key={rental.rental_id}
              rental={rental}
              changeSubTotalAndDays={changeSubTotalAndDays}
              deleteRental={deleteRental}
            />
          ))}
        </div>
      </div>
      <div className='flex lg:flex-row lg:justify-center flex-col items-center my-10'>
        <OrderDetails />
        {/* rentalの日付やtotal金額などをアプデした後にリンクに飛ぶ */}
        <button disabled={selected} className='btn btn-secondary my-10' onClick={() => handleOnclick()}>
          Confirm your Order
        </button>
      </div>
    </div>
  );
}
