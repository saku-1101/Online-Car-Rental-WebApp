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
  category: Scalars['String'];
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
  country: Scalars['String'];
  email: Scalars['String'];
  name: Scalars['String'];
  phone_number: Scalars['String'];
  postCode: Scalars['String'];
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
  country: Scalars['String'];
  customer_id: Scalars['Int'];
  email: Scalars['String'];
  name: Scalars['String'];
  phone_number: Scalars['String'];
  postCode: Scalars['String'];
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

export type CreateCustomerMutationVariables = Exact<{
  input: CreateCustomerInput;
}>;


export type CreateCustomerMutation = { __typename?: 'Mutation', createCustomer: { __typename?: 'Customer', customer_id: number } };

export type CreateRentalMutationVariables = Exact<{
  input: CreateRentalInput;
}>;


export type CreateRentalMutation = { __typename?: 'Mutation', createRental: { __typename?: 'Rental', rental_id: number, rental_days: number, total_price: number, car?: { __typename?: 'Car', brand: string, car_id: number, model: string, model_year: number, price_per_day: number } | null } };

export type DeleteRentalMutationVariables = Exact<{
  rentalId: Scalars['Int'];
}>;


export type DeleteRentalMutation = { __typename?: 'Mutation', deleteRental?: { __typename?: 'Rental', rental_id: number, total_price: number, rental_days: number } | null };

export type UpdatePaymentMethodMutationVariables = Exact<{
  input: CreateRentalInput;
  rentalId: Scalars['Int'];
}>;


export type UpdatePaymentMethodMutation = { __typename?: 'Mutation', updateRental: { __typename?: 'Rental', rental_id: number, paymentMethod?: { __typename?: 'PaymentMethod', name: string, payment_id: number } | null, customer?: { __typename?: 'Customer', customer_id: number, email: string } | null } };

export type UpdateRentalMutationVariables = Exact<{
  rentalId: Scalars['Int'];
  input: CreateRentalInput;
}>;


export type UpdateRentalMutation = { __typename?: 'Mutation', updateRental: { __typename?: 'Rental', rental_days: number, total_price: number } };

export type GetCarsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetCarsQuery = { __typename?: 'Query', cars: Array<{ __typename?: 'Car', availability: boolean, brand: string, car_id: number, category: string, description: string, fuel_type: string, mileage: number, model: string, model_year: number, price_per_day: number, seats: number }> };

export type CustomerQueryVariables = Exact<{
  customerId: Scalars['Int'];
}>;


export type CustomerQuery = { __typename?: 'Query', customer?: { __typename?: 'Customer', customer_id: number, name: string, email: string, phone_number: string, postCode: string, address: string, suburb: string, state: string, country: string, rentals?: Array<{ __typename?: 'Rental', rental_id: number, rental_days: number, total_price: number, car?: { __typename?: 'Car', brand: string, car_id: number, model_year: number, model: string } | null }> | null } | null };

export type GetRentalsOfCustomerQueryVariables = Exact<{
  customerId: Scalars['Int'];
}>;


export type GetRentalsOfCustomerQuery = { __typename?: 'Query', customer?: { __typename?: 'Customer', rentals?: Array<{ __typename?: 'Rental', rental_id: number, rental_days: number, total_price: number, car?: { __typename?: 'Car', brand: string, car_id: number, model: string, model_year: number, price_per_day: number } | null }> | null } | null };


export const CreateCustomerDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateCustomer"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateCustomerInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createCustomer"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"customer_id"}}]}}]}}]} as unknown as DocumentNode<CreateCustomerMutation, CreateCustomerMutationVariables>;
export const CreateRentalDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateRental"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateRentalInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createRental"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"rental_id"}},{"kind":"Field","name":{"kind":"Name","value":"rental_days"}},{"kind":"Field","name":{"kind":"Name","value":"total_price"}},{"kind":"Field","name":{"kind":"Name","value":"car"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"brand"}},{"kind":"Field","name":{"kind":"Name","value":"car_id"}},{"kind":"Field","name":{"kind":"Name","value":"model"}},{"kind":"Field","name":{"kind":"Name","value":"model_year"}},{"kind":"Field","name":{"kind":"Name","value":"price_per_day"}}]}}]}}]}}]} as unknown as DocumentNode<CreateRentalMutation, CreateRentalMutationVariables>;
export const DeleteRentalDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeleteRental"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"rentalId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteRental"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"rental_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"rentalId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"rental_id"}},{"kind":"Field","name":{"kind":"Name","value":"total_price"}},{"kind":"Field","name":{"kind":"Name","value":"rental_days"}}]}}]}}]} as unknown as DocumentNode<DeleteRentalMutation, DeleteRentalMutationVariables>;
export const UpdatePaymentMethodDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"updatePaymentMethod"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateRentalInput"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"rentalId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateRental"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}},{"kind":"Argument","name":{"kind":"Name","value":"rental_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"rentalId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"rental_id"}},{"kind":"Field","name":{"kind":"Name","value":"paymentMethod"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"payment_id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"customer"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"customer_id"}},{"kind":"Field","name":{"kind":"Name","value":"email"}}]}}]}}]}}]} as unknown as DocumentNode<UpdatePaymentMethodMutation, UpdatePaymentMethodMutationVariables>;
export const UpdateRentalDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"updateRental"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"rentalId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateRentalInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateRental"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"rental_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"rentalId"}}},{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"rental_days"}},{"kind":"Field","name":{"kind":"Name","value":"total_price"}}]}}]}}]} as unknown as DocumentNode<UpdateRentalMutation, UpdateRentalMutationVariables>;
export const GetCarsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getCars"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cars"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"availability"}},{"kind":"Field","name":{"kind":"Name","value":"brand"}},{"kind":"Field","name":{"kind":"Name","value":"car_id"}},{"kind":"Field","name":{"kind":"Name","value":"category"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"fuel_type"}},{"kind":"Field","name":{"kind":"Name","value":"mileage"}},{"kind":"Field","name":{"kind":"Name","value":"model"}},{"kind":"Field","name":{"kind":"Name","value":"model_year"}},{"kind":"Field","name":{"kind":"Name","value":"price_per_day"}},{"kind":"Field","name":{"kind":"Name","value":"seats"}}]}}]}}]} as unknown as DocumentNode<GetCarsQuery, GetCarsQueryVariables>;
export const CustomerDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Customer"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"customerId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"customer"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"customer_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"customerId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"customer_id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"phone_number"}},{"kind":"Field","name":{"kind":"Name","value":"postCode"}},{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"suburb"}},{"kind":"Field","name":{"kind":"Name","value":"state"}},{"kind":"Field","name":{"kind":"Name","value":"country"}},{"kind":"Field","name":{"kind":"Name","value":"rentals"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"rental_id"}},{"kind":"Field","name":{"kind":"Name","value":"rental_days"}},{"kind":"Field","name":{"kind":"Name","value":"total_price"}},{"kind":"Field","name":{"kind":"Name","value":"car"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"brand"}},{"kind":"Field","name":{"kind":"Name","value":"car_id"}},{"kind":"Field","name":{"kind":"Name","value":"model_year"}},{"kind":"Field","name":{"kind":"Name","value":"model"}}]}}]}}]}}]}}]} as unknown as DocumentNode<CustomerQuery, CustomerQueryVariables>;
export const GetRentalsOfCustomerDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getRentalsOfCustomer"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"customerId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"customer"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"customer_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"customerId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"rentals"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"rental_id"}},{"kind":"Field","name":{"kind":"Name","value":"rental_days"}},{"kind":"Field","name":{"kind":"Name","value":"total_price"}},{"kind":"Field","name":{"kind":"Name","value":"car"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"brand"}},{"kind":"Field","name":{"kind":"Name","value":"car_id"}},{"kind":"Field","name":{"kind":"Name","value":"model"}},{"kind":"Field","name":{"kind":"Name","value":"model_year"}},{"kind":"Field","name":{"kind":"Name","value":"price_per_day"}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetRentalsOfCustomerQuery, GetRentalsOfCustomerQueryVariables>;