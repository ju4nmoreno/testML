import Image from "next/image";
import Link from "next/link";
import logo from "../assets/Logo_ML.png";
import styles from "./Logo.module.css";

const ALT_TEXT = "Mercado Libre Colombia - Donde comprar y vender de todo";

export const Logo = () => {
  return (
    <Link href="/" className={styles.logo}>
      <Image className={styles.img} src={logo} alt={ALT_TEXT} />
    </Link>
  );
};
