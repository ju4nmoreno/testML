import { Item } from "@m/types";
import Link from "next/link";
import styles from "./Product.module.css";
import Image from "next/image";
import freeShipping from "../assets/ic_shipping.png";

interface Props {
  item: Item;
}

export const Product: React.FC<Props> = ({ item }) => {
  const { id, picture, title, price, free_shipping, city } = item;
  return (
    <article className={styles.product}>
      <Link href={`/items/${id}`} className={styles.anchor}>
        <Image width={180} height={180} src={picture} alt={title} />
        <div className={styles.info}>
          <div className={styles.header}>
            <p className={styles.price}>
              {Intl.NumberFormat("en-AR", {
                style: "currency",
                currency: price.currency,
              }).format(price.decimals)}
              {free_shipping && (
                <Image
                  className={styles.freeShipping}
                  src={freeShipping}
                  alt="freeShipping"
                />
              )}
            </p>
            <p className={styles.city}>{city}</p>
          </div>
          <h2 className={styles.title}>{title}</h2>
        </div>
      </Link>
    </article>
  );
};
