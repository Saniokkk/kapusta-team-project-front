import styles from "./Report.module.scss";
import icon from "../../assets/symbol-icons.svg";

const Report = () => {
  return (
    <div className={styles.report}>
      <p className={styles.report__text}>Перейти до звітів</p>
      <svg className={styles.report__icon}>
        <use href={`${icon}#icon-vector`} />
      </svg>
    </div>
  );
};

export { Report };
