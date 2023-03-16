import styles from "./styles.module.css";
import Skeleton from "../skeleton";

const CategoriesLoading = () => {
  return (
    <div className={styles.categories}>
      {Array(5)
        .fill(null)
        .map((_, index) => (
          <Skeleton key={index} height={75} />
        ))}
    </div>
  );
};

export default CategoriesLoading;
