import styles from "./Breadcrumb.module.css";

const B = ["Electronica, Audio y video", "iPhone", "Phones", "32 GB"];

export const Breadcrumb: React.FC = () => {
  return (
    <ul className={styles.listItems}>
      {B.map((item, index) => {
        if (index < B.length - 1) {
          return (
            <li key={index} className={styles.item}>
              {item} {">"}
            </li>
          );
        }
        return (
          <li key={index} className={styles.item}>
            <strong>{item}</strong>
          </li>
        );
      })}
    </ul>
  );
};
