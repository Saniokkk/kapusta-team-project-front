import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import selectors from "redux/auth/auth-selector";
import { getCurrentType } from "redux/extraInfo/extraInfo-selectors";
import { getTransactionsByType } from "services/reportsApi";
import s from "./Summary.module.scss";

export function Summary() {
  const [data, setData] = useState([]);

  const totalBalance = useSelector(selectors.getUserBalance);
  const transactionType = useSelector(getCurrentType);

  const newData = Object.entries(data).reverse().slice(0, 6);

  useEffect(() => {
    if (transactionType === "expense") {
      getTransactionsByType("expense").then((data) =>
        setData(data.expenseReportByMonthForYear)
      );
    }

    if (transactionType === "income") {
      getTransactionsByType("income").then((data) =>
        setData(data.incomeReportByMonthForYear)
      );
    }
  }, [totalBalance, transactionType]);

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
