import Link from "next/link";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.headerWrap}>
      <div>
        <Link className={styles.logoWrap} href="/">
          <img className={styles.logo} src="/logo.svg" alt="logo" />
          E-Pharmacy
        </Link>
      </div>
    </header>
  );
}
