import Image from "next/image";
import Link from "next/link";
import styles from "./styles.module.css";
import React from "react";

const MoviesSection = ({ title, movies }) => {
  return (
    <div className={styles.movieSection}>
      <h3 className={styles.title}>{title}</h3>
      <div className={styles.movies}>
        {movies.map((movie) => (
          <div key={movie.id} className={styles.movie}>
            <Link href={`movie/${movie.id}`}>
              <Image
                alt={`${movie.alt}`}
                fill
                unoptimized
                src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
              />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MoviesSection;
