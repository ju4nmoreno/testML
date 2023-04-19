import Detail from "../../../mocks/product.json";
import styles from "./page.module.css";

const getfetch = (id) => {
  // const API = "https://api.mercadolibre.com/items/";
  // return fetch(`${API}${id}`).then((res) => res.json());
  return Detail;
};

export default async function Item({ params }) {
  const { id } = params;
  const { title, thumbnail, currency_id, sold_quantity, condition, price } =
    await getfetch(id);
  return (
    <main>
      <article className={styles.product}>
        <picture className={styles.containerImage}>
          <img className={styles.productImage} src={thumbnail} alt={title} />
        </picture>
        <div className={styles.info}>
          <h3
            className={styles.conditionSold}
          >{`${condition} - ${sold_quantity}`}</h3>
          <h2 className={styles.title}>{title}</h2>
          <p className={styles.price}>
            {Intl.NumberFormat("en-AR", {
              style: "currency",
              currency: currency_id,
            }).format(price)}
          </p>
          <div className={styles.containerBtn}>
            <button className={styles.btn}>Camprar</button>
          </div>
        </div>
      </article>
    </main>
  );
}
