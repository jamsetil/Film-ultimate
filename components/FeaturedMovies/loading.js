import { Loading } from "../loading";
import Skeleton from "../skeleton";
import styles from "./styles.module.css";

const FeaturedMovieLoading = () => {
  return (
    <div style={{ height: 278 }} className={styles.movieWrapper}>
      <Loading />
    </div>
  );
};

export default FeaturedMovieLoading;
