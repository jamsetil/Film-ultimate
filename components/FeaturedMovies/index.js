import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./styles.module.css";
import { FaPlus } from "react-icons/fa";

const FeaturedMovies = ({ movie = {}, isCompact = false }) => {
  const { title, poster_path, overview } = movie;

  return (
    <div className={styles.featuredMovieWrapper}>
      <h1 className={styles.movieTitle}>{title}</h1>
      <p className={styles.overview}>
        {isCompact == false ? overview : `${overview.slice(0, 140)}...`}
      </p>
      <div className={styles.actionButtons}>
        <Link href={`/movie/${movie.id}`} className={styles.playButton}>
          Play
        </Link>
        <button type="button" className={styles.addButton}>
          <FaPlus />
        </button>
      </div>
      <div className={styles.moviePoster}>
        <div className={styles.moviePosterOverlay}></div>
        <Image
          src={`https://image.tmdb.org/t/p/original${poster_path}`}
          alt="bg-poster"
          fill
        />
      </div>
    </div>
  );
};

export default FeaturedMovies;
