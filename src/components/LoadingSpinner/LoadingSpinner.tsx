import cx from "classnames";
import styles from "./LoadingSpinner.module.css";

export type LoadingSpinnerProps = {
  isLoading: boolean;
  color?: string;
  text?: string;
};

const LoadingSpinner = ({
  isLoading,
  color = "bg-black",
  text = "",
}: LoadingSpinnerProps) => {
  if (!isLoading) return null;
  return (
    <div className={styles.wrapper}>
      <div className={cx(styles.div1, color)}></div>
      <div className={cx(styles.div2, color)}></div>
      <div className={cx(styles.div3, color)}></div>
      <span>{text}</span>
    </div>
  );
};

export default LoadingSpinner;
