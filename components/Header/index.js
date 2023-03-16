import Link from "next/link";
import React from "react";
import { FiPlayCircle } from "react-icons/fi";
import styles from "./styles.module.css";

function Header() {
  return (
    <header className={`${styles.header} container fluid`}>
      <div className={styles.headerWrapper}>
        <Link className={styles.logo} href="/">
          <FiPlayCircle /> FILM ULTIMATE
        </Link>
        <nav className={styles.navigationMenu}>
          <Link href="#">MOVIES</Link>
          <Link href="#">SERIES</Link>
          <Link href="#">KIDS</Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
