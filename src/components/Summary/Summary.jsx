import s from "./Summary.module.scss";
import { useState, useEffect } from "react";
import { getTransactionsByType } from "services/reportsApi";
import selectors from "redux/auth/auth-selector";
import { useSelector } from "react-redux";

export function Summary() {
  const [data, setData] = useState([]);
  const totalBalance = useSelector(selectors.getUserBalance);

  //useEffect з розпиленням prevState
  useEffect(() => {
    async function fetchTransactions() {
      try {
        const transactions = await getTransactionsByType("expense");
        setData((prevData) => ({
          ...prevData,
          ...transactions.expenseReportByMonthForYear,
        }));
        console.log("qqqqq", transactions.expenseReportByMonthForYear);
      } catch (error) {
        console.log(error);
      }
    }

    fetchTransactions();
  }, [totalBalance]);

  //зміна для обробки данних: останні шість місяців зверху
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
