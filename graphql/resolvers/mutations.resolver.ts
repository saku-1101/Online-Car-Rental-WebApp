import { _prismaClient as prisma } from './prisma-client';
import { MutationResolvers } from '../server/generated/graphql';
async function getCarById(car_id: number) {
  const car = await prisma.car.findUnique({ where: { car_id } });
  if (!car) {
    throw new Error('Car not found');
  }
  return car;
}
export const mutations: MutationResolvers = {
  createCustomer: async (_, args) => {
    const { input } = args;
    return prisma.customer.create({ data: input });
  },
  updateCustomer: async (_, args) => {
    const { customer_id, input } = args;
    return prisma.customer.update({ where: { customer_id }, data: input });
  },
  deleteCustomer: async (_, args) => {
    const { customer_id } = args;
    return prisma.customer.delete({ where: { customer_id } });
  },
  createCar: async (_, args) => {
    const { input } = args;
    return prisma.car.create({ data: input });
  },
  updateCar: async (_, args) => {
    const { car_id, input } = args;
    return prisma.car.update({ where: { car_id }, data: input });
  },
  deleteCar: async (_, args) => {
    const { car_id } = args;
    return prisma.car.delete({ where: { car_id } });
  },
  createPaymentMethod: async (_, args) => {
    const { input } = args;
    return prisma.paymentMethod.create({ data: input });
  },
  updatePaymentMethod: async (_, args) => {
    const { payment_id, input } = args;
    return prisma.paymentMethod.update({ where: { payment_id }, data: input });
  },
  deletePaymentMethod: async (_, args) => {
    const { payment_id } = args;
    return prisma.paymentMethod.delete({ where: { payment_id } });
  },
  createRental: async (_, args) => {
    const { input } = args;
    const { car_id, customer_id, payment_id } = input;
    try {
      const car = await getCarById(car_id);
      const { price_per_day } = car;
      const { rental_days } = input;
      const total_price = rental_days * price_per_day;
      return prisma.rental.create({
        data: {
          rental_days,
          total_price,
          car: { connect: { car_id } },
          customer: { connect: { customer_id } },
          paymentMethod: { connect: { payment_id } },
        },
      });
    } catch (error) {
      console.error(error);
      throw new Error('Failed to create rental');
    }
  },
  updateRental: async (_, args) => {
    const { rental_id, input } = args;
    const { car_id, customer_id, payment_id } = input;
    try {
      const car = await getCarById(car_id);
      const { price_per_day } = car;
      const { rental_days } = input;
      const total_price = rental_days * price_per_day;
      return prisma.rental.update({
        where: { rental_id },
        data: {
          rental_days,
          total_price,
          car: { connect: { car_id } },
          customer: { connect: { customer_id } },
          paymentMethod: { connect: { payment_id } },
        },
      });
    } catch (error) {
      console.error(error);
      throw new Error('Failed to create rental');
    }
  },
  deleteRental: async (_, args) => {
    const { rental_id } = args;
    return prisma.rental.delete({ where: { rental_id } });
  },
};
