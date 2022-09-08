import s from "./Summary.module.scss";
import { useState, useEffect } from "react";
import { getTransactionsByType } from "services/reportsApi";

// import { useDispatch, useSelector } from "react-redux";
// import { getTransactionsByType } from "redux/transactions/transactionsOperations";
// import { getTransactions } from "redux/transactions/transactionsSelectors";

export function Summary() {
  const [data, setData] = useState([]);

  // const transactions = useSelector(getTransactions);
  // const dispatch = useDispatch();

  //useEffect з розпиленням стейту
  useEffect(() => {
    async function fetchTransactions() {
      try {
        const transactions = await getTransactionsByType("expense");
        setData((prevData) => ({
          ...prevData,
          ...transactions.expenseReportByMonthForYear,
        }));
        //setData(bar.expenseReportByMonthForYear);
        console.log("qqqqq", transactions.expenseReportByMonthForYear);
      } catch (error) {
        console.log(error);
      }
    }

    fetchTransactions();
  }, []);

  //змінна для обробки транзакцій: бере останні шість місяців і в зворотньому порядку
  const newData = Object.entries(data).reverse().slice(0, 6);

  console.log("Data", data);

  return (
    <div className={s.wrapper}>
      <h2 className={s.title}>Зведення</h2>
      <ul className={s.list}>
        {newData &&
          newData.map(([key, value], index) => (
            <li key={index}>
              <span>{key}</span>
              <span>{value}</span>
            </li>
          ))}
      </ul>
    </div>
  );
}
