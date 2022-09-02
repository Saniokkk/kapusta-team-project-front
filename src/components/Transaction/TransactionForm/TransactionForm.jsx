import { useFormik } from "formik";
import { useState } from "react";
import Category from "components/Transaction/Category/Category";
import icons from "assets/symbol-icons.svg";
import styles from "./TransactionForm.module.css";

const TransactionForm = ({ onSubmit }) => {
  const [category, setCategories] = useState("Категорії");
  const [price, setPrice] = useState(0);

  const formik = useFormik({
    initialValues: {
      description: "",
      category: category,
      sum: "",
    },
    onSubmit: (values, { resetForm }) => {
      onSubmit(description, category, price);
      setCategories("Категорії");
      resetForm();
    },
  });

  const { description, sum } = formik.values;

  //округление до сотых
  const negativeSum = (price) => {
    const index = `${price}.00`.indexOf(".");
    const number = `${price}.00`.slice(0, index + 3);

    const positiveNumber = Number.parseFloat(`${number}`).toFixed(2);

    return setPrice(`- ${positiveNumber} грн.`);
  };

  const reset = () => {
    setCategories("Категорії");
    formik.resetForm();
  };

  return (
    <div className={styles.formWrapper}>
      <form onSubmit={formik.handleSubmit} className={styles.form} id="example">
        <label className={styles.label}>
          <input
            className={styles.inputDesc}
            type="text"
            name="description"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            placeholder="Опис"
            value={description}
            onChange={formik.handleChange}
          />
        </label>

        <Category name="category" onSubmit={setCategories} value={category} />

        <label className={styles.label}>
          <input
            className={styles.inputSum}
            type="number"
            name="sum"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            placeholder="0.00"
            value={sum}
            onChange={(e) => {
              formik.handleChange(e);
              negativeSum(e.target.value);
            }}
          />
          <svg className={styles.icon} width="18" height="18">
            <use href={`${icons}#icon-calculator`} />
          </svg>
        </label>
      </form>

      <button type="submit" className={styles.submitBtn} form="example">
        ввести
      </button>
      <button className={styles.clearBtn} type="button" onClick={reset}>
        очистити
      </button>
    </div>
  );
};

export default TransactionForm;
