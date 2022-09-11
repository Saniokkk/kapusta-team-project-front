import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import selectors from "redux/auth/auth-selector";
import authOperations from "redux/auth/auth-operations";
import { getCurrentType } from "redux/extraInfo/extraInfo-selectors";
import {
  getTransactionsByDate,
  deleteTransaction,
} from "services/transactionsApi";
import { calendarSelectors } from "../../../redux/extraInfo";
import icon from "assets/symbol-icons.svg";
import s from "./ProductList.module.scss";

const ProductList = () => {
  const [data, setData] = useState([]);

  const dispatch = useDispatch();
  const totalBalance = useSelector(selectors.getUserBalance);
  const transactionType = useSelector(getCurrentType);
  const pickedDate = useSelector(calendarSelectors.getDate);

  const dayWithZero = ("0" + pickedDate.day).slice(-2);
  const monthWithZero = ("0" + pickedDate.month).slice(-2);
  const convertedDate = `${pickedDate.year}-${monthWithZero}-${dayWithZero}`;

  const sumClass = transactionType === "expense" ? `${s.red}` : `${s.green}`;

  useEffect(() => {
    if (transactionType === "expense") {
      getTransactionsByDate(convertedDate).then((ta) => {
        setData(ta.expenseByDay);
        console.log("wtf", ta.expenseByDay);
      });
    }

    if (transactionType === "income") {
      getTransactionsByDate(convertedDate).then((ta) => {
        setData(ta.incomeByDay);
        console.log(ta.incomeByDay);
      });
    }
  }, [convertedDate, transactionType, totalBalance]);

  const convertDate = (date) => {
    const convertedDate = date.slice(0, -14).replace(/-/g, ".");
    return convertedDate;
  };

  const negativeSum = (price) => {
    const index = `${price}.00`.indexOf(".");
    const number = `${price}.00`.slice(0, index + 3);
    const convNumber = Number.parseFloat(`${number}`).toFixed(2);
    const negNumber = `- ${convNumber} грн.`;
    const posNumber = `${convNumber} грн.`;

    if (transactionType === "expense") {
      return negNumber;
    }

    if (transactionType === "income") {
      return posNumber;
    }
  };

  const handleDelete = (id) => {
    if (transactionType === "expense") {
      deleteTransaction("expense", id).then((res) => {
        dispatch(
          authOperations.updateCurrentUser({ totalBalance: res.totalBalance })
        );
      });
    }

    if (transactionType === "income") {
      deleteTransaction("income", id).then((res) => {
        dispatch(
          authOperations.updateCurrentUser({ totalBalance: res.totalBalance })
        );
      });
    }
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
          {data &&
            data.map(({ _id, date, description, category, sum }) => {
              return (
                <tr key={_id}>
                  <td>{convertDate(date)}</td>
                  <td>{description}</td>
                  <td>{category === "Здоровя" ? "Здоров'я" : category}</td>
                  <td className={sumClass}>{negativeSum(sum)}</td>
                  <td>
                    <button
                      className={s.button}
                      type="button"
                      onClick={() => handleDelete(_id)}
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
