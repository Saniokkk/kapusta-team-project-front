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
import {
  getTransactionsByCategory,
  getTransactionsByMonth,
} from 'services/reportsApi';
import ReportChart from './ReportChart';

import styles from './ReportSummary.module.css';
import { ReportTitle } from './ReportTitle';

// const data = [
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
  const [items, setItems] = useState([]); //all expenses or income
  const [totalExp, setTotalExp] = useState(null);
  const [totalInc, setTotalInc] = useState(null);
  const [chart, setChart] = useState([]);

  const [array, setArray] = useState([]);

  const transactionOption = useSelector(getCurrentType);
  const month = useSelector(getMonth);
  const year = useSelector(getYear);

  // const path = 'products';

  const option = transactionOption === 'income' ? 'дохід' : 'витрати';

  useEffect(() => {
    // if (items.length < 0) {
    //   return;
    // }
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

          // getFirstItem();
          const expensesFirstObj = expenses[0];
          // console.log('expensesFirstObj', expensesFirstObj.pathIcon);
          const expDescriptions = await getTransactionsByCategory(
            expensesFirstObj.pathIcon,
            month,
            year
          );
          const expDescrData = expDescriptions.reportByMonthForYear;

          // console.log('expDescriptions', expDescriptions);
          // console.log('expDescrData', expDescrData);

          const keys = Object.keys(expDescrData);
          // console.log('keys', keys);

          let arrDescr = [];
          for (const key of keys) {
            let object = { title: key, sum: expDescrData[key] };
            // console.log('objectDescr', object);
            arrDescr.push(object);
            // console.log('arrDescr', arrDescr);
            setArray(arrDescr);
          }
        } else if (option === 'дохід') {
          setItems(income);
          // getFirstItem();

          const expensesFirstObj = income[0];
          // console.log('items0', expensesFirstObj.pathIcon);
          const expDescriptions = getTransactionsByCategory(
            expensesFirstObj.pathIcon,
            month,
            year
          );
          const expDescrData = expDescriptions.reportByMonthForYear;

          // console.log('expDescriptions', expDescriptions);
          // console.log('expDescrData', expDescrData);

          const keys = Object.keys(expDescrData);
          // console.log('keys', keys);

          let arrDescr = [];
          for (const key of keys) {
            let object = { title: key, sum: expDescrData[key] };
            // console.log('objectDescr', object);
            arrDescr.push(object);
            // console.log('arrDescr', arrDescr);
            setArray(arrDescr);
          }
          // setItems(dataExpenses);
        }

        // async function getFirstItem() {
        //   const expensesFirstObj = items[0];

        //   const expDescriptions = await getTransactionsByCategory(
        //     expensesFirstObj.pathIcon,
        //     month,
        //     year
        //   );
        //   const expDescrData = expDescriptions.reportByMonthForYear;

        //   const keys = Object.keys(expDescrData);

        //   let arrDescr = [];
        //   for (const key of keys) {
        //     let object = { title: key, sum: expDescrData[key] };
        //     // console.log('objectDescr', object);
        //     arrDescr.push(object);
        //     // console.log('arrDescr', arrDescr);
        //     setArray(arrDescr);
        //     return arrDescr;
        //   }
        // }
        // const expensesFirstObj = expenses[0];
        // // console.log('expensesFirstObj', expensesFirstObj.pathIcon);
        // const expDescriptions = await getTransactionsByCategory(
        //   expensesFirstObj.pathIcon,
        //   month,
        //   year
        // );
        // const expDescrData = expDescriptions.reportByMonthForYear;

        // // console.log('expDescriptions', expDescriptions);
        // // console.log('expDescrData', expDescrData);

        // const keys = Object.keys(expDescrData);
        // // console.log('keys', keys);

        // let arrDescr = [];
        // for (const key of keys) {
        //   let object = { title: key, sum: expDescrData[key] };
        //   // console.log('objectDescr', object);
        //   arrDescr.push(object);
        //   // console.log('arrDescr', arrDescr);
        //   setArray(arrDescr);
        // }

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

  // const firstItem = items[0];
  // console.log('firstItem', firstItem.pathIcon);
  console.log('array', array);
  console.log('chart', chart);

  // console.log('items', items[0]);
  return (
    <>
      <ProfitStats totalExp={totalExp} totalInc={totalInc} />
      <div className={styles.expenses}>
        <ReportTitle category={option} />
        <ul className={styles.list}>
          {items.length > 0 ? (
            items.map((item) => (
              <CardExpenses key={item.title} onClick={onClick} {...item} />
            ))
          ) : (
            <h3 className={styles.notification}>
              ЗА ЦЕЙ ПЕРІОД ТРАНСАКЦІЙ НЕМАЄ
            </h3>
          )}
        </ul>
      </div>

      <div className={styles.graphBox}>
        <div className={styles.testDiv}>
          {chart.length === 0 && <ReportChart items={array} />}
          {items.length > 0 ? (
            <ReportChart items={chart} />
          ) : (
            <div className={styles.notification}>
              <h2>ЗА ЦЕЙ ПЕРІОД ТРАНСАКЦІЙ НЕМАЄ</h2>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

// {
//   /* {viewPort.width < 767 ? (
//           <MobileChart items={chart} />
//         ) : (
//           <Chart items={chart} />
//         )} */
// }
// {
//   /* <Chart items={itemsforChart} /> */
// }
