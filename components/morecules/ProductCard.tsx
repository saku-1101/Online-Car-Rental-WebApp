import OrderButton from '../atoms/OrderButton';
import { Car } from '@@/pages/api/front/generated/graphql';

export default function ProductCard(props: { car: Car; button: string }) {
  return (
    <>
      <div className='card card-compact w-full aspect-square bg-base-100 shadow-xl p-0'>
        <figure className='w-full h-3/4'>
          <img src={props.car.url} alt='' className='object-cover w-full h-full' />
        </figure>
        <div className='card-body'>
          <h2 className='card-title text-neutral-focus'>
            {props.car.brand}-{props.car.model}-{props.car.model_year}
          </h2>
          <div className='badge badge-secondary'>{props.car.availability ? 'Available' : 'Not Available'}</div>
          <p className='text-base-content justify-start'>Milage: {props.car.mileage}</p>
          <p className='text-base-content justify-start'>Fuel Type: {props.car.fuel_type}</p>
          <p className='text-base-content justify-start'>Price: {props.car.price_per_day}/day</p>
          <p className='text-base-content justify-start'>Seats: {props.car.seats}</p>
          <p className='text-base-content justify-start'>Description: {props.car.description}</p>
          <div className='card-actions justify-end'>
            <OrderButton label={props.button} car={props.car} />
          </div>
        </div>
      </div>
    </>
  );
}
