"use client";
import { useGetItems } from "@m/hooks/useGetItems";
import styles from "./Breadcrumb.module.css";

const B = ["Electronica, Audio y video", "iPhone", "Phones", "32 GB"];

export const Breadcrumb: React.FC = () => {
  const { categories } = useGetItems();
  return (
    <ul className={styles.listItems}>
      {categories.map((category, index) => {
        if (index < categories.length - 1) {
          return (
            <li key={index} className={styles.item}>
              {category} {">"}
            </li>
          );
        }
        return (
          <li key={index} className={styles.item}>
            <strong>{category}</strong>
          </li>
        );
      })}
    </ul>
  );
};
