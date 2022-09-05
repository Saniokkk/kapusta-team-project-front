import styles from "./ReportSection.module.css";

const ReportSection = () => {
  return (
    <section className={styles.reportSection}>
      <div className={styles.reportBackgroundSection}></div>
      <div className={styles.conteiner}>
        <div className={styles.balance}>
          <div className={styles.balanceAdd}>Баланс</div>
          <div className={styles.transitionReport}>Перейти к отчетам</div>
        </div>

        <div className={styles.transactionSwitch}>
          <button type="button" className={styles.btn}>
            Расход
          </button>
          <button type="button" className={styles.btn}>
            Доход
          </button>
        </div>

        <div className={styles.activity}>
          <div className={styles.transaction}>
            <div className={styles.transactionDate}>Date</div>
            <div className={styles.transactionform}>Form</div>

            <div className={styles.transactionformbtnIc}>
              <div className={styles.transactionformbtn}>I</div>
              <div className={styles.transactionformbtn}>C</div>
            </div>
          </div>

          <div className={styles.statement}>
            <div className={styles.transactionTable}>
              <div className={styles.tableHeader}>
                <div className={styles.tableHeaderline}>Дата</div>
                <div className={styles.tableHeaderline}>Описание</div>
                <div className={styles.tableHeaderline}>Категория</div>
                <div className={styles.tableHeaderline}>Сумма</div>
              </div>
              <div className={styles.tableList}>
                <ul>
                  <li className={styles.tableListline}></li>
                  <li className={styles.tableListline}></li>
                  <li className={styles.tableListline}></li>
                  <li className={styles.tableListline}></li>
                </ul>
                <ul>
                  <li className={styles.tableListline}></li>
                  <li className={styles.tableListline}></li>
                  <li className={styles.tableListline}></li>
                  <li className={styles.tableListline}></li>
                  <li className={styles.tableListline}></li>
                  <li className={styles.tableListline}></li>
                  <li className={styles.tableListline}></li>
                  <li className={styles.tableListline}></li>
                  <li className={styles.tableListline}></li>
                  <li className={styles.tableListline}></li>
                  <li className={styles.tableListline}></li>
                  <li className={styles.tableListline}></li>
                </ul>
              </div>
            </div>
            <div className={styles.summary}>Сводка</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { ReportSection };
