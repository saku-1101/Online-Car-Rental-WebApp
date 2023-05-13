import { useState, useEffect } from 'react';
import Draggable from 'react-draggable';
import { useRentalsContext } from '@@/hooks/useRentalContext';
import { Rental } from '@@/hooks/types/rentalContextTypes';
import { isEmpty } from 'lodash';
import { useRouter } from 'next/router';

export default function DraggableCart() {
  const [isMobile, setIsMobile] = useState(false);

  const router = useRouter();

  // TODO: 車が追加された瞬間にカートの中身を更新しなけれはならない or Loading が出る
  type cartDatatype = { items: number; nameOfCars: string[] };
  // localstorageに保存されているrentalsをカート用に加工したものを保存
  const [reactives, setReactives] = useState<cartDatatype>({} as cartDatatype); // 型アサーション:コンパイラの型推論を上書きする
  // localstorageに保存されているrentalsを取得
  const { rentals } = useRentalsContext();

  useEffect(() => {
    // ***detect mobile ***//
    if (window.innerWidth <= 800) setIsMobile(true);

    // ***handle rental state in cart***//
    const items = rentals.length;
    const nameOfCars: string[] = (rentals as Rental[]).map((rental) => {
      return rental.car?.brand || '';
    });
    setReactives({ items: items, nameOfCars: nameOfCars });
  }, [rentals]);

  const handleClick = () => {
    router.push('/cart');
  };
  console.log(reactives);

  return (
    <Draggable disabled={isMobile}>
      <div className='dropdown dropdown-top dropdown-left rounded-full flex-none fixed right-0 bottom-0 mr-4 mb-4 bg-white border shadow-sm text-2xl z-20'>
        <label tabIndex={1} className='btn btn-ghost btn-circle '>
          <div className='indicator'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-5 w-5'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z'
              />
            </svg>
            <span className='badge badge-sm indicator-item'>{reactives.items}</span>
          </div>
        </label>
        <div tabIndex={1} className='mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow p-0'>
          <div className='card-body'>
            <span className='font-bold text-lg'>{reactives.items} Items</span>
            {reactives.nameOfCars?.map((name, index) => {
              return (
                <span className='text-info' key={index}>
                  {name}
                </span>
              );
            })}

            <div className='card-actions'>
              <button
                disabled={reactives.items === 0 ? true : false}
                onClick={() => handleClick()}
                className='btn btn-primary btn-block'
              >
                View cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </Draggable>
  );
}
