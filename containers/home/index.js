import React from "react";
import FeaturedMovies from "@/components/FeaturedMovies";
import Categories from "@/components/Categories";
import MoviesSection from "@/components/Movies-section";

const HomeContainer = ({
  topRatedMovies = [],
  popularMovies = [],
  selectedCategory,
  categories = [],
}) => {
  return (
    <div>
      <FeaturedMovies movie={topRatedMovies?.[0]} isCompact={true} />
      <Categories genres={categories.slice(0, 5)} />

      <MoviesSection
        title="Top Rated Movies"
        movies={topRatedMovies.slice(8, 15)}
      />
      {selectedCategory.movies.length > 0 && (
        <MoviesSection
          title={
            categories.find((genre) => `${genre.id}` === selectedCategory.id)
              .name
          }
          movies={selectedCategory.movies}
        />
      )}
      <MoviesSection title="Popular Films" movies={popularMovies.slice(0, 7)} />
    </div>
  );
};

export default HomeContainer;
