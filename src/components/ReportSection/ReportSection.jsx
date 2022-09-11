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
import { BalanceBtn } from "../BalanceForm/BalanceButton";
import {
  addCurrentType,
  addCurrentCategory,
} from "redux/extraInfo/extraInfo-slice";
import { getCurrentType } from "redux/extraInfo/extraInfo-selectors";
import ProductListMobile from "./ProductListMobile/ProductListMobile";

////////////////////
import { getDate } from "redux/extraInfo/extraInfo-selectors";
import { getTransactionsByDay } from "services/reportsApi";
////////////////////

const ReportSection = () => {
  const [products, setProducts] = useState([]);
  const [unmount, setUnmount] = useState(false); // компоненты монтируются один раз при загрузке страницы

  const [visibleForm, setVisibleForm] = useState(false);
  const [jumpBetweenDevices, setJumpBetweenDevices] = useState(false);

  const dispatch = useDispatch();
  const transactionOptions = useSelector(getCurrentType);

  const isMobile = useMediaQuery("only screen and (max-width: 767px)");
  const isTablet = useMediaQuery("only screen and (min-width: 768px)");
  const isdesktop = useMediaQuery("only screen and (max-width: 1279px)");

  ////////////////////
  const date = useSelector(getDate);
  const dayWithZero = ("0" + date.day).slice(-2);
  const monthWithZero = ("0" + date.month).slice(-2);
  const convertedDate = `${date.year}-${monthWithZero}-${dayWithZero}`;
  const convertedDateList = `${date.year}.${monthWithZero}.${dayWithZero}`;
  ////////////////////

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

      ////////////////////
      if (unmount) {
        return;
      }

      getTransactionsByDay(convertedDate).then((res) => {
        transactionOptions === "expense" && setProducts(res.expenseByDay);
        transactionOptions === "income" && setProducts(res.incomeByDay);
      });

      return () => {
        setUnmount(true);
      };
      ////////////////////
    }

    setVisibleForm(false);

    ////////////////////
    if (unmount) {
      return;
    }

    getTransactionsByDay(convertedDate).then((res) => {
      transactionOptions === "expense" && setProducts(res.expenseByDay);
      transactionOptions === "income" && setProducts(res.incomeByDay);
    });

    return () => {
      setUnmount(true);
    };
    ////////////////////
  }, [
    unmount,
    isMobile,
    products,
    transactionOptions,
    convertedDate,
    setProducts,
    jumpBetweenDevices,
  ]);

  const handleBtnClick = (evt) => {
    if (evt.target.name === "expense") {
      dispatch(addCurrentType("expense"));
      dispatch(addCurrentCategory("Категорія товару"));
    }

    if (evt.target.name === "income") {
      dispatch(addCurrentType("income"));
      dispatch(addCurrentCategory("Категорія доходу"));
    }

    setUnmount(false);
    visible();
  };

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
              <div className={styles.balancebtn}>
                {isdesktop && <BalanceBtn />}
              </div>
            </div>

            <div className={styles.transitionReport}>
              <NavLink to="/report" exact className={styles.link}>
                <Report />
              </NavLink>
            </div>
          </div>
        )}

        {!visibleForm && (
          <div className={styles.transactionSwitch}>
            <button
              type="button"
              name="expense"
              className={`${styles.btn} ${
                transactionOptions === "expense" && styles.activeBtn
              }`}
              onClick={handleBtnClick}
            >
              витрати
            </button>

            <button
              type="button"
              name="income"
              className={`${styles.btn} ${
                transactionOptions === "income" && styles.activeBtn
              }`}
              onClick={handleBtnClick}
            >
              доходи
            </button>
          </div>
        )}

        {/* календарь, список транзакций для мобильного */}
        {!visibleForm && (
          <div className={styles.activity}>
            {isMobile && (
              <>
                <div className={styles.transactionDate}>
                  <Datepicker />
                </div>
                <ProductListMobile
                  convertedDateList={convertedDateList}
                  visible={products}
                />
              </>
            )}

            {/* форма, список транзакций, сумма за месяц */}
            {isTablet && (
              <>
                <div className={styles.transaction}>
                  <TransactionForm />
                </div>
                <div className={styles.statement}>
                  <ProductList
                    convertedDateList={convertedDateList}
                    visible={products}
                  />
                  <div className={styles.summary}>
                    <Summary />
                  </div>
                </div>
              </>
            )}
          </div>
        )}

        {/* кнопка на главную на мобильном устройстве */}
        {visibleForm && isMobile && (
          <>
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
