import { Item, ProductDetail } from "@m/types";
import { useEffect, useState } from "react";
import { AUTHOR } from "@m/consts";

export const useGetData = (id: Item["id"]): ProductDetail => {
  const [item, setItem] = useState<Omit<ProductDetail["item"], "description">>(
    {} as Omit<ProductDetail["item"], "description">
  );
  const [description, setDescription] =
    useState<ProductDetail["item"]["description"]>("");

  useEffect(() => {
    if (!id) return;
    const API_ITEM = `https://api.mercadolibre.com/items/${id}`;
    const API_ITEM_DESCRIPTION = `${API_ITEM}/description`;

    fetch(API_ITEM)
      .then((res) => res.json())
      .then((response) => {
        const {
          base_price,
          condition,
          currency_id,
          free_shipping,
          id,
          price,
          sold_quantity,
          thumbnail,
          title,
        } = response;

        setItem({
          id,
          title,
          price: {
            currency: currency_id,
            amount: price,
            decimals: base_price,
          },
          picture: thumbnail,
          condition,
          sold_quantity,
          free_shipping,
        });
      });

    fetch(API_ITEM_DESCRIPTION)
      .then((res) => res.json())
      .then(({ plain_text }) => setDescription(plain_text));
  }, [id]);

  return {
    author: AUTHOR,
    item: {
      ...item,
      description,
    },
  };
};
