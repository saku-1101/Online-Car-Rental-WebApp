import { GraphQLResolveInfo } from 'graphql';
import { Customer as CustomerModel, Car as CarModel, PaymentMethod as PaymentMethodModel, Rental as RentalModel } from '@@/node_modules/.prisma/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = undefined | T;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
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



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;



/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  Car: ResolverTypeWrapper<CarModel>;
  CreateCarInput: CreateCarInput;
  CreateCustomerInput: CreateCustomerInput;
  CreatePaymentInput: CreatePaymentInput;
  CreateRentalInput: CreateRentalInput;
  Customer: ResolverTypeWrapper<CustomerModel>;
  Float: ResolverTypeWrapper<Scalars['Float']>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  Mutation: ResolverTypeWrapper<{}>;
  PaymentMethod: ResolverTypeWrapper<PaymentMethodModel>;
  Query: ResolverTypeWrapper<{}>;
  Rental: ResolverTypeWrapper<RentalModel>;
  String: ResolverTypeWrapper<Scalars['String']>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Boolean: Scalars['Boolean'];
  Car: CarModel;
  CreateCarInput: CreateCarInput;
  CreateCustomerInput: CreateCustomerInput;
  CreatePaymentInput: CreatePaymentInput;
  CreateRentalInput: CreateRentalInput;
  Customer: CustomerModel;
  Float: Scalars['Float'];
  Int: Scalars['Int'];
  Mutation: {};
  PaymentMethod: PaymentMethodModel;
  Query: {};
  Rental: RentalModel;
  String: Scalars['String'];
};

export type CarResolvers<ContextType = any, ParentType extends ResolversParentTypes['Car'] = ResolversParentTypes['Car']> = {
  availability?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  brand?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  car_id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  category?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  fuel_type?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  mileage?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  model?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  model_year?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  price_per_day?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  rentals?: Resolver<Maybe<Array<ResolversTypes['Rental']>>, ParentType, ContextType>;
  seats?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CustomerResolvers<ContextType = any, ParentType extends ResolversParentTypes['Customer'] = ResolversParentTypes['Customer']> = {
  address?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  country?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  customer_id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  phone_number?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  postCode?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  rentals?: Resolver<Maybe<Array<ResolversTypes['Rental']>>, ParentType, ContextType>;
  state?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  suburb?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  createCar?: Resolver<ResolversTypes['Car'], ParentType, ContextType, RequireFields<MutationCreateCarArgs, 'input'>>;
  createCustomer?: Resolver<ResolversTypes['Customer'], ParentType, ContextType, RequireFields<MutationCreateCustomerArgs, 'input'>>;
  createPaymentMethod?: Resolver<ResolversTypes['PaymentMethod'], ParentType, ContextType, RequireFields<MutationCreatePaymentMethodArgs, 'input'>>;
  createRental?: Resolver<ResolversTypes['Rental'], ParentType, ContextType, RequireFields<MutationCreateRentalArgs, 'input'>>;
  deleteCar?: Resolver<Maybe<ResolversTypes['Car']>, ParentType, ContextType, RequireFields<MutationDeleteCarArgs, 'car_id'>>;
  deleteCustomer?: Resolver<Maybe<ResolversTypes['Customer']>, ParentType, ContextType, RequireFields<MutationDeleteCustomerArgs, 'customer_id'>>;
  deletePaymentMethod?: Resolver<Maybe<ResolversTypes['PaymentMethod']>, ParentType, ContextType, RequireFields<MutationDeletePaymentMethodArgs, 'payment_id'>>;
  deleteRental?: Resolver<Maybe<ResolversTypes['Rental']>, ParentType, ContextType, RequireFields<MutationDeleteRentalArgs, 'rental_id'>>;
  updateCar?: Resolver<ResolversTypes['Car'], ParentType, ContextType, RequireFields<MutationUpdateCarArgs, 'car_id' | 'input'>>;
  updateCustomer?: Resolver<ResolversTypes['Customer'], ParentType, ContextType, RequireFields<MutationUpdateCustomerArgs, 'customer_id' | 'input'>>;
  updatePaymentMethod?: Resolver<ResolversTypes['PaymentMethod'], ParentType, ContextType, RequireFields<MutationUpdatePaymentMethodArgs, 'input' | 'payment_id'>>;
  updateRental?: Resolver<ResolversTypes['Rental'], ParentType, ContextType, RequireFields<MutationUpdateRentalArgs, 'input' | 'rental_id'>>;
};

export type PaymentMethodResolvers<ContextType = any, ParentType extends ResolversParentTypes['PaymentMethod'] = ResolversParentTypes['PaymentMethod']> = {
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  payment_id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  rentals?: Resolver<Maybe<Array<ResolversTypes['Rental']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  car?: Resolver<Maybe<ResolversTypes['Car']>, ParentType, ContextType, RequireFields<QueryCarArgs, 'car_id'>>;
  cars?: Resolver<Array<ResolversTypes['Car']>, ParentType, ContextType>;
  customer?: Resolver<Maybe<ResolversTypes['Customer']>, ParentType, ContextType, RequireFields<QueryCustomerArgs, 'customer_id'>>;
  customers?: Resolver<Array<ResolversTypes['Customer']>, ParentType, ContextType>;
  payment?: Resolver<Maybe<ResolversTypes['PaymentMethod']>, ParentType, ContextType, RequireFields<QueryPaymentArgs, 'payment_id'>>;
  payments?: Resolver<Array<ResolversTypes['PaymentMethod']>, ParentType, ContextType>;
  rental?: Resolver<Maybe<ResolversTypes['Rental']>, ParentType, ContextType, RequireFields<QueryRentalArgs, 'rental_id'>>;
  rentals?: Resolver<Array<ResolversTypes['Rental']>, ParentType, ContextType>;
};

export type RentalResolvers<ContextType = any, ParentType extends ResolversParentTypes['Rental'] = ResolversParentTypes['Rental']> = {
  car?: Resolver<Maybe<ResolversTypes['Car']>, ParentType, ContextType>;
  customer?: Resolver<Maybe<ResolversTypes['Customer']>, ParentType, ContextType>;
  paymentMethod?: Resolver<Maybe<ResolversTypes['PaymentMethod']>, ParentType, ContextType>;
  rental_days?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  rental_id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  total_price?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  Car?: CarResolvers<ContextType>;
  Customer?: CustomerResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  PaymentMethod?: PaymentMethodResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Rental?: RentalResolvers<ContextType>;
};

