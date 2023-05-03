import { _prismaClient as prisma } from './prisma-client';

async function findRentalById(rentalId: number) {
  const rental = await prisma.rental.findUnique({ where: { rental_id: rentalId } });
  if (!rental) {
    throw new Error(`Rental with ID ${rentalId} not found`);
  }
  return rental;
}
async function findCustomerRentalById(customerId: number) {
  const rentals = await prisma.customer.findUnique({ where: { customer_id: customerId } }).rentals();
  if (!rentals) {
    throw new Error(`Customer with ID ${customerId} doesn't have rentals`);
  }
  return rentals;
}
async function findCarRentalById(carId: number) {
  const rentals = await prisma.car.findUnique({ where: { car_id: carId } }).rentals();
  if (!rentals) {
    throw new Error(`Car with ID ${carId} doesn't have rentals`);
  }
  return rentals;
}
async function findPaymentMethodRentalById(paymentMethodId: number) {
  const rentals = await prisma.paymentMethod.findUnique({ where: { payment_id: paymentMethodId } }).rentals();
  if (!rentals) {
    throw new Error(`Payment method with ID ${paymentMethodId} doesn't have rentals`);
  }
  return rentals;
}

export { findRentalById, findCustomerRentalById, findCarRentalById, findPaymentMethodRentalById };
