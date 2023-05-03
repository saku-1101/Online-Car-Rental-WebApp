-- CreateTable
CREATE TABLE "Customer" (
    "customer_id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "postCode" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone_number" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "suburb" TEXT NOT NULL,
    "state" TEXT NOT NULL,
    "country" TEXT NOT NULL,

    CONSTRAINT "Customer_pkey" PRIMARY KEY ("customer_id")
);

-- CreateTable
CREATE TABLE "Car" (
    "car_id" SERIAL NOT NULL,
    "availability" BOOLEAN NOT NULL,
    "category" TEXT NOT NULL,
    "brand" TEXT NOT NULL,
    "model" TEXT NOT NULL,
    "model_year" INTEGER NOT NULL,
    "mileage" INTEGER NOT NULL,
    "fuel_type" TEXT NOT NULL,
    "seats" INTEGER NOT NULL,
    "price_per_day" DOUBLE PRECISION NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "Car_pkey" PRIMARY KEY ("car_id")
);

-- CreateTable
CREATE TABLE "PaymentMethod" (
    "payment_id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "PaymentMethod_pkey" PRIMARY KEY ("payment_id")
);

-- CreateTable
CREATE TABLE "Rental" (
    "rental_id" SERIAL NOT NULL,
    "rental_days" INTEGER NOT NULL,
    "total_price" DOUBLE PRECISION NOT NULL,
    "car_id" INTEGER NOT NULL,
    "customer_id" INTEGER NOT NULL,
    "paymentMethodId" INTEGER NOT NULL,

    CONSTRAINT "Rental_pkey" PRIMARY KEY ("rental_id")
);

-- AddForeignKey
ALTER TABLE "Rental" ADD CONSTRAINT "Rental_car_id_fkey" FOREIGN KEY ("car_id") REFERENCES "Car"("car_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Rental" ADD CONSTRAINT "Rental_customer_id_fkey" FOREIGN KEY ("customer_id") REFERENCES "Customer"("customer_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Rental" ADD CONSTRAINT "Rental_paymentMethodId_fkey" FOREIGN KEY ("paymentMethodId") REFERENCES "PaymentMethod"("payment_id") ON DELETE RESTRICT ON UPDATE CASCADE;
