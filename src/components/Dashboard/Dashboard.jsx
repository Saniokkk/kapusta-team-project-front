// import Chart from 'components/BarChart/BarChart';

// import MobileChart from 'components/BarChart/MobileChart';
import { CardExpenses } from 'components/CardExpenses';
import { ProfitStats } from 'components/ProfitStats/ProfitStats';
import {
  localizationExpense,
  localizationIncome,
} from 'helpers/localizationCategory';
// import useWindowDimensions from 'hooks/useWindowDimensions';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import {
  getCurrentType,
  getMonth,
  getYear,
} from 'redux/extraInfo/extraInfo-selectors';
import { getTransactionsByMonth } from 'services/reportsApi';

import styles from './ReportSummary.module.css';
import { ReportTitle } from './ReportTitle';

const dataExpenses = {
  Транспорт: 3500,
  Продукти: 9000,
  Здоровя: 2000,
  Алкоголь: 0,
  Розваги: 3500,
  Дім: 8000,
  Техніка: 0,
  Комуналка: 1350,
  'Спорт, хобі': 1500,
  Освіта: 3500,
  Інше: 200,
};
// const itemsforChart = [
//   {
//     // title: 'Продукти',
//     sum: 5000.0,
//     category: 'products',
//     // description: 'banana',
//     title: 'морква',
//   },
//   {
//     // title: 'Продукти',
//     pathIcon: 'products',
//     sum: 5000.0,
//     category: 'products',
//     // description: 'banana',
//     title: 'банан',
//   },
// ];

const dataIncome = {
  Дохід: 7000,
  'Доп.дохід': 2500,
  // { title: 'salary', pathIcon: 'other', sum: 4350.0 },
  // { title: 'extraSalary', pathIcon: 'other', sum: 4350.0 },
};

export const Dashboard = ({ category }) => {
  const [items, setItems] = useState();
  const [totalExp, setTotalExp] = useState();
  const [totalInc, setTotalInc] = useState();

  const transactionOption = useSelector(getCurrentType);
  const month = useSelector(getMonth);
  const year = useSelector(getYear);
  // console.log('month', month);
  // console.log('year', year);

  // console.log('transactionOption', transactionOption);
  // const viewPort = useWindowDimensions();

  const option = transactionOption === 'income' ? 'дохід' : 'витрати';
  // console.log('option', option);

  useEffect(() => {
    async function getTransactions() {
      try {
        const transactions = await getTransactionsByMonth(month, year);
        // const expenses = localizationExpense(
        //   transactions.totalExpanseByCategory
        // );
        // const income = localizationIncome(transactions.totalIncomeByCategory);
        const expenses = localizationExpense(dataExpenses);
        const income = localizationIncome(dataIncome);

        // console.log('ExpanseByCategory', transactions.totalExpanseByCategory);
        // console.log('IncomeByCategory', transactions.totalIncomeByCategory);
        // console.log(transactions.totalExpense);
        // console.log(transactions.totalIncome);

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

  return (
    <>
      <ProfitStats totalExp={totalExp} totalInc={totalInc} />
      <div className={styles.expenses}>
        <ReportTitle category={option} />

        <ul className={styles.list}>
          {items &&
            items.map((item) => <CardExpenses key={item.title} {...item} />)}
        </ul>
      </div>

      <div className={styles.graphBox}>
        <div className={styles.wrapper}>
          {/* {viewPort.width < 767 ? (
            <MobileChart items={itemsforChart} />
          ) : (
            <Chart items={itemsforChart} />
          )} */}
        </div>
      </div>
    </>
  );
};

// const data = [
//   { title: 'Продукти', pathIcon: 'products', sum: 5000.0 },
//   { title: 'Алкоголь', pathIcon: 'alcohol', sum: 0 },
//   { title: 'Розваги', pathIcon: 'entertainment', sum: 500.0 },
//   { title: 'Здоровя', pathIcon: 'health', sum: 1000.0 },
//   { title: 'Транспорт', pathIcon: 'transport', sum: 3000.0 },
//   { title: 'Дім', pathIcon: 'housing', sum: 1500.0 },
//   { title: 'Комуналка', pathIcon: 'invoice', sum: 0 },
//   { title: 'Техніка', pathIcon: 'tools', sum: 0 },
//   { title: 'Спорт, хобі', pathIcon: 'hobby', sum: 5000.0 },
//   { title: 'Освіта', pathIcon: 'education', sum: 5000.0 },
//   { title: 'Інше', pathIcon: 'other', sum: 4350.0 },
// ]

// let totalIncome = data.reduce((prev, item) => {
//   return prev + item.amount;
// }, 0);
