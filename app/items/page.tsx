"use client";
import { Breadcrumb } from "@m/components/Breadcrumb";
import { Product } from "@m/components/Product";
import { useGetItems } from "@m/hooks/useGetItems";

export default function Results() {
  const { items } = useGetItems();

  return (
    <>
      <Breadcrumb />
      <main>
        {items.map((item) => (
          <Product key={item.id} item={item} />
        ))}
      </main>
    </>
  );
}
