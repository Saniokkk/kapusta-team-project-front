import styles from "./BalanceForm.module.scss";
import NumberFormat from "react-number-format";
// import { useSelector, } from "react-redux";
// import { getBalance } from "redux/balance/balance-operation";
import { useDispatch } from "react-redux";
import { updateBalance } from "redux/balance/balance-operation";

import { useState } from "react";

const BalanceForm = () => {
  const [balance, setBalance] = useState(0);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateBalance(balance));
  };

  const handleChange = (e) => {
    const { value } = e.target;

    const valueInput = parseFloat(value.split(" ").join(""));
    console.log("value input:", valueInput, "type:", typeof valueInput);
    setBalance(valueInput);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.form_title__box}>
        <h3 className={styles.form__title}>Баланс:</h3>
      </div>

      <div className={styles.form_input__box}>
        <NumberFormat
          className={styles.form__input}
          autoComplete="off"
          name="input"
          thousandSeparator={" "}
          suffix={" UAH"}
          value={balance}
          onChange={handleChange}
          allowLeadingZeros={true}
          isNumericString={true}
          fixedDecimalScale={true}
          decimalScale={2}
        />
        <button
          className={styles.form__button}
          type="submit"
          onSubmit={handleSubmit}
        >
          Підтвердити
        </button>
      </div>
    </form>
  );
};

export { BalanceForm };
