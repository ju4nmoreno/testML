"use client";
import { Product } from "@m/components/Product";
import { useGetItems } from "@m/hooks/useGetItems";

export default function Results() {
  const { items } = useGetItems();

  return (
    <section>
      {items.length < 1 && "Loandig products...."}
      {items.map((item) => (
        <Product key={item.id} item={item} />
      ))}
    </section>
  );
}
