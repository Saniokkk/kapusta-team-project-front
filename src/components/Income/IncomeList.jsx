import icons from '../../assets/symbol-icons.svg';
import { Header } from 'components/Layout/Header';
import styles from './Income.module.css';
import IncomeItem from './IncomeItem';
import Chart from 'components/BarChart/BarChart';
import MobileChart from 'components/BarChart/MobileChart';

const data = [
  {
    id: 1,
    title: 'Заробітня плата',
    amount: 5000.0,
    icon: 'icon-salary',
  },
  {
    id: 2,
    title: 'Додаткові доходи',
    amount: 200.0,
    icon: 'icon-extraSalary',
  },
  {
    id: 3,
    title: 'Інше',
    amount: 800.0,
    icon: 'icon-other',
  },
];

const IncomeList = () => {
  let totalIncome = data.reduce((prev, item) => {
    return prev + item.amount;
  }, 0);

  return (
    <>
      <Header />
      <div className={styles.incomeSection}>
        {/* заглушка */}
        <div className={styles.calendar}>Листопад 2019</div>
        <div className={styles.balanceWrapper}>
          <p className={styles.balanceText}>Баланс:</p>
          <div className={styles.balance}>46 500 UAH</div>
        </div>
        {/* заглушка */}
        <div className={styles.data}>
          <p className={styles.operationsData}>
            Витрати:
            <span className={styles.expenseData}>- 18 000.00 грн</span>
          </p>
          <div className={styles.line}></div>
          <p className={styles.operationsData}>
            Дохід: <span className={styles.income}>+ {totalIncome} грн</span>
          </p>
        </div>
        <div className={styles.iconBox}>
          <div className={styles.titleBox}>
            <button className={styles.btnToLeft}>
              <svg className={styles.icon}>
                <use
                  className={styles.svg}
                  href={`${icons}#icon-arrowLeft`}
                ></use>
              </svg>
            </button>
            <h2 className={styles.incomeTitle}>дохід</h2>
            <button className={styles.btnToRight}>
              <svg className={styles.icon}>
                <use
                  className={styles.svg}
                  href={`${icons}#icon-arrowRight`}
                ></use>
              </svg>
            </button>
          </div>
          {/* <svg className={styles.arror}>
              <use
                className={styles.iconArrowLeft}
                href={`${icons}#icon-arrowLeft`}
              ></use>
            </svg>

            <h2 className={styles.incomeTitle}>дохід</h2>
            <svg className={styles.arror}>
              <use
                className={styles.iconArrowLeft}
                href={`${icons}#icon-arrowRight`}
              ></use>
            </svg> */}

          <ul className={styles.incomeList}>
            {data.map((item) => (
              <IncomeItem
                key={item.id}
                title={item.title}
                amount={item.amount}
                icon={item.icon}
              />
            ))}
          </ul>
        </div>
        <hr className={styles.sectionLine} />
        <div className={styles.graphBox}>
          <Chart />
          {/* <MobileChart /> */}
        </div>

        <div className={styles.background}></div>
      </div>
    </>
  );
};

export default IncomeList;
