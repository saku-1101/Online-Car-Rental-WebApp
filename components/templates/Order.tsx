import PageTitle from '../atoms/PageTitle';
import { useState } from 'react';
import { useCustomerContext } from '@@/hooks/useCustomerContext';
import { useMutation, useQuery } from '@apollo/client';
import { CustomerDocument } from '@@/pages/api/front/generated/graphql';
import paymentData from '../../prisma/data/payment.json';
import { UpdatePaymentMethodDocument } from '@@/pages/api/front/generated/graphql';
import { useRouter } from 'next/router';
import { Rental } from '@@/hooks/types/rentalContextTypes';

// TODO:Then, checkout

export default function Order() {
  const { customerId, handleSetCustomerId } = useCustomerContext();
  const { data, loading, error } = useQuery(CustomerDocument, { variables: { customerId }, pollInterval: 1000 });
  const [paymentId, setPaymentId] = useState<number>(0);
  const [updatePaymentMethodFunc] = useMutation(UpdatePaymentMethodDocument);
  const router = useRouter();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error</p>;
  if (!data || !data.customer) return <p>No data</p>;

  const handleChangePaymentMethod = async (rentals: Rental[]) => {
    for (const rental of rentals) {
      console.log(rental.car!.car_id, customerId, paymentId, rental.rental_days);
      const res = await updatePaymentMethodFunc({
        variables: {
          input: {
            car_id: rental.car!.car_id,
            customer_id: customerId,
            payment_id: paymentId,
            rental_days: rental.rental_days,
          },
          rentalId: rental.rental_id,
        },
      });
      console.log(res, rental, customerId);
    }
  };
  const checkOut = async () => {
    await handleChangePaymentMethod(data.customer!.rentals as Rental[]);
    sessionStorage.clear(); // sessionStorageの消去

    router.push('/thankyou');
  };

  return (
    <>
      <div className='w-screen h-screen flex flex-col items-center justify-center'>
        <PageTitle title='Place the Order' />

        <div className='flex flex-col w-3/4 border-opacity-50'>
          <div className='divider'>Content</div>
          <div className='overflow-x-auto'>
            <table className='table w-full'>
              {/* head */}
              <thead>
                <tr>
                  <td>Name</td>
                  <th>Rental Days</th>
                  <th>Sub Total</th>
                </tr>
              </thead>
              <tbody>
                {/* row */}
                {data.customer.rentals!.map((rental) => {
                  return (
                    <tr key={rental.rental_id}>
                      <td>
                        {rental.car!.brand}-{rental.car!.model}-{rental.car!.model_year}
                      </td>
                      <td>{rental.rental_days}</td>
                      <td>{rental.total_price}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <div className='divider'>Customer Information</div>
          <div className='overflow-x-auto'>
            <table className='table w-full'>
              {/* head */}
              <thead>
                <tr>
                  <th>Name/Email</th>
                  <th>Location</th>
                  <th>Phone</th>
                </tr>
              </thead>
              <tbody>
                {/* row */}
                <tr>
                  <td>
                    <div className='flex items-center space-x-3'>
                      <div>
                        <div className='font-bold'>{data.customer.name}</div>
                        <div className='text-sm opacity-50'>{data.customer!.email}</div>
                      </div>
                    </div>
                  </td>
                  <td>
                    {data.customer.address}, {data.customer.suburb}, {data.customer.state}, {data.customer.country}
                    <br />
                    <span className='badge badge-ghost badge-sm'> {data.customer.postCode}</span>
                  </td>
                  <td> {data.customer.phone_number}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className='divider'>Payment Method</div>
        </div>

        <select
          className='select select-accent w-full max-w-xs'
          onChange={(e: any) => {
            setPaymentId(Number(e.target.value));
            console.log(e.target.value);
          }}
        >
          <option disabled selected>
            Select the payment method
          </option>
          {paymentData.map((payment) => {
            return (
              <option key={payment.payment_id} value={payment.payment_id}>
                {payment.name}
              </option>
            );
          })}
        </select>

        <div className='w-full flex flex-row justify-center my-5'>
          <button className='btn btn-secondary' onClick={() => checkOut()}>
            Checkout
          </button>
        </div>

        {/* invisible */}
        <footer className='invisible footer footer-center p-4 bg-accent-focus text-base-content mt-5 sticky bottom-0 z-10 px-10 drop-shadow-md'>
          <div>
            <p>Copyright © {new Date().getFullYear()} - All right reserved by Sakura A</p>
          </div>
        </footer>
      </div>
    </>
  );
}
