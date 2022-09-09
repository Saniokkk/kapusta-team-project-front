import styles from './ProfitStats.module.css';

export const ProfitStats = ({ totalExp, totalInc }) => {
  // console.log(total[0]);
  // console.log(month);

  return (
    <div className={styles.data}>
      <p className={styles.operationsData}>
        Витрати:
        <span className={styles.expenseData}>- {totalExp}.00 грн</span>
      </p>
      <div className={styles.line}></div>
      <p className={styles.operationsData}>
        Дохід: <span className={styles.income}>+ {totalInc}.00 грн</span>
      </p>
    </div>
  );
};
