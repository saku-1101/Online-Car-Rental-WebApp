import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const car_data = require('./data/cars.json');
const payment_data = require('./data/payment.json');

async function main() {
  // Create cars
  for (const car of car_data) {
    await prisma.car.create({
      data: car,
    });
  }

  // create payment methods
  for (const payment of payment_data) {
    await prisma.paymentMethod.create({
      data: payment,
    });
  }
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
