import { useFormik } from "formik";
import { useMediaQuery } from "@react-hook/media-query";
import { useSelector, useDispatch } from "react-redux";
import selectors from "redux/auth/auth-selector";
import authOperations from "redux/auth/auth-operations";
import { calendarSelectors } from "../../../redux/extraInfo";
import { addCurrentCategory } from "redux/extraInfo/extraInfo-slice";
import {
  getCurrentType,
  getCurrentCategory,
} from "redux/extraInfo/extraInfo-selectors";
import {
  addTransactionExpense,
  addTransactionIncome,
} from "services/transactionsApi";
import Datepicker from "components/DatePicker/Datepicker";
import Category from "components/Transaction/Category/Category";
import { motion } from "framer-motion";
import { Notify } from "notiflix/build/notiflix-notify-aio";
import icons from "assets/symbol-icons.svg";
import s from "./TransactionForm.module.scss";

const TransactionForm = () => {
  const dispatch = useDispatch();
  const transactionType = useSelector(getCurrentType);
  const currentCategory = useSelector(getCurrentCategory);
  const totalBalance = useSelector(selectors.getUserBalance);
  const pickedDate = useSelector(calendarSelectors.getDate);

  const dayWithZero = ("0" + pickedDate.day).slice(-2);
  const monthWithZero = ("0" + pickedDate.month).slice(-2);
  const convertedDate = `${pickedDate.year}-${monthWithZero}-${dayWithZero}`;

  const isMobile = useMediaQuery("only screen and (max-width: 767px)");
  const isTablet = useMediaQuery("only screen and (min-width: 768px)");
  const placeholder = isMobile ? "0.00 UAH" : "0.00";

  const formik = useFormik({
    initialValues: {
      description: "",
      category: currentCategory,
      sum: "",
    },
    onSubmit: (values, { resetForm }) => {
      if (totalBalance < sum && transactionType !== "income") {
        Notify.info("Ваш баланс недостатній для здійснення операції");
        return;
      }

      const transaction = {
        date: convertedDate,
        description,
        category: currentCategory === "Здоров'я" ? "Здоровя" : currentCategory,
        sum,
      };

      handleSubmitData(transaction);
      resetForm();
    },
  });

  const { description, sum } = formik.values;

  const handleSubmitData = (transaction) => {
    if (transactionType === "expense") {
      addTransactionExpense(transaction).then((res) => {
        dispatch(
          authOperations.updateCurrentUser({ totalBalance: res.totalBalance })
        );
      });
    }

    if (transactionType === "income") {
      addTransactionIncome(transaction).then((res) => {
        dispatch(
          authOperations.updateCurrentUser({ totalBalance: res.totalBalance })
        );
      });
    }

    dispatch(addCurrentCategory("Категорія"));
  };

  const reset = () => {
    dispatch(addCurrentCategory("Категорія"));
    formik.resetForm();
  };

  return (
    <div className={s.formWrapper}>
      <form onSubmit={formik.handleSubmit} className={s.form} id="transactions">
        {isTablet ? <Datepicker /> : <></>}
        <label className={s.label}>
          <input
            className={s.inputDesc}
            type="text"
            name="description"
            required
            placeholder="Опис продукту"
            value={description}
            onChange={formik.handleChange}
            minLength="3"
            maxLength="20"
            pattern="[a-zA-Z\u0400-\u04ff]{3,30}"
          />
          <span className={s.borderRight}></span>
        </label>

        <Category name="category" />

        <label className={s.label}>
          <input
            className={s.inputSum}
            type="number"
            name="sum"
            required
            placeholder={placeholder}
            value={sum}
            onChange={(e) => {
              formik.handleChange(e);
            }}
          />

          <span className={s.borderLeft}></span>
          <span className={s.borderMiddle}></span>

          <svg className={s.icon} width="20" height="20">
            <use href={`${icons}#icon-calculator`} />
          </svg>
        </label>
      </form>

      <div className={s.buttons}>
        <motion.button
          type="submit"
          className={s.submitBtn}
          form="transactions"
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          ввести
        </motion.button>
        <motion.button
          className={s.clearBtn}
          type="button"
          onClick={reset}
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          очистити
        </motion.button>
      </div>
    </div>
  );
};

export default TransactionForm;
