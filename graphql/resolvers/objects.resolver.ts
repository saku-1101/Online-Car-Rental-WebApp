import { _prismaClient as prisma } from './prisma-client';
import { findCarRentalById, findCustomerRentalById, findPaymentMethodRentalById, findRentalById } from './helper';

import { CarResolvers, CustomerResolvers, PaymentMethodResolvers, RentalResolvers } from '../server/generated/graphql';

const Rental: RentalResolvers = {
  car: async (parent) => {
    try {
      const rental = await findRentalById(parent.rental_id); // nullable
      return prisma.rental.findUnique({ where: { rental_id: rental.rental_id } }).car();
    } catch (error) {
      console.error(error);
      throw new Error('Car Not Found');
    }
  },
  customer: async (parent) => {
    // If the customer field is requested within the rental field, then rental field is able to access the customer field
    try {
      const rental = await findRentalById(parent.rental_id); // nullable
      return prisma.rental.findUnique({ where: { rental_id: rental.rental_id } }).customer();
    } catch (error) {
      console.error(error);
      throw new Error('Customer Not Found');
    }
  },
};
const Customer: CustomerResolvers = {
  // If the customer field is requested within the rental field, then rental field is able to access the customer field
  rentals: async (parent) => {
    try {
      return await findCustomerRentalById(parent.customer_id); // nullable
    } catch (error) {
      console.error(error);
      throw new Error('Customer Not Found');
    }
  },
};
const Car: CarResolvers = {
  rentals: async (parent) => {
    try {
      return await findCarRentalById(parent.car_id); // nullable
    } catch (error) {
      console.error(error);
      throw new Error('Customer Not Found');
    }
  },
};
const PaymentMethod: PaymentMethodResolvers = {
  rentals: async (parent) => {
    try {
      return await findPaymentMethodRentalById(parent.payment_id); // nullable
    } catch (error) {
      console.error(error);
      throw new Error('Customer Not Found');
    }
  },
};

export { Rental, Customer, Car, PaymentMethod };
