import React from "react";
import Link from "next/link";

import styles from "./styles.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <Link href="/" className={styles.logo}>
        <span>Logo</span>
      </Link>
      <nav>
        <Link href="/about">About</Link>
      </nav>
    </header>
  );
};

export default Header;
