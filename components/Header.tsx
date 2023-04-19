import { Logo } from "./Logo";
import { Search } from "./Search";
import styles from "./Header.module.css";

export const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Logo />
        <Search />
      </div>
    </header>
  );
};
