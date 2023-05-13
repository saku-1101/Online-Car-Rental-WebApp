import { Rental } from '@@/hooks/types/rentalContextTypes';
import { useRentalsContext } from '@@/hooks/useRentalContext';
export default function OrderDetails() {
  const { rentals } = useRentalsContext();
  const selectedItems: number = rentals.length;
  const selectedTotal: number = rentals.reduce((acc: number, cur: Rental): number => {
    return acc + cur.total_price;
  }, 0);
  return (
    <div className='flex flex-col justify-center'>
      <p className='text-md'>Selected Items: {selectedItems}</p>
      <p className='md:my-2 lg:my-5 text-2xl'>Total: ${selectedTotal}</p>
      <p className='text-sm'>Excluding service fees</p>
    </div>
  );
}
