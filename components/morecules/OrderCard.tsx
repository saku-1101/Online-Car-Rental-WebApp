import { useLayoutEffect, useState } from 'react';
import DeleteRentalButton from '../atoms/DeleteRentalButton';
import { Rental } from '@@/hooks/types/rentalContextTypes';

export default function OrderCard(props: {
  rental: Rental;
  changeSubTotalAndDays: (rental_id: number, fee: number, days: number) => void;
  deleteRental: (rental_id: number) => void;
}) {
  const [value, setValue] = useState(1);
  const [fee, setFee] = useState(0);

  const handleChange = () => {
    return (e: any) => {
      const price_per_day: number = props.rental.car?.price_per_day || 0;
      setValue(e.target.value);
      const fee = price_per_day * e.target.value;
      setFee(fee);
      props.changeSubTotalAndDays(props.rental.rental_id, fee, e.target.value);
    };
  };

  // 初期値を１にして，ユーザにdeleteさせる
  useLayoutEffect(() => {
    setFee(props.rental.car?.price_per_day || 0);
  });

  return (
    <>
      <div className='card card-compact w-full bg-base-100 shadow-xl p-0'>
        <figure>{/* <img src={props.order.url} alt='' /> */}</figure>
        <div className='card-body'>
          <h2 className='card-title text-neutral-focus'>
            {props.rental.rental_id}-{props.rental.car?.model}-{props.rental.car?.brand}-{props.rental.car?.model_year}
          </h2>
          {/* <div className='badge badge-secondary'>{props.order.in_stock - amount > 0 ? 'InStock' : 'OutOfStock'}</div> */}
          <p className='text-base-content justify-start'>$ {props.rental.car?.price_per_day}/day</p>

          <div className='form-control w-full max-w-xs'>
            <label className='label'>
              <span className='label-text'>How long do you want to rent?</span>
            </label>
            <select className='select select-primary w-full max-w-xs' onChange={handleChange()}>
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
            <div className='tooltip tooltip-right' data-tip={`${value} days`}>
              <button className='btn'>$ {fee}</button>
            </div>
            <DeleteRentalButton deleteRental={props.deleteRental} rental_id={props.rental.rental_id} />
          </div>
        </div>
      </div>
    </>
  );
}
