import { AUTHOR as author } from "@m/consts";
import { Item, ResultItems, Filter, Value, PathFromRoot } from "@m/types";
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
  const API = "https://api.mercadolibre.com/sites/MLA/search?q=";
  const data = await fetch(`${API}${query}`);
  const response = await data.json();
  const { results, filters } = response;

  let categories: ResultItems["categories"] = [];

  if (filters.length > 0) {
    categories = filters
      .map(({ values }: Filter) => values)[0]
      .map(({ path_from_root }: Value) => path_from_root)[0]
      .map(({ name }: PathFromRoot) => name);
  }

  const items: Item[] = results.map((result: Result) => {
    return {
      id: result.id,
      title: result.title,
      price: {
        currency: result.currency_id,
        decimals: result.available_quantity,
        amount: result.price,
      },
      picture: result.thumbnail,
      free_shipping: result.shipping.free_shipping,
      city: result.seller_address.city.name,
    };
  });

  const topFourResults = items.slice(0, 4);

  return {
    author,
    categories,
    items: topFourResults,
  };
};
