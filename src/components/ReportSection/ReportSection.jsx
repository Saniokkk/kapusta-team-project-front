import styles from "./ReportSection.module.css";
import { useState, useEffect } from "react";
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
import { BalanceBtn } from "../BalanceForm/BalanceButton";
import { NavLink } from "react-router-dom";
import { addCurrentType } from "redux/extraInfo/extraInfo-slice";

const ReportSection = () => {
  const [products, setProducts] = useState(() => {
    //при первой загрузки получаем данные из локального хранилища либо записываем готовый массив контактов(обьектов)
    return JSON.parse(window.localStorage.getItem("product")) ?? [];
  });
  const [transactionOptions, setTransactionOptions] = useState("expenses");
  const dispatch = useDispatch();
  dispatch(addCurrentType(transactionOptions));

  const isMobile = useMediaQuery("only screen and (max-width: 767px)");
  const isTablet = useMediaQuery("only screen and (min-width: 768px)");
  const isdesktop = useMediaQuery("only screen and (max-width: 1279px)");

  const date = useSelector((state) => state.extraInfo.date);

  const addproduct = (description, categories, sum) => {
    const product = {
      id: nanoid(),
      description,
      categories,
      sum,
    };

    setProducts((prevState) => [product, ...prevState]);
  };

  const getlist = () => {
    return products.map((product) => {
      return product;
    });
  };

  const deleteContact = (Id) => {
    setProducts((prevState) =>
      prevState.filter((product) => product.id !== Id)
    );
  };

  //   // первый раз при загрузки и каждый раз при изменении компонента перезаписываем в локальное хранилище
  useEffect(() => {
    window.localStorage.setItem("product", JSON.stringify(products));
  }, [products]);

  return (
    <section className={styles.reportSection}>
      <div className={styles.reportBackgroundSection}></div>
      <div className={styles.conteiner}>
        <div className={styles.balance}>
          <div className={styles.balanceAdd}>
            <div className={styles.balanceForm}>
              <BalanceForm />
            </div>
            <div className={styles.balancebtn}>
              {isdesktop && <BalanceBtn />}
            </div>
          </div>

          <div className={styles.transitionReport}>
            {transactionOptions === "expenses" ? (
              <NavLink to="/" exact className={styles.link}>
                <Report />
              </NavLink>
            ) : (
              <NavLink to="/report" exact className={styles.link}>
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
            onClick={() => {
              setTransactionOptions("expenses");
              dispatch(addCurrentType(transactionOptions));
            }}
          >
            витрати
          </button>

          <button
            type="button"
            className={`${styles.btn} ${
              transactionOptions === "income" && styles.activeBtn
            }`}
            onClick={() => {
              setTransactionOptions("income");
              dispatch(addCurrentType(transactionOptions));
            }}
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
                {getlist().map(({ id, description, categories, sum }) => {
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
                <ProductList
                  visible={getlist()}
                  deleteContact={deleteContact}
                />
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

export { ReportSection };
