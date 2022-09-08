import { useFormik } from "formik";
import { useMediaQuery } from "@react-hook/media-query";
import { useState } from "react";
import { useSelector } from "react-redux";
import { calendarSelectors } from "../../../redux/extraInfo";
import { addTransactionExpense } from "services/transactionsApi";
import Datepicker from "components/DatePicker/Datepicker";
import Category from "components/Transaction/Category/Category";
import icons from "assets/symbol-icons.svg";
import s from "./TransactionForm.module.scss";

const TransactionForm = ({ onSubmit }) => {
  const [category, setCategories] = useState("Категорія продукту");

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
      category: category,
      sum: "",
    },
    onSubmit: (values, { resetForm }) => {
      const transaction = {
        date: convertedDate,
        description,
        category: category,
        sum,
      };
      //console.log(transaction);
      //onSubmit(description, category, price);
      addTransactionExpense(transaction);
      setCategories("Категорія продукту");
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
    setCategories("Категорія продукту");
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
        </label>

        <Category name="category" onSubmit={setCategories} value={category} />

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
          <span className={s.borderTop}></span>
          <svg className={s.icon} width="20" height="20">
            <use href={`${icons}#icon-calculator`} />
          </svg>
        </label>
      </form>

      <div className={s.buttons}>
        <button type="submit" className={s.submitBtn} form="example">
          ввести
        </button>
        <button className={s.clearBtn} type="button" onClick={reset}>
          очистити
        </button>
      </div>
    </div>
  );
};

export default TransactionForm;
