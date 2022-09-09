import { NavLink } from "react-router-dom";
import styles from "./ReportSection.module.css";
import { useState, useEffect } from "react";
import { useMediaQuery } from "@react-hook/media-query";
import TransactionForm from "components/Transaction/TransactionForm/TransactionForm";
import ProductList from "components/Transaction/ProductList/ProductList";
import { Summary } from "components/Summary";
import Datepicker from "../DatePicker/Datepicker";
import { Report } from "../Report";
import { useDispatch, useSelector } from "react-redux";
import icon from "assets/symbol-icons.svg";
import { BalanceForm } from "components/BalanceForm";

// import { BalanceBtn } from "../BalanceForm/BalanceButton";
import { addCurrentType } from "redux/extraInfo/extraInfo-slice";
import { getDate, getCurrentType } from "redux/extraInfo/extraInfo-selectors";

const ReportSection = () => {
  const [products, setProducts] = useState([
    {
      id: "id-1",
      description: "Метро",
      categories: "Транспорт",
      sum: "8.00",
    },
    {
      id: "id-2",
      description: "Бананы",
      categories: "Продукты",
      sum: "30.00",
    },
    {
      id: "id-3",
      description: "Яблоки",
      categories: "Продукты",
      sum: "25.00",
    },
    {
      id: "id-4",
      description: "Метро",
      categories: "Транспорт",
      sum: "8.00",
    },
  ]);
  const [visibleForm, setVisibleForm] = useState(false);
  const [jumpBetweenDevices, setJumpBetweenDevices] = useState(false);

  const dispatch = useDispatch();
  const transactionOptions = useSelector(getCurrentType);
  const date = useSelector(getDate);

  const isMobile = useMediaQuery("only screen and (max-width: 767px)");
  const isTablet = useMediaQuery("only screen and (min-width: 768px)");
  // const isdesktop = useMediaQuery("only screen and (max-width: 1279px)");

  const visible = () => {
    if (isMobile) {
      setVisibleForm(true);
      setJumpBetweenDevices(true);
      return;
    }
    return;
  };

  useEffect(() => {
    if (isMobile & !jumpBetweenDevices) {
      return;
    }

    if (isMobile & jumpBetweenDevices) {
      setVisibleForm(true);
      return;
    }

    setVisibleForm(false);
  }, [isMobile, setProducts, visibleForm, jumpBetweenDevices, isTablet]);

  return (
    <section className={styles.reportSection}>
      <div className={styles.reportBackgroundSection}></div>
      <div className={styles.conteiner}>
        {!visibleForm && (
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
                <NavLink to="/report" exact className={styles.link}>
                  <Report />
                </NavLink>
              ) : (
                <NavLink to="" exact className={styles.link}>
                  <Report />
                </NavLink>
              )}
            </div>
          </div>
        )}

        {!visibleForm && (
          <div className={styles.transactionSwitch}>
            <button
              type="button"
              className={`${styles.btn} ${
                transactionOptions === "expenses" && styles.activeBtn
              }`}
              onClick={() => {
                dispatch(addCurrentType("expenses"));
                visible();
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
                dispatch(addCurrentType("income"));
                visible();
              }}
            >
              доходи
            </button>
          </div>
        )}

        {!visibleForm && (
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
                              <svg
                                className={styles.icon}
                                width="18"
                                height="18"
                              >
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
              <>
                <div className={styles.transaction}>
                  <TransactionForm />
                </div>
                <div className={styles.statement}>
                  <ProductList visible={products} />
                  <div className={styles.summary}>
                    <Summary />
                  </div>
                </div>
              </>
            )}
          </div>
        )}

        {visibleForm && isMobile && (
          <>
            {/* <button
              type="button"
              onClick={() => {
                setVisibleForm(false);
                setJumpBetweenDevices(false);
              }}
            >
              на главную
            </button>
            <div className={styles.transaction}>
              <TransactionForm />
            </div> */}

            <button
              type="button"
              className={styles.backReportSectionbtn}
              onClick={() => {
                setVisibleForm(false);
                setJumpBetweenDevices(false);
              }}
            >
              <svg className={styles.icon} width="18" height="12">
                <use href={`${icon}#icon-arrowToBackReportSection`} />
              </svg>
            </button>
            <div className={styles.transaction}>
              <TransactionForm />
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default ReportSection;
