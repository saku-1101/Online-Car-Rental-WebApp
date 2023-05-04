import { Rental } from '../types/rentalContextTypes';

export const passToHandleDeleteRentals = (
  rental_id: number,
  rentals: Rental[] = JSON.parse(sessionStorage.getItem('rentals') || '[]') as Rental[],
) => {
  return rentals.filter((rental) => rental.rental_id !== rental_id);
};
