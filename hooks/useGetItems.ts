import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { Item } from "@m/types";
import { fetchQuery } from "@m/services/getItemsByQuery";

export const useGetItems = () => {
  const searchParams = useSearchParams();
  const query = searchParams.get("search");
  const [items, setItems] = useState<Item[]>([]);
  const [categories, setCategores] = useState<string[]>([]);

  useEffect(() => {
    if (!query) return;
    fetchQuery(query).then(({ items, categories }) => {
      setItems(items);
      setCategores(categories);
    });
  }, [query]);

  return {
    items,
    categories,
  };
};
