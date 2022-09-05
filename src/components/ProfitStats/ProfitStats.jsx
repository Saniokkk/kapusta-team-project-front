import styles from './ProfitStats.module.css';

export const ProfitStats = ({ total }) => {
  return (
    <div className={styles.data}>
      <p className={styles.operationsData}>
        Витрати:
        <span className={styles.expenseData}>- 18 000.00 грн</span>
      </p>
      <div className={styles.line}></div>
      <p className={styles.operationsData}>
        Дохід: <span className={styles.income}>+ {total}грн</span>
      </p>
    </div>
  );
};
