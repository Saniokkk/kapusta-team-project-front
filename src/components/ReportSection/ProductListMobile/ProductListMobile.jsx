import styles from "./ProductListMobile.module.css";
import icon from "assets/symbol-icons.svg";
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
import { makeNumberWithSpaces } from "helpers/numberWithSpaces";
import { ModalLogout } from "components/ModalLogout";

const ProductListMobile = () => {
  const [data, setData] = useState([]);
  const [modalState, setModalState] = useState(false);
  const [clickedId, setClickedId] = useState("");
  const [category, setCategory] = useState("");

  const dataData = data.sort((a, b) => {
    return Date.parse(b.createdAt) - Date.parse(a.createdAt);
  });

  const dispatch = useDispatch();
  const totalBalance = useSelector(selectors.getUserBalance);
  const transactionType = useSelector(getCurrentType);
  const pickedDate = useSelector(calendarSelectors.getDate);

  const dayWithZero = ("0" + pickedDate.day).slice(-2);
  const monthWithZero = ("0" + pickedDate.month).slice(-2);
  const convertedDate = `${pickedDate.year}-${monthWithZero}-${dayWithZero}`;

  useEffect(() => {
    getTransactionsByDate(convertedDate).then((ta) => {
      setData([...ta.expenseByDay, ...ta.incomeByDay]);
    });
  }, [convertedDate, transactionType, totalBalance]);

  const convertDate = (date) => {
    const year = date.slice(0, -20);
    const month = date.slice(5, -17);
    const day = date.slice(8, -14);
    const result = `${day}.${month}.${year}`;

    return result;
  };

  const transactionColor = (category) => {
    const sumClass =
      category === "Доп.дохід" || category === "Дохід"
        ? `${styles.green}`
        : `${styles.red}`;

    return sumClass;
  };

  const negativeSum = (price, category) => {
    const index = `${price}.00`.indexOf(".");
    const number = `${price}.00`.slice(0, index + 3);
    const convNumber = Number.parseFloat(number).toFixed(2);
    const numberWithSpaces = makeNumberWithSpaces(Number(convNumber));
    const negNumber = `- ${numberWithSpaces} грн.`;
    const posNumber = `${numberWithSpaces} грн.`;

    return category === "Доп.дохід" || category === "Дохід"
      ? posNumber
      : negNumber;
  };

  const handleClickOnDelete = (_id, category) => {
    setCategory(category);
    setClickedId(_id);
    setModalState(!modalState);
  };

  const handleDelete = (id, category) => {
    if (category !== "Доп.дохід" || category !== "Дохід") {
      deleteTransaction("expense", id).then((res) => {
        dispatch(
          authOperations.updateCurrentUser({ totalBalance: res.totalBalance })
        );
        setModalState(!modalState);
      });
    }
    if (category === "Доп.дохід" || category === "Дохід") {
      deleteTransaction("income", id).then((res) => {
        dispatch(
          authOperations.updateCurrentUser({ totalBalance: res.totalBalance })
        );
        setModalState(!modalState);
      });
    }
  };

  return (
    <>
      <ul className={styles.transactionList}>
        {data &&
          dataData.map(({ _id, date, description, category, sum }) => {
            return (
              <li key={_id} className={styles.transactionListItem}>
                <ul>
                  <li>
                    <p className={styles.description}>{description}</p>
                    <p className={styles.date}>{convertDate(date)}</p>
                  </li>
                  <li className={styles.categories}>
                    <p>{category === "Здоровя" ? "Здоров'я" : category}</p>
                  </li>
                  <li className={styles.sum}>
                    <p className={transactionColor(category)}>
                      {negativeSum(sum, category)}
                    </p>
                  </li>
                  <li>
                    <button
                      className={styles.button}
                      type="button"
                      onClick={() => handleClickOnDelete(_id, category)}
                    >
                      <svg className={styles.icon} width="18" height="18">
                        <use href={`${icon}#icon-delete`} />
                      </svg>
                    </button>
                  </li>
                </ul>
              </li>
            );
          })}
        <li className={styles.transactionListItem}></li>
        <li className={styles.transactionListItem}></li>
        <li className={styles.transactionListItem}></li>
      </ul>
      {modalState && (
        <ModalLogout
          onClose={() => setModalState(!modalState)}
          handleClickLeft={() => handleDelete(clickedId, category)}
          handleClickRight={() => setModalState(!modalState)}
          modalTitle="Видалити транзакцію?"
        />
      )}
    </>
  );
};

export default ProductListMobile;
