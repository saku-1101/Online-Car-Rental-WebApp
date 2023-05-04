import { useEffect, useLayoutEffect, useState } from 'react';
import DeleteRentalButton from '../atoms/DeleteRentalButton';
import { Rental } from '@@/hooks/types/rentalContextTypes';

export default function OrderCard(props: {
  rental: Rental;
  changeSubTotalAndDays: (rental_id: number, fee: number, days: number) => void;
  deleteRental: (rental_id: number) => void;
}) {
  const [days, setDays] = useState(props.rental.rental_days);
  const [fee, setFee] = useState(props.rental.car!.price_per_day * props.rental.rental_days);

  // 初期値
  useLayoutEffect(() => {
    setFee(props.rental.car!.price_per_day * props.rental.rental_days);
    setDays(props.rental.rental_days);
    props.changeSubTotalAndDays(
      props.rental.rental_id,
      props.rental.car!.price_per_day * props.rental.rental_days,
      props.rental.rental_days,
    );
  }, [props.rental.car!.price_per_day, props.rental.rental_days]);

  return (
    <>
      <div className='card card-compact w-full bg-base-100 shadow-xl p-0'>
        <figure>{/* <img src={props.order.url} alt='' /> */}</figure>
        <div className='card-body'>
          <h2 className='card-title text-neutral-focus'>
            {props.rental.rental_id}-{props.rental.car?.model}-{props.rental.car?.brand}-{props.rental.car?.model_year}
          </h2>
          <p className='text-base-content justify-start'>$ {props.rental.car?.price_per_day}/day</p>

          <div className='form-control w-full max-w-xs'>
            <label className='label'>
              <span className='label-text'>How long do you want to rent?</span>
            </label>
            <select
              className='select select-primary w-full max-w-xs'
              value={props.rental.rental_days}
              onChange={(e: any) => {
                const price_per_day: number = props.rental.car!.price_per_day;
                const fee = price_per_day * e.target.value;
                props.changeSubTotalAndDays(props.rental.rental_id, fee, e.target.value);
              }}
            >
              <option value='1'>1 day</option>
              <option value='2'>2 days</option>
              <option value='3'>3 days</option>
              <option value='4'>4 days</option>
              <option value='5'>5 days</option>
            </select>
            <label className='label'>
              <span className='label-text-alt'>If you want to rent more days, contact us.</span>
            </label>
          </div>

          <div className='card-actions justify-between'>
            <div className='tooltip tooltip-right' data-tip={`${days} days`}>
              <button className='btn'>$ {fee}</button>
            </div>
            <DeleteRentalButton deleteRental={props.deleteRental} rental_id={props.rental.rental_id} />
          </div>
        </div>
      </div>
    </>
  );
}
