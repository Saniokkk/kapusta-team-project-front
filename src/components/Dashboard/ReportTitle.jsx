import spriteIcons from '../../assets/sprite-icons.svg';
import styles from './ReportSummary.module.css';

export const ReportTitle = ({ category }) => {
  return (
    <div className={styles.switching}>
      <button className={styles.btnToLeft}>
        <svg className={styles.icon}>
          <use
            className={styles.svg}
            href={`${spriteIcons}#icon-arrowLeft`}
          ></use>
        </svg>
      </button>
      <h2 className={styles.title}>{category}</h2>
      <button className={styles.btnToRight}>
        <svg className={styles.icon}>
          <use
            className={styles.svg}
            href={`${spriteIcons}#icon-arrowRight`}
          ></use>
        </svg>
      </button>
    </div>
  );
};
