import styles from "./Report.module.scss";
import icon from "../../assets/symbol-icons.svg";

const Report = () => {
  return (
    <button className={styles.report__button}>
      <p className={styles.report__text}>Перейти до звітів</p>
      <svg className={styles.report__icon}>
        <use href={`${icon}#icon-vector`} />
      </svg>
    </button>
  );
};

export { Report };
