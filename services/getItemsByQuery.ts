import { AUTHOR as author } from "@m/consts";
import { Item, ResultItems } from "@m/types";
import Mocks from "../mocks/allProducts.json";

interface Result {
  id: string;
  title: string;
  currency_id: string;
  available_quantity: number;
  price: number;
  thumbnail: string;
  shipping: {
    free_shipping: boolean;
  };
  seller_address: {
    city: {
      name: string;
    };
  };
}

export const fetchQuery = async (query: string): Promise<ResultItems> => {
  // const API = "https://api.mercadolibre.com/sites/MLA/search?q=";
  // const data = await fetch(`${API}${query}`);
  // const { results } = await data.json();

  const { results } = Mocks;

  const items: Item[] = results.map((result: Result) => {
    return {
      id: result.id,
      title: result.title,
      price: {
        currency: result.currency_id,
        amount: result.available_quantity,
        decimals: result.price,
      },
      picture: result.thumbnail,
      free_shipping: result.shipping.free_shipping,
      city: result.seller_address.city.name,
    };
  });

  const fourFirstItems = items.slice(0, 4);

  return {
    author,
    categories: [],
    items: fourFirstItems,
  };
};
