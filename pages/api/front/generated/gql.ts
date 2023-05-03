/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "mutation CreateCustomer($input: CreateCustomerInput!) {\n  createCustomer(input: $input) {\n    customer_id\n  }\n}": types.CreateCustomerDocument,
    "mutation CreateRental($input: CreateRentalInput!) {\n  createRental(input: $input) {\n    rental_id\n    rental_days\n    total_price\n    car {\n      brand\n      car_id\n      model\n      model_year\n      price_per_day\n    }\n  }\n}": types.CreateRentalDocument,
    "mutation DeleteRental($rentalId: Int!) {\n  deleteRental(rental_id: $rentalId) {\n    rental_id\n    total_price\n    rental_days\n  }\n}": types.DeleteRentalDocument,
    "mutation updatePaymentMethod($input: CreateRentalInput!, $rentalId: Int!) {\n  updateRental(input: $input, rental_id: $rentalId) {\n    rental_id\n    paymentMethod {\n      name\n      payment_id\n    }\n    customer {\n      customer_id\n      email\n    }\n  }\n}": types.UpdatePaymentMethodDocument,
    "mutation updateRental($rentalId: Int!, $input: CreateRentalInput!) {\n  updateRental(rental_id: $rentalId, input: $input) {\n    rental_days\n    total_price\n  }\n}": types.UpdateRentalDocument,
    "query getCars {\n  cars {\n    availability\n    brand\n    car_id\n    category\n    description\n    fuel_type\n    mileage\n    model\n    model_year\n    price_per_day\n    seats\n  }\n}": types.GetCarsDocument,
    "query Customer($customerId: Int!) {\n  customer(customer_id: $customerId) {\n    customer_id\n    name\n    email\n    phone_number\n    postCode\n    address\n    suburb\n    state\n    country\n    rentals {\n      rental_id\n      rental_days\n      total_price\n      car {\n        brand\n        car_id\n        model_year\n        model\n      }\n    }\n  }\n}": types.CustomerDocument,
    "query getRentalsOfCustomer($customerId: Int!) {\n  customer(customer_id: $customerId) {\n    rentals {\n      rental_id\n      rental_days\n      total_price\n      car {\n        brand\n        car_id\n        model\n        model_year\n        price_per_day\n      }\n    }\n  }\n}": types.GetRentalsOfCustomerDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation CreateCustomer($input: CreateCustomerInput!) {\n  createCustomer(input: $input) {\n    customer_id\n  }\n}"): (typeof documents)["mutation CreateCustomer($input: CreateCustomerInput!) {\n  createCustomer(input: $input) {\n    customer_id\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation CreateRental($input: CreateRentalInput!) {\n  createRental(input: $input) {\n    rental_id\n    rental_days\n    total_price\n    car {\n      brand\n      car_id\n      model\n      model_year\n      price_per_day\n    }\n  }\n}"): (typeof documents)["mutation CreateRental($input: CreateRentalInput!) {\n  createRental(input: $input) {\n    rental_id\n    rental_days\n    total_price\n    car {\n      brand\n      car_id\n      model\n      model_year\n      price_per_day\n    }\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation DeleteRental($rentalId: Int!) {\n  deleteRental(rental_id: $rentalId) {\n    rental_id\n    total_price\n    rental_days\n  }\n}"): (typeof documents)["mutation DeleteRental($rentalId: Int!) {\n  deleteRental(rental_id: $rentalId) {\n    rental_id\n    total_price\n    rental_days\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation updatePaymentMethod($input: CreateRentalInput!, $rentalId: Int!) {\n  updateRental(input: $input, rental_id: $rentalId) {\n    rental_id\n    paymentMethod {\n      name\n      payment_id\n    }\n    customer {\n      customer_id\n      email\n    }\n  }\n}"): (typeof documents)["mutation updatePaymentMethod($input: CreateRentalInput!, $rentalId: Int!) {\n  updateRental(input: $input, rental_id: $rentalId) {\n    rental_id\n    paymentMethod {\n      name\n      payment_id\n    }\n    customer {\n      customer_id\n      email\n    }\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation updateRental($rentalId: Int!, $input: CreateRentalInput!) {\n  updateRental(rental_id: $rentalId, input: $input) {\n    rental_days\n    total_price\n  }\n}"): (typeof documents)["mutation updateRental($rentalId: Int!, $input: CreateRentalInput!) {\n  updateRental(rental_id: $rentalId, input: $input) {\n    rental_days\n    total_price\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query getCars {\n  cars {\n    availability\n    brand\n    car_id\n    category\n    description\n    fuel_type\n    mileage\n    model\n    model_year\n    price_per_day\n    seats\n  }\n}"): (typeof documents)["query getCars {\n  cars {\n    availability\n    brand\n    car_id\n    category\n    description\n    fuel_type\n    mileage\n    model\n    model_year\n    price_per_day\n    seats\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query Customer($customerId: Int!) {\n  customer(customer_id: $customerId) {\n    customer_id\n    name\n    email\n    phone_number\n    postCode\n    address\n    suburb\n    state\n    country\n    rentals {\n      rental_id\n      rental_days\n      total_price\n      car {\n        brand\n        car_id\n        model_year\n        model\n      }\n    }\n  }\n}"): (typeof documents)["query Customer($customerId: Int!) {\n  customer(customer_id: $customerId) {\n    customer_id\n    name\n    email\n    phone_number\n    postCode\n    address\n    suburb\n    state\n    country\n    rentals {\n      rental_id\n      rental_days\n      total_price\n      car {\n        brand\n        car_id\n        model_year\n        model\n      }\n    }\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query getRentalsOfCustomer($customerId: Int!) {\n  customer(customer_id: $customerId) {\n    rentals {\n      rental_id\n      rental_days\n      total_price\n      car {\n        brand\n        car_id\n        model\n        model_year\n        price_per_day\n      }\n    }\n  }\n}"): (typeof documents)["query getRentalsOfCustomer($customerId: Int!) {\n  customer(customer_id: $customerId) {\n    rentals {\n      rental_id\n      rental_days\n      total_price\n      car {\n        brand\n        car_id\n        model\n        model_year\n        price_per_day\n      }\n    }\n  }\n}"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;