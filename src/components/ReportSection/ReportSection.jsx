import styles from "./ReportSection.module.css";
import { useState } from "react";
import { useMediaQuery } from "@react-hook/media-query";
import TransactionForm from "components/Transaction/TransactionForm/TransactionForm";
import ProductList from "components/Transaction/ProductList/ProductList";
import { nanoid } from "nanoid";
import { Summary } from "components/Summary";
import Datepicker from "../DatePicker/Datepicker";
import { Report } from "../Report";
import { useDispatch, useSelector } from "react-redux";
import icon from "assets/symbol-icons.svg";
import { BalanceForm } from "components/BalanceForm";

// import { BalanceBtn } from "../BalanceForm/BalanceButton";
import { NavLink } from "react-router-dom";
import { addCurrentType } from "redux/extraInfo/extraInfo-slice";
import { getDate, getCurrentType } from "redux/extraInfo/extraInfo-selectors";

const ReportSection = () => {
  const [products, setProducts] = useState([]);

  const dispatch = useDispatch();
  const transactionOptions = useSelector(getCurrentType);
  const date = useSelector(getDate);

  const isMobile = useMediaQuery("only screen and (max-width: 767px)");
  const isTablet = useMediaQuery("only screen and (min-width: 768px)");
  // const isdesktop = useMediaQuery("only screen and (max-width: 1279px)");

  const addproduct = (description, categories, sum) => {
    const product = {
      id: nanoid(),
      description,
      categories,
      sum,
    };

    setProducts((prevState) => [product, ...prevState]);
  };

  const deleteContact = (Id) => {
    setProducts((prevState) =>
      prevState.filter((product) => product.id !== Id)
    );
  };

  return (
    <section className={styles.reportSection}>
      <div className={styles.reportBackgroundSection}></div>
      <div className={styles.conteiner}>
        <div className={styles.balance}>
          <div className={styles.balanceAdd}>
            <div className={styles.balanceForm}>
              <BalanceForm />
            </div>
            {/* <div className={styles.balancebtn}>
              {isdesktop && <BalanceBtn />}
            </div> */}
          </div>

          <div className={styles.transitionReport}>
            {transactionOptions === "expenses" ? (
              <NavLink to="/endpoint" exact className={styles.link}>
                <Report />
              </NavLink>
            ) : (
              <NavLink to="" exact className={styles.link}>
                <Report />
              </NavLink>
            )}
          </div>
        </div>

        <div className={styles.transactionSwitch}>
          <button
            type="button"
            className={`${styles.btn} ${
              transactionOptions === "expenses" && styles.activeBtn
            }`}
            onClick={() => dispatch(addCurrentType("expenses"))}
          >
            витрати
          </button>

          <button
            type="button"
            className={`${styles.btn} ${
              transactionOptions === "income" && styles.activeBtn
            }`}
            onClick={() => dispatch(addCurrentType("income"))}
          >
            доходи
          </button>
        </div>

        <div className={styles.activity}>
          {isMobile && (
            <>
              <div className={styles.transactionDate}>
                <Datepicker />
              </div>
              <ul className={styles.transactionList}>
                {products.map(({ id, description, categories, sum }) => {
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
            </>
          )}
          {isTablet && (
            <div className={styles.transaction}>
              <TransactionForm onSubmit={addproduct} />
            </div>
          )}

          <div className={styles.statement}>
            {isTablet && (
              <>
                <ProductList visible={products} deleteContact={deleteContact} />
                <div className={styles.summary}>
                  <Summary />
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReportSection;
