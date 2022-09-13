import Chart from 'components/BarChart/BarChart';

import MobileChart from 'components/BarChart/MobileChart';
import { CardExpenses } from 'components/CardExpenses';
import { ProfitStats } from 'components/ProfitStats/ProfitStats';
import {
  localizationExpense,
  localizationIncome,
} from 'helpers/localizationCategory';
import useWindowDimensions from 'hooks/useWindowDimensions';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import {
  getCurrentType,
  getMonth,
  getYear,
} from 'redux/extraInfo/extraInfo-selectors';
import {
  getTransactionsByCategory,
  // getTransactionsByCategory,
  // getTransactionsByCategory,
  getTransactionsByMonth,
} from 'services/reportsApi';

import styles from './ReportSummary.module.css';
import { ReportTitle } from './ReportTitle';

// const itemsforChart = [
//   {
//     sum: 500.0,
//     title: 'овочі',
//   },
//   {
//     sum: 1000.0,
//     title: 'фрукти',
//   },

//   {
//     sum: 6000.0,
//     title: 'овочі',
//   },
// ];

export const Dashboard = ({ category }) => {
  const [items, setItems] = useState();
  const [totalExp, setTotalExp] = useState(null);
  const [totalInc, setTotalInc] = useState(null);
  const [chart, setChart] = useState([]);

  const transactionOption = useSelector(getCurrentType);
  const month = useSelector(getMonth);
  const year = useSelector(getYear);

  // const path = 'products';
  const viewPort = useWindowDimensions();

  const option = transactionOption === 'income' ? 'дохід' : 'витрати';

  useEffect(() => {
    async function getTransactions() {
      try {
        const transactions = await getTransactionsByMonth(month, year);
        const expenses = localizationExpense(
          transactions.totalExpanseByCategory
        );
        const income = localizationIncome(transactions.totalIncomeByCategory);
        // const expenses = localizationExpense(dataExpenses);
        // const income = localizationIncome(dataIncome);

        if (option === 'витрати') {
          setItems(expenses);
        } else if (option === 'дохід') {
          setItems(income);
          // setItems(dataExpenses);
        }

        setTotalExp(transactions.totalExpense);
        setTotalInc(transactions.totalIncome);
      } catch (error) {
        console.log(error);
      }
    }
    getTransactions();
  }, [month, year, option]);

  const onClick = (path) => {
    async function getItems() {
      try {
        const items = await getTransactionsByCategory(path, month, year);
        const itemsCharts = items.reportByMonthForYear;

        const keys = Object.keys(itemsCharts);
        let array = [];
        for (const key of keys) {
          let object = { title: key, sum: itemsCharts[key] };
          array.push(object);

          setChart(array);
        }
        // onClick(chartItems);
      } catch (error) {
        console.log(error);
      }
      getTransactionsByCategory();
    }
    getItems();
  };

  return (
    <>
      <ProfitStats totalExp={totalExp} totalInc={totalInc} />
      <div className={styles.expenses}>
        <ReportTitle category={option} />

        <ul className={styles.list}>
          {items &&
            items.map((item) => (
              <CardExpenses key={item.title} onClick={onClick} {...item} />
            ))}
        </ul>
      </div>

      <div className={styles.graphBox}>
        {/* <div className={styles.wrapper}> */}
        {viewPort.width < 767 ? (
          <MobileChart items={chart} />
        ) : (
          <Chart items={chart} />
        )}
        {/* <Chart items={itemsforChart} /> */}
      </div>
      {/* <Chart items={itemsforChart} /> */}
      {/* </div> */}
    </>
  );
};
