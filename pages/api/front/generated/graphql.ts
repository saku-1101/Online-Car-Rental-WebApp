/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Car = {
  __typename?: 'Car';
  availability: Scalars['Boolean'];
  brand: Scalars['String'];
  car_id: Scalars['Int'];
  category: Scalars['String'];
  description: Scalars['String'];
  fuel_type: Scalars['String'];
  mileage: Scalars['Int'];
  model: Scalars['String'];
  model_year: Scalars['Int'];
  price_per_day: Scalars['Float'];
  rentals?: Maybe<Array<Rental>>;
  seats: Scalars['Int'];
};

export type CreateCarInput = {
  availability: Scalars['Boolean'];
  brand: Scalars['String'];
  description: Scalars['String'];
  fuel_type: Scalars['String'];
  mileage: Scalars['Int'];
  model: Scalars['String'];
  model_year: Scalars['Int'];
  price_per_day: Scalars['Float'];
  seats: Scalars['Int'];
};

export type CreateCustomerInput = {
  address: Scalars['String'];
  city: Scalars['String'];
  email: Scalars['String'];
  name: Scalars['String'];
  phone_number: Scalars['String'];
  state: Scalars['String'];
  suburb: Scalars['String'];
};

export type CreatePaymentInput = {
  name: Scalars['String'];
};

export type CreateRentalInput = {
  car_id: Scalars['Int'];
  customer_id: Scalars['Int'];
  payment_id: Scalars['Int'];
  rental_days: Scalars['Int'];
};

export type Customer = {
  __typename?: 'Customer';
  address: Scalars['String'];
  city: Scalars['String'];
  customer_id: Scalars['Int'];
  email: Scalars['String'];
  name: Scalars['String'];
  phone_number: Scalars['String'];
  rentals?: Maybe<Array<Rental>>;
  state: Scalars['String'];
  suburb: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createCar: Car;
  createCustomer: Customer;
  createPaymentMethod: PaymentMethod;
  createRental: Rental;
  deleteCar?: Maybe<Car>;
  deleteCustomer?: Maybe<Customer>;
  deletePaymentMethod?: Maybe<PaymentMethod>;
  deleteRental?: Maybe<Rental>;
  updateCar: Car;
  updateCustomer: Customer;
  updatePaymentMethod: PaymentMethod;
  updateRental: Rental;
};


export type MutationCreateCarArgs = {
  input: CreateCarInput;
};


export type MutationCreateCustomerArgs = {
  input: CreateCustomerInput;
};


export type MutationCreatePaymentMethodArgs = {
  input: CreatePaymentInput;
};


export type MutationCreateRentalArgs = {
  input: CreateRentalInput;
};


export type MutationDeleteCarArgs = {
  car_id: Scalars['Int'];
};


export type MutationDeleteCustomerArgs = {
  customer_id: Scalars['Int'];
};


export type MutationDeletePaymentMethodArgs = {
  payment_id: Scalars['Int'];
};


export type MutationDeleteRentalArgs = {
  rental_id: Scalars['Int'];
};


export type MutationUpdateCarArgs = {
  car_id: Scalars['Int'];
  input: CreateCarInput;
};


export type MutationUpdateCustomerArgs = {
  customer_id: Scalars['Int'];
  input: CreateCustomerInput;
};


export type MutationUpdatePaymentMethodArgs = {
  input: CreatePaymentInput;
  payment_id: Scalars['Int'];
};


export type MutationUpdateRentalArgs = {
  input: CreateRentalInput;
  rental_id: Scalars['Int'];
};

export type PaymentMethod = {
  __typename?: 'PaymentMethod';
  name: Scalars['String'];
  payment_id: Scalars['Int'];
  rentals?: Maybe<Array<Rental>>;
};

export type Query = {
  __typename?: 'Query';
  car?: Maybe<Car>;
  cars: Array<Car>;
  customer?: Maybe<Customer>;
  customers: Array<Customer>;
  payment?: Maybe<PaymentMethod>;
  payments: Array<PaymentMethod>;
  rental?: Maybe<Rental>;
  rentals: Array<Rental>;
};


export type QueryCarArgs = {
  car_id: Scalars['Int'];
};


export type QueryCustomerArgs = {
  customer_id: Scalars['Int'];
};


export type QueryPaymentArgs = {
  payment_id: Scalars['Int'];
};


export type QueryRentalArgs = {
  rental_id: Scalars['Int'];
};

export type Rental = {
  __typename?: 'Rental';
  car?: Maybe<Car>;
  customer?: Maybe<Customer>;
  paymentMethod?: Maybe<PaymentMethod>;
  rental_days: Scalars['Int'];
  rental_id: Scalars['Int'];
  total_price: Scalars['Float'];
};

export type GetCarsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetCarsQuery = { __typename?: 'Query', cars: Array<{ __typename?: 'Car', availability: boolean, brand: string, car_id: number, category: string, description: string, fuel_type: string, mileage: number, model: string, model_year: number, price_per_day: number, seats: number }> };


export const GetCarsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getCars"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cars"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"availability"}},{"kind":"Field","name":{"kind":"Name","value":"brand"}},{"kind":"Field","name":{"kind":"Name","value":"car_id"}},{"kind":"Field","name":{"kind":"Name","value":"category"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"fuel_type"}},{"kind":"Field","name":{"kind":"Name","value":"mileage"}},{"kind":"Field","name":{"kind":"Name","value":"model"}},{"kind":"Field","name":{"kind":"Name","value":"model_year"}},{"kind":"Field","name":{"kind":"Name","value":"price_per_day"}},{"kind":"Field","name":{"kind":"Name","value":"seats"}}]}}]}}]} as unknown as DocumentNode<GetCarsQuery, GetCarsQueryVariables>;