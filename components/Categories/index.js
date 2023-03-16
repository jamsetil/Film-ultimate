import Link from "next/link";
import styles from "./styles.module.css";
import React from "react";

const Categories = ({ genres }) => {
  return (
    <div className={styles.categories}>
      {genres.slice(0, 5).map((genre) => (
        <Link key={genre.id} className={styles.category} href={`/${genre.id}`}>
          {genre.name}
        </Link>
      ))}
    </div>
  );
};

export default Categories;
