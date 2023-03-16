import React from "react";
import FeaturedMovies from "@/components/FeaturedMovies";
const MovieContainer = ({ movie }) => {
  return (
    <div>
      <FeaturedMovies movie={movie} isCompact={false} />
    </div>
  );
};

export default MovieContainer;
