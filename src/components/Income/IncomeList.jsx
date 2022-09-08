import Chart from 'components/BarChart/BarChart';
import MobileChart from 'components/BarChart/MobileChart';
import { ProfitStats } from 'components/ProfitStats/ProfitStats';
import useWindowDimensions from 'hooks/useWindowDimensions';
import spriteIcons from '../../assets/symbol-icons.svg';

import styles from './Income.module.css';
import IncomeItem from './IncomeItem';

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
    amount: 8000.0,
    icon: 'icon-extraSalary',
  },
];

const IncomeList = ({ category }) => {
  console.log(category);
  const viewPort = useWindowDimensions();

  let totalIncome = data.reduce((prev, item) => {
    return prev + item.amount;
  }, 0);

  return (
    <>
      <ProfitStats total={totalIncome} />
      <div className={styles.incomeWrapper}>
        <div className={styles.switching}>
          <button className={styles.btnToLeft}>
            <svg className={styles.icon}>
              <use
                className={styles.svg}
                href={`${spriteIcons}#icon-arrowLeft`}
              ></use>
            </svg>
          </button>
          <h2 className={styles.incomeTitle}>дохід</h2>
          <button className={styles.btnToRight}>
            <svg className={styles.icon}>
              <use
                className={styles.svg}
                href={`${spriteIcons}#icon-arrowRight`}
              ></use>
            </svg>
          </button>
        </div>

        <ul className={styles.incomeList}>
          {data.map((item) => (
            <IncomeItem
              key={item.id}
              {...item}
              // title={item.title}
              // amount={item.amount}
              // icon={item.icon}
            />
          ))}
        </ul>
      </div>
      <hr className={styles.sectionLine} />

      <div className={styles.graphBox}>
        {viewPort.width < 767 ? (
          <MobileChart items={data} />
        ) : (
          <Chart items={data} />
        )}
      </div>
    </>
  );
};

export default IncomeList;
