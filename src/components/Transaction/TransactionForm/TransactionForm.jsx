import { useFormik } from "formik";
import { useMediaQuery } from "@react-hook/media-query";
import { useSelector, useDispatch } from "react-redux";
import {
  getCurrentCategory,
  getCurrentType,
} from "redux/extraInfo/extraInfo-selectors";
import { addCurrentCategory } from "redux/extraInfo/extraInfo-slice";
import { calendarSelectors } from "../../../redux/extraInfo";
import { addTransactionExpense } from "services/transactionsApi";
import Datepicker from "components/DatePicker/Datepicker";
import Category from "components/Transaction/Category/Category";
import { motion } from "framer-motion";
import icons from "assets/symbol-icons.svg";
import s from "./TransactionForm.module.scss";
import authOperations from "redux/auth/auth-operations";
import selectors from "redux/auth/auth-selector";
import { Notify } from "notiflix/build/notiflix-notify-aio";

const TransactionForm = ({ onSubmit }) => {
  //const [price, setPrice] = useState(0);
  const dispatch = useDispatch();
  const transactionType = useSelector(getCurrentType);
  const currentCategory = useSelector(getCurrentCategory);
  const totalBalance = useSelector(selectors.getUserBalance);

  const pickedDate = useSelector(calendarSelectors.getDate);
  const dayWithZero = ("0" + pickedDate.day).slice(-2);
  const monthWithZero = ("0" + pickedDate.month).slice(-2);
  // const convertedDate = `${dayWithZero}.${monthWithZero}.${pickedDate.year}`;
  const convertedDate = `${pickedDate.year}.${monthWithZero}.${dayWithZero}`;
  //console.log(convertedDate);

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
        category: currentCategory,
        sum,
      };
      console.log(transaction);
      //onSubmit(description, category, price);
      addTransactionExpense(transaction).then((res) => {
        console.log(res.totalBalance, "Balans");
        dispatch(
          authOperations.updateCurrentUser({ totalBalance: res.totalBalance })
        );
      });
      dispatch(addCurrentCategory("Категорія продукту"));
      resetForm();
    },
  });

  const { description, sum } = formik.values;

  //округление до сотых
  // const negativeSum = (price) => {
  //   const index = `${price}.00`.indexOf(".");
  //   const number = `${price}.00`.slice(0, index + 3);
  //   const posNumber = Number.parseFloat(`${number}`).toFixed(2);
  //   const negNumber = `- ${posNumber} грн.`;

  //   return negNumber;
  // };

  const reset = () => {
    dispatch(addCurrentCategory("Категорія продукту"));
    formik.resetForm();
  };

  return (
    <div className={s.formWrapper}>
      <form onSubmit={formik.handleSubmit} className={s.form} id="example">
        {isTablet ? <Datepicker /> : <></>}
        <label className={s.label}>
          <input
            className={s.inputDesc}
            type="text"
            name="description"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            required
            placeholder="Опис продукту"
            value={description}
            onChange={formik.handleChange}
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
              //negativeSum(e.target.value);
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
          form="example"
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
