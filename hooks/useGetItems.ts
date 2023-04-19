import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { Item } from "@m/types";
import { fetchQuery } from "@m/services/getItemsByQuery";

export const useGetItems = () => {
  const searchParams = useSearchParams();
  const query = searchParams.get("search");
  const [items, setItems] = useState<Item[]>([]);

  useEffect(() => {
    if (!query) return;
    fetchQuery(query).then(({ items }) => {
      setItems(items);
    });
  }, [query]);

  return {
    items,
  };
};
