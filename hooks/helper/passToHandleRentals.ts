import { Rental } from '../types/rentalContextTypes';

export const passToHandleRentals = (
  newRental: Rental,
  rentals: Rental[] = JSON.parse(sessionStorage.getItem('rentals') || '[]') as Rental[],
) => {
  const index = rentals.findIndex((rental) => rental.rental_id === newRental.rental_id);
  if (index === -1) {
    return [...rentals, newRental];
  } else {
    const updatedRentals = [...rentals];
    updatedRentals[index] = newRental;
    return updatedRentals;
  }
};
