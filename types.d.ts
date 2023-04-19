export interface Item {
  id: string;
  title: string;
  price: {
    currency: string;
    amount: number;
    decimals: number;
  };
  picture: string;
  free_shipping: boolean;
  city: string;
}

export interface ResultItems {
  categories: string[];
  items: Item[];
  author: {
    name: string;
    lastname: string;
  };
}
