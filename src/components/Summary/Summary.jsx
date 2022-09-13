import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import selectors from "redux/auth/auth-selector";
import { getCurrentType, getYear } from "redux/extraInfo/extraInfo-selectors";
import { getTransactionsSummaryByYear } from "services/reportsApi";
import { makeNumberWithSpaces } from "helpers/numberWithSpaces";
import s from "./Summary.module.scss";

export function Summary() {
  const [data, setData] = useState([]);

  const totalBalance = useSelector(selectors.getUserBalance);
  const transactionType = useSelector(getCurrentType);
  const pickedYear = useSelector(getYear);

  const newData = Object.entries(data).reverse().slice(0, 6);

  useEffect(() => {
    if (transactionType === "expense") {
      getTransactionsSummaryByYear(pickedYear, "expense").then((data) =>
        setData(data.expenseReportByMonthForYear)
      );
    }

    if (transactionType === "income") {
      getTransactionsSummaryByYear(pickedYear, "income").then((data) =>
        setData(data.incomeReportByMonthForYear)
      );
    }
  }, [totalBalance, transactionType, pickedYear]);

  return (
    <div className={s.wrapper}>
      <h2 className={s.title}>Зведення</h2>
      <ul className={s.list}>
        {newData.length > 0 ? (
          newData.map(([key, value], index) => (
            <li key={index}>
              <span>{key}</span>
              <span>{makeNumberWithSpaces(value)}</span>
            </li>
          ))
        ) : (
          <li className={s.notification}>немає даних</li>
        )}
      </ul>
    </div>
  );
}
