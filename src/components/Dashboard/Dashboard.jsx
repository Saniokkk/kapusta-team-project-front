import { CardExpenses } from "components/CardExpenses";
import { ProfitStats } from "components/ProfitStats/ProfitStats";
import {
  localizationExpense,
  localizationIncome,
} from "helpers/localizationCategory";

import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {
  getCurrentType,
  getMonth,
  getYear,
} from "redux/extraInfo/extraInfo-selectors";
import {
  getTransactionsByCategory,
  getTransactionsByMonth,
} from "services/reportsApi";
import ReportChart from "./ReportChart";

import styles from "./ReportSummary.module.css";
import { ReportTitle } from "./ReportTitle";

export const Dashboard = () => {
  const [items, setItems] = useState([]); //all expenses or income
  const [totalExp, setTotalExp] = useState(null);
  const [totalInc, setTotalInc] = useState(null);
  const [chartItems, setChartItems] = useState([]);

  const [array, setArray] = useState([]);

  const transactionOption = useSelector(getCurrentType);
  const month = useSelector(getMonth);
  const year = useSelector(getYear);

  const option = transactionOption === "income" ? "дохід" : "витрати";

  useEffect(() => {
    async function getTransactions() {
      try {
        const transactions = await getTransactionsByMonth(month, year);

        const expenses = localizationExpense(
          transactions.totalExpanseByCategory
        );

        const income = localizationIncome(transactions.totalIncomeByCategory);

        // if (option === 'витрати') {
        if (transactionOption === "expense") {
          setItems(expenses);

          const expensesFirstObj = expenses[0];

          const expDescriptions = await getTransactionsByCategory(
            expensesFirstObj.pathIcon,
            month,
            year
          );
          const expDescrData = expDescriptions.reportByMonthForYear;

          const keys = Object.keys(expDescrData);

          let details = [];
          for (const key of keys) {
            let modifiedDetails = { title: key, sum: expDescrData[key] };

            details.push(modifiedDetails);

            setArray(details);
          }
          // } else if (option === 'дохід') {
        }

        // if (option === 'дохід') {
        if (transactionOption === "income") {
          // const income = localizationIncome(transactions.totalIncomeByCategory);
          setItems(income);
          const expensesFirstObj = income[0];

          const incomeDescriptions = await getTransactionsByCategory(
            expensesFirstObj.pathIcon,
            month,
            year
          );
          const expDescrData = incomeDescriptions.reportByMonthForYear;

          const keys = Object.keys(expDescrData);

          let arrDescr = [];
          for (const key of keys) {
            let object = { title: key, sum: expDescrData[key] };

            arrDescr.push(object);
            setArray(arrDescr);
            return arrDescr;
          }
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
        const fetchItems = await getTransactionsByCategory(path, month, year);
        const items = fetchItems.reportByMonthForYear;

        const keys = Object.keys(items);
        let itemsArray = [];
        for (const key of keys) {
          let modifiedItems = { title: key, sum: items[key] };
          itemsArray.push(modifiedItems);

          setChartItems(itemsArray);
        }
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
          {items.length > 0 ? (
            items.map((item) => (
              <CardExpenses key={item.title} onClick={onClick} {...item} />
            ))
          ) : (
            <h3 className={styles.notification}>
              ЗА ЦЕЙ ПЕРІОД ТРАНЗАКЦІЙ НЕМАЄ
            </h3>
          )}
        </ul>
      </div>

      <div className={styles.graphBox}>
        <div className={styles.testDiv}>
          {chartItems.length === 0 && <ReportChart items={array} />}
          {items.length > 0 ? (
            <ReportChart items={chartItems} />
          ) : (
            <div className={styles.notificationTitle}>
              {/* <h2>ЗА ЦЕЙ ПЕРІОД ТРАНСАКЦІЙ НЕМАЄ</h2> */}
            </div>
          )}
        </div>
      </div>
    </>
  );
};
