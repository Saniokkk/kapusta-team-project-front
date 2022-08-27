import styles from "./Report.module.css";
import icon from "../../image/sprite.svg";

const Report = () => {
  return (
    <div className={styles.report}>
      <p className={styles.report__text}>Report</p>
      <svg className={styles.report__icon}>
        <use href={`${icon}#icon-bar_chart`} />
      </svg>
    </div>
  );
};

export { Report };
