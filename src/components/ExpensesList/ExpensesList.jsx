import { CardExpenses } from '../CardExpenses';
import spriteIcons from '../../assets/sprite-icons.svg';
import styles from './ExpensesList.module.scss';
import useWindowDimensions from 'hooks/useWindowDimensions';
import { ProfitStats } from 'components/ProfitStats/ProfitStats';
import MobileChart from 'components/BarChart/MobileChart';
import Chart from 'components/BarChart/BarChart';

let category = 'витрати';
const data = [
  { title: 'products', amount: 5000.0 },
  { title: 'alcohol', amount: 200.0 },
  { title: 'entertainment', amount: 500.0 },
  { title: 'health', amount: 1000.0 },
  { title: 'transport', amount: 3000.0 },
  { title: 'housing', amount: 1500.0 },
  { title: 'tools', amount: 450.0 },
  { title: 'invoice', amount: 6000.0 },
  { title: 'hobby', amount: 5000.0 },
  { title: 'education', amount: 5000.0 },
  { title: 'other', amount: 4350.0 },
  // { title: 'salary', amount: 4350.0 },
  // { title: 'extraSalary', amount: 4350.0 },
];
export const ExpensesList = () => {
  const viewPort = useWindowDimensions();

  let totalIncome = data.reduce((prev, item) => {
    return prev + item.amount;
  }, 0);
  return (
    <>
      <ProfitStats total={totalIncome} />
      <div className={styles.expenses}>
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

        <ul className={styles.list}>
          {data.map((item) => (
            <CardExpenses key={item.title} {...item} />
          ))}
        </ul>
      </div>

      {/* <hr className={styles.sectionLine} /> */}
      <div className={styles.graphBox}>
        <div className={styles.wrapper}>
          {viewPort.width < 767 ? (
            <MobileChart items={data} />
          ) : (
            <Chart items={data} />
          )}
        </div>
      </div>
    </>
  );
};
