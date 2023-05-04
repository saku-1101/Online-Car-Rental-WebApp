import { gql } from '@apollo/client';
export const schema = gql`
  type Customer {
    customer_id: Int!
    name: String!
    postCode: String!
    email: String!
    phone_number: String!
    address: String!
    suburb: String!
    state: String!
    country: String!
    rentals: [Rental!] # nullable
  }

  type Car {
    car_id: Int!
    availability: Boolean!
    category: String!
    brand: String!
    model: String!
    model_year: Int!
    mileage: Int!
    fuel_type: String!
    seats: Int!
    price_per_day: Float!
    description: String!
    url: String!
    rentals: [Rental!] # nullable
  }

  type PaymentMethod {
    payment_id: Int!
    name: String!
    rentals: [Rental!] # nullable
  }

  type Rental {
    rental_id: Int!
    rental_days: Int!
    total_price: Float!
    car: Car # nullable as findUnique() returns null if not found
    customer: Customer # nullable nullable as findUnique() returns null if not found
    paymentMethod: PaymentMethod # nullable nullable as findUnique() returns null if not found
  }

  input CreateCustomerInput {
    name: String!
    postCode: String!
    email: String!
    phone_number: String!
    address: String!
    suburb: String!
    state: String!
    country: String!
  }

  input CreateCarInput {
    availability: Boolean!
    category: String!
    brand: String!
    model: String!
    model_year: Int!
    mileage: Int!
    fuel_type: String!
    seats: Int!
    price_per_day: Float!
    description: String!
    url: String!
  }

  input CreatePaymentInput {
    name: String!
  }

  input CreateRentalInput {
    car_id: Int!
    customer_id: Int!
    payment_id: Int!
    rental_days: Int!
  }

  type Query {
    customers: [Customer!]!
    customer(customer_id: Int!): Customer
    cars: [Car!]!
    car(car_id: Int!): Car
    payments: [PaymentMethod!]!
    payment(payment_id: Int!): PaymentMethod
    rentals: [Rental!]!
    rental(rental_id: Int!): Rental
  }

  type Mutation {
    createCustomer(input: CreateCustomerInput!): Customer!
    updateCustomer(customer_id: Int!, input: CreateCustomerInput!): Customer!
    deleteCustomer(customer_id: Int!): Customer
    createCar(input: CreateCarInput!): Car!
    updateCar(car_id: Int!, input: CreateCarInput!): Car!
    deleteCar(car_id: Int!): Car
    createPaymentMethod(input: CreatePaymentInput!): PaymentMethod!
    updatePaymentMethod(payment_id: Int!, input: CreatePaymentInput!): PaymentMethod!
    deletePaymentMethod(payment_id: Int!): PaymentMethod
    createRental(input: CreateRentalInput!): Rental!
    updateRental(rental_id: Int!, input: CreateRentalInput!): Rental!
    deleteRental(rental_id: Int!): Rental
  }
`;
