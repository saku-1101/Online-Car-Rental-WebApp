import { _prismaClient as prisma } from './prisma-client';

import { QueryResolvers } from '../server/generated/graphql';

export const queries: QueryResolvers = {
  customers: async () => {
    return prisma.customer.findMany();
  },
  customer: async (_, args) => {
    const { customer_id } = args;
    return prisma.customer.findUnique({ where: { customer_id } });
  },
  cars: async () => {
    return prisma.car.findMany();
  },
  car: async (_, args) => {
    const { car_id } = args;
    return prisma.car.findUnique({ where: { car_id } });
  },
  payments: async () => {
    return prisma.paymentMethod.findMany();
  },
  payment: async (_, args) => {
    const { payment_id } = args;
    return prisma.paymentMethod.findUnique({ where: { payment_id } });
  },
  rentals: async () => {
    return prisma.rental.findMany();
  },
  rental: async (_, args) => {
    const { rental_id } = args;
    return prisma.rental.findUnique({ where: { rental_id } });
  },
};
