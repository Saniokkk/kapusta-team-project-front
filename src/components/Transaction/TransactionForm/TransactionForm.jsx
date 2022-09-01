import { useState } from "react";
import s from "./TransactionForm.module.css";
import Category from "components/Transaction/Category/Category";
import { useFormik } from "formik";

const TransactionForm = ({ onSubmit }) => {
  // const [description, setDescription] = useState("");
  const [category, setCategories] = useState("Категорії");
  // const [sum, setSum] = useState("");
  const [price, setPrice] = useState(0);

  const formik = useFormik({
    initialValues: {
      description: "",
      category: category,
      sum: "",
    },
    onSubmit: (values, { resetForm }) => {
      onSubmit(description, category, price);
      //alert(JSON.stringify(values, null, 2));
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

  // const handleChange = (evt) => {
  //   const { name, value } = evt.target;

  //   switch (name) {
  //     case "description":
  //       setDescription(value);
  //       break;

  //     case "sum":
  //       setSum(value);
  //       negativeSum(value);
  //       break;

  //     default:
  //       return;
  //   }
  // };

  // const handleSubmit = (evt) => {
  //   evt.preventDefault();
  //   onSubmit(description, category, price);
  //   reset();
  // };

  // const reset = () => {
  //   setDescription("");
  //   setCategories("Категорії");
  //   setSum("");
  // };

  return (
    <div className={s.transaction__form}>
      <form
        onSubmit={formik.handleSubmit}
        //onSubmit={handleSubmit}
        className={s.form}
        id="example"
      >
        <label className={s.label}>
          <input
            className={s.input_description}
            type="text"
            name="description"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            placeholder="Опис"
            value={description}
            onChange={formik.handleChange}
            //onChange={handleChange}
          />
        </label>

        <Category name="category" onSubmit={setCategories} value={category} />

        <label className={s.label}>
          <input
            className={s.input_number}
            type="number"
            name="sum"
            // pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            placeholder="0.00"
            value={sum}
            //onChange={handleChange}
            onChange={(e) => {
              formik.handleChange(e);
              negativeSum(e.target.value);
            }}
          />
        </label>
      </form>

      <button type="submit" className={s.button} form="example">
        ввести
      </button>
      <button
        className={s.button}
        type="button"
        onClick={() => formik.resetForm()}
      >
        очистити
      </button>
    </div>
  );
};

export default TransactionForm;
