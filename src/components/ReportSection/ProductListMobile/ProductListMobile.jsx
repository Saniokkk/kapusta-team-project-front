import styles from "./ProductListMobile.module.css";
import icon from "assets/symbol-icons.svg";

const ProductListMobile = ({ convertedDateList, visible }) => {
  return (
    <ul className={styles.transactionList}>
      {visible.map(({ _id, description, category, sum }) => {
        return (
          <li key={_id} className={styles.transactionListItem}>
            <ul>
              <li>
                <p className={styles.description}>{description}</p>
                <p className={styles.date}>{convertedDateList}</p>
              </li>
              <li className={styles.categories}>
                <p>{category}</p>
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
      <li className={styles.transactionListItem}></li>
      <li className={styles.transactionListItem}></li>
      <li className={styles.transactionListItem}></li>
    </ul>
  );
};

export default ProductListMobile;
