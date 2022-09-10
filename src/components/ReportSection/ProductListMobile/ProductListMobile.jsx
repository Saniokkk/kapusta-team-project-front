import { useSelector } from "react-redux";
import { getDate } from "redux/extraInfo/extraInfo-selectors";

import styles from "./ProductListMobile.module.css";
import icon from "assets/symbol-icons.svg";

const ProductListMobile = ({ visible }) => {
  const date = useSelector(getDate);
  return (
    <ul className={styles.transactionList}>
      {visible.map(({ id, description, categories, sum }) => {
        return (
          <li key={id} className={styles.transactionListItem}>
            <ul>
              <li>
                <p className={styles.description}>{description}</p>
                <p
                  className={styles.date}
                >{`${date.day}.${date.month}.${date.year}`}</p>
              </li>
              <li className={styles.categories}>
                <p>{categories}</p>
              </li>
              <li className={styles.sum}>
                <p>{sum}</p>
              </li>
              <li>
                <button
                  className={styles.button}
                  type="button"
                  // onClick={() => deleteTransaction(id)}
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
    </ul>
  );
};

export default ProductListMobile;
