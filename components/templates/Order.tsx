import PageTitle from '../atoms/PageTitle';
import OrderDetails from '../atoms/OrderDetails';
import { useEffect, useLayoutEffect, useState } from 'react';
import { useCustomerContext } from '@@/hooks/useCustomerContext';
import { useMutation, useQuery } from '@apollo/client';
import { CustomerDocument } from '@@/pages/api/front/generated/graphql';
import paymentData from '../../prisma/data/payment.json';
import { UpdatePaymentMethodDocument } from '@@/pages/api/front/generated/graphql';
import { useRouter } from 'next/router';
import { useRentalsContext } from '@@/hooks/useRentalContext';
import { usePersistedState } from '@@/hooks/usePersistedState';

// TODO:Then, checkout

export default function Order() {
  const { customerId, handleSetCustomerId } = useCustomerContext();
  const { rentals, HandleDeleteRentals } = useRentalsContext();
  const { data, loading, error } = useQuery(CustomerDocument, { variables: { customerId }, pollInterval: 1000 });
  const [paymentId, setPaymentId] = useState(0);
  const [updatePaymentMethodFunc] = useMutation(UpdatePaymentMethodDocument);
  const router = useRouter();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error</p>;
  if (!data || !data.customer) return <p>No data</p>;

  const handleSetPaymentId = () => {
    return (e: any) => {
      setPaymentId(e.target.value);
    };
  };

  const checkOut = async () => {
    const res = await updatePaymentMethodFunc({
      variables: {
        input: {
          car_id: 4,
          customer_id: 13,
          payment_id: 3,
          rental_days: 4,
        },
        rentalId: 78,
      },
    });
    HandleDeleteRentals([]); // rentals ローカルストレージデータの消去
    handleSetCustomerId(0); // customerID ローカルストレージデータのリセット
    localStorage.clear(); // 残りローカルストレージデータの消去
    console.log(res, rentals, customerId);
    router.push('/thankyou');
  };

  return (
    <>
      <div className='w-screen h-screen flex flex-col items-center justify-center gap-6'>
        <PageTitle title='Place the Order' />

        <div className='flex flex-col w-full border-opacity-50'>
          <div className='divider'>Content</div>
          <div className='overflow-x-auto'>
            <table className='table w-full'>
              {/* head */}
              <thead>
                <tr>
                  <th></th>
                  <th>Name</th>
                  <th>Rental Days</th>
                  <th>Sub Total</th>
                </tr>
              </thead>
              <tbody>
                {/* row */}
                {data.customer.rentals!.map((rental) => {
                  return (
                    <tr key={rental.rental_id}>
                      <th></th>
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
        <select className='select select-accent w-full max-w-xs'>
          <option disabled selected>
            Select the payment method
          </option>
          {paymentData.map((payment) => {
            return (
              <option key={payment.payment_id} value={payment.payment_id} onChange={handleSetPaymentId()}>
                {payment.name}
              </option>
            );
          })}
        </select>

        <div className='w-full flex flex-row justify-center gap-10'>
          <button className='btn btn-secondary' onClick={() => checkOut()}>
            Checkout
          </button>
        </div>
      </div>
    </>
  );
}