//import { useState, useEffect } from "react";
//import { useSelector } from "react-redux";
import {
  //getTransactionsByDate,
  deleteTransaction,
} from "services/transactionsApi";
//import { calendarSelectors } from "../../../redux/extraInfo";
import icon from "assets/symbol-icons.svg";
import s from "./ProductList.module.scss";

const ProductList = ({ convertedDateList, visible, deleteContact }) => {
  //const [expenseTransactions, setExpenseTransactions] = useState([]);

  //const pickedDate = useSelector(calendarSelectors.getDate);
  //console.log(`month: ${pickedDate.month}`, `year: ${pickedDate.year}`);

  // useEffect(() => {
  //   getTransactionsByDate(pickedDate.month, pickedDate.year).then((ta) => {
  //     setExpenseTransactions(ta.expenseTransactions);
  //     console.log(ta);
  //   });
  // }, []);

  //console.log(expenseTransactions);

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
          {visible.map(({ _id, description, category, sum }) => {
            return (
              <tr key={_id}>
                <td>{convertedDateList}</td>
                <td>{description}</td>
                <td>{category}</td>
                <td>{sum}</td>
                <td>
                  <button
                    className={s.button}
                    type="button"
                    onClick={() => deleteTransaction(_id)}
                  >
                    <svg className={s.icon} width="18" height="18">
                      <use href={`${icon}#icon-delete`} />
                    </svg>
                  </button>
                </td>
              </tr>
            );
          })}
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
