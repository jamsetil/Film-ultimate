import CategoriesLoading from "@/components/Categories/loading";
import FeaturedMovieLoading from "@/components/FeaturedMovies/loading";
import LoadingFeatures from "@/components/Movies-section/loading";

const Loading = () => {
  return (
    <div>
      <FeaturedMovieLoading />
      <CategoriesLoading />
      <LoadingFeatures />
      <LoadingFeatures />
    </div>
  );
};

export default Loading;
