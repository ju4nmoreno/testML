"use client";
import { Item } from "@m/types";
import styles from "./page.module.css";
import { useGetData } from "@m/hooks/useGetItemsDetails";

const TEXT = {
  VENDIDO: "vendido",
  VENDIDOS: "vendidos",
  DESCRIPTION_PRODUCT: "Descripción del producto",
};

type PageParams = {
  id: string;
};

type PageProps = {
  params: PageParams;
};

export default function Item({ params }: PageProps) {
  const { id } = params;
  const data = useGetData(id);

  const { condition, description, picture, price, sold_quantity, title } =
    data.item;

  return (
    <>
      {!data && "loading ...."}
      <article className={styles.product}>
        <picture className={styles.containerImage}>
          <img className={styles.productImage} src={picture} alt={title} />
        </picture>
        <div className={styles.info}>
          <h3
            className={styles.conditionSold}
          >{`${condition} - ${sold_quantity} - ${
            sold_quantity === 1 ? TEXT.VENDIDO : TEXT.VENDIDOS
          }`}</h3>
          <div className={styles.titleContainer}>
            <h2 className={styles.title}>{title}</h2>
          </div>
          <p className={styles.price}>
            {price?.currency &&
              Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD",
              }).format(price.amount)}
          </p>
          <div className={styles.containerBtn}>
            <button className={styles.btn}>Camprar</button>
          </div>
        </div>
        <div className={styles.containerDescription}>
          <h4 className={styles.titleDescription}>
            {TEXT.DESCRIPTION_PRODUCT}
          </h4>
          <p className={styles.description}>{description}</p>
        </div>
      </article>
    </>
  );
}
