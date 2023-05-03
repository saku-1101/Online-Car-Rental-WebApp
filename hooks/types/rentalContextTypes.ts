type Rental = {
  // クエリの戻り値の型を定義をそのまま使う
  __typename?: 'Rental' | undefined;
  rental_id: number;
  rental_days: number;
  total_price: number;
  car?:
    | {
        __typename?: 'Car' | undefined;
        brand: string;
        car_id: number;
        model: string;
        model_year: number;
        price_per_day: number;
      }
    | null
    | undefined;
};
type RentalsContextType = {
  rentals: Rental[];
  HandleSetRentals: (rental: Rental) => void;
  HandleDeleteRentals: (rental: Rental[]) => void;
};

export type { Rental, RentalsContextType };
