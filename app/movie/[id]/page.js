import React from "react";
import MovieContainer from "@/containers/movie";
import { notFound } from "next/navigation";

const API_URL = "https://api.themoviedb.org/3";

const getMovie = async (movieId) => {
  const res = await fetch(
    `${API_URL}/movie/${movieId}?api_key=${process.env.API_KEY}`
  );

  return res.json();
};

export async function generateMetadata({ params }) {
  const title = await getMovie(params.id);

  return { title: `${title.title}` };
}

const MoviePage = async ({ params }) => {
  const movieDetail = await getMovie(params.id);

  if (!movieDetail) return notFound();

  return (
    <div>
      <MovieContainer movie={movieDetail} />
    </div>
  );
};

export default MoviePage;
