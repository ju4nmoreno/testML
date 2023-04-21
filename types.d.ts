export interface Item {
  id: string;
  title: string;
  price: Price;
  picture: string;
  free_shipping: boolean;
  city: string;
}

type Price = {
  currency: string;
  amount: number;
  decimals: number;
};

export interface ResultItems {
  author: Author;
  categories: string[];
  items: Item[];
}

type Author = {
  name: string;
  lastname: string;
};

export type Value = {
  id: string;
  name: string;
  path_from_root: PathFromRoot[];
};

export type PathFromRoot = {
  id: string;
  name: string;
};

export interface Filter {
  id: string;
  name: string;
  type: string;
  values: Value[];
}

export interface Product {
  title: string;
  thumbnail: string;
  condition: string;
  sold_quantity: number;
  currency_id: number;
  price: number;
}

export interface ProductDetail {
  author: Author;
  item: {
    id: string;
    title: string;
    price: Price;
    picture: string;
    condition: string;
    free_shipping: boolean;
    sold_quantity: number;
    description: string;
  };
}
