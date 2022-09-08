import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { deleteTransaction } from "services/transactionsApi";
import { getTransactionsByDate } from "services/reportsApi";
import { calendarSelectors } from "../../../redux/extraInfo";
import icon from "assets/symbol-icons.svg";
import s from "./ProductList.module.scss";

const ProductList = ({ visible, deleteContact }) => {
  const [expenseTransactions, setExpenseTransactions] = useState([]);

  const pickedDate = useSelector(calendarSelectors.getDate);
  //console.log(`month: ${pickedDate.month}`, `year: ${pickedDate.year}`);

  // useEffect(() => {
  //   getTransactionsByDate(pickedDate.month, pickedDate.year).then((ta) => {
  //     setExpenseTransactions(ta.totalExpanseByCategory);
  //     console.log(ta);
  //   });
  // }, [pickedDate]);

  //console.log(expenseTransactions);

  const convertDate = (date) => {
    const convertedDate = date.slice(0, -14).replace(/-/g, ".");
    return convertedDate;
  };

  const negativeSum = (price) => {
    const index = `${price}.00`.indexOf(".");
    const number = `${price}.00`.slice(0, index + 3);
    const posNumber = Number.parseFloat(`${number}`).toFixed(2);
    const negNumber = `- ${posNumber} грн.`;

    return negNumber;
  };

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Дата</th>
            <th>Опис</th>
            <th>Категорія</th>
            <th>Сума</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {expenseTransactions &&
            expenseTransactions.map(
              ({ _id, date, description, category, sum }) => {
                return (
                  <tr key={_id}>
                    <td>{convertDate(date)}</td>
                    <td>{description}</td>
                    <td>{category}</td>
                    <td>{negativeSum(sum)}</td>
                    <td>
                      <button
                        className={s.button}
                        type="button"
                        onClick={() => deleteTransaction("expense", _id)}
                      >
                        <svg className={s.icon} width="18" height="18">
                          <use href={`${icon}#icon-delete`} />
                        </svg>
                      </button>
                    </td>
                  </tr>
                );
              }
            )}
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default ProductList;
