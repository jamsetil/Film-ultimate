import HomeContainer from "@/containers/home";

export async function generateMetadata({ params, searchParams }) {
  const { genres: titles } = await getGenres();
  return {
    title: params.category
      ? titles.find((title) => `${title.id}` === params.category[0]).name
      : "Film Ultimate Best Movies",
  };
}

const API_URL = "https://api.themoviedb.org/3";

const getSingleCategory = async (genreId) => {
  const res = await fetch(
    `${API_URL}/discover/movie?api_key=${process.env.API_KEY}&with_genres=${genreId}`
  );

  return res.json();
};

const getTopRatedMovies = async () => {
  const res = await fetch(
    `${API_URL}/movie/top_rated?api_key=${process.env.API_KEY}&page=1`
  );
  return res.json();
};

const getPopularMovies = async () => {
  const res = await fetch(
    `${API_URL}/movie/popular?api_key=${process.env.API_KEY}&page=1`
  );

  return res.json();
};

const getGenres = async () => {
  const res = await fetch(
    `${API_URL}/genre/movie/list?api_key=${process.env.API_KEY}&page=1`
  );
  return res.json();
};

export default async function Home({ params }) {
  const genresPromise = getGenres();
  const topRatedPromise = getTopRatedMovies();
  const popularMoviesPromise = getPopularMovies();

  const [
    { results: topRatedMovies },
    { results: popularMovies },
    { genres: categories },
  ] = await Promise.all([topRatedPromise, popularMoviesPromise, genresPromise]);

  let selectedCategory;

  if (params.category?.length > 0) {
    selectedCategory = await getSingleCategory(params.category[0]);
  }

  return (
    <HomeContainer
      topRatedMovies={topRatedMovies}
      popularMovies={popularMovies}
      categories={categories}
      selectedCategory={{
        id: params.category?.[0] ?? "",
        movies: selectedCategory ? selectedCategory.results.slice(9, 18) : [],
      }}
    />
  );
}
