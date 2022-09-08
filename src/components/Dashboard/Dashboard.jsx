// import { CardExpenses } from '../CardExpenses';
import Chart from 'components/BarChart/BarChart';
import MobileChart from 'components/BarChart/MobileChart';
import { CardExpenses } from 'components/CardExpenses';
import { ProfitStats } from 'components/ProfitStats/ProfitStats';
import useWindowDimensions from 'hooks/useWindowDimensions';
// import { useEffect, useState } from 'react';

// import spriteIcons from '../../assets/sprite-icons.svg';
import styles from './ReportSummary.module.css';
import { ReportTitle } from './ReportTitle';

// let category = 'витрати';
const data = [
  { title: 'Продукти', pathIcon: 'products', sum: 5000.0 },
  { title: 'Алкоголь', pathIcon: 'alcohol', sum: 0 },
  { title: 'Розваги', pathIcon: 'entertainment', sum: 500.0 },
  { title: 'Здоровя', pathIcon: 'health', sum: 1000.0 },
  { title: 'Транспорт', pathIcon: 'transport', sum: 3000.0 },
  { title: 'Дім', pathIcon: 'housing', sum: 1500.0 },
  { title: 'Комуналка', pathIcon: 'invoice', sum: 0 },
  { title: 'Техніка', pathIcon: 'tools', sum: 0 },
  { title: 'Спорт, хобі', pathIcon: 'hobby', sum: 5000.0 },
  { title: 'Освіта', pathIcon: 'education', sum: 5000.0 },
  { title: 'Інше', pathIcon: 'other', sum: 4350.0 },
  // { title: 'salary', amount: 4350.0 },
  // { title: 'extraSalary', amount: 4350.0 },
];
export const Dashboard = ({ category }) => {
  // fetch щоб отримати категорії відповідно до типу(витрати чи дохід)
  // при click на кнопку(іконку) - fetch за items відповідно до категорії
  console.log(category);

  // const [items, setItems] = useState([]);
  const viewPort = useWindowDimensions();

  let totalIncome = data.reduce((prev, item) => {
    return prev + item.amount;
  }, 0);

  return (
    <>
      <ProfitStats total={totalIncome} />
      <div className={styles.expenses}>
        <ReportTitle category={category} />

        <ul className={styles.list}>
          {/* items.map */}
          {data.map((item) => (
            <CardExpenses key={item.title} {...item} />
          ))}
        </ul>
      </div>

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
