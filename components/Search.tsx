"use client";
import { useState } from "react";
import styles from "./Search.module.css";
import { useRouter } from "next/navigation";

const PLACEHOLDER = "Nunca dejes de buscar";

export const Search: React.FC = () => {
  const [value, setValue] = useState("");
  const router = useRouter();

  const handleValue = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { value } = e.target;
    setValue(value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    if (!value) return;
    router.push(`/items?search=${value}`);
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <input
        type="text"
        className={styles.input}
        value={value}
        onChange={handleValue}
        placeholder={PLACEHOLDER}
      />
      <button type="submit" className={styles.button} />
    </form>
  );
};
