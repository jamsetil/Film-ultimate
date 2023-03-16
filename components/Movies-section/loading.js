import styles from "./styles.module.css";
import Skeleton from "../skeleton";

const LoadingFeatures = () => {
  return (
    <div className={styles.movieSection}>
      <Skeleton width={128} height={36} />
      <div className={styles.movies}>
        {Array(5)
          .fill(null)
          .map((_, index) => (
            <Skeleton key={index} />
          ))}
      </div>
    </div>
  );
};

export default LoadingFeatures;
