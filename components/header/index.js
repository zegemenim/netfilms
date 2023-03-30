import React from "react";
import Link from "next/link";
import { FaPlayCircle } from "react-icons/fa";

import styles from "./styles.module.css";

function Header() {
  return (
    <header className={`${styles.header} container fluid`}>
      <div className={styles.headerWrapper}>
        <Link className={styles.logo} href="/">
          <FaPlayCircle /> NETFILMS
        </Link>
        <nav className={styles.navigationMenu}>
          <Link href="components/header#">MOVIES</Link>
          <Link href="components/header#">SERIES</Link>
          <Link href="components/header#">KIDS</Link>
        </nav>
      </div>
    </header>
  );
}

export { Header };
