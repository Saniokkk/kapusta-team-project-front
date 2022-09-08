import styles from "./BalanceForm.module.scss";
import NumberFormat from "react-number-format";
import selectors from "redux/auth/auth-selector";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

import authOperations from "redux/auth/auth-operations";
import { ModalBalanceError } from "components/ModalBalanceError";
import { useState, useEffect } from "react";
import { BalanceBtn } from "./BalanceButton";

import useWindowDimensions from "hooks/useWindowDimensions";

const BalanceForm = () => {
  const [balance, setBalance] = useState(0);

  const dispatch = useDispatch();
  const totalBalance = useSelector(selectors.getUserBalance);

  useEffect(() => {
    if (totalBalance) {
      setBalance(totalBalance);
    }
  }, [totalBalance]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (balance === 0) {
      return <ModalBalanceError />;
    }
    if (totalBalance > 0) {
      const form = e.target;
      form.elements.input.disabled = "disable";
      console.log(e.target.elements);
      return;
    }
    dispatch(authOperations.updateCurrentUser({ totalBalance: balance }));
  };

  const handleChange = (e) => {
    const { value } = e.target;

    const valueInput = parseFloat(value.split(" ").join(""));
    console.log("value input:", valueInput, "type:", typeof valueInput);
    setBalance(valueInput);
  };

  const viewPort = useWindowDimensions();

  return (
    <>
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

          {viewPort.width > 1279 && <BalanceBtn onSubmit={handleSubmit} />}
          {/* <button
          className={styles.form__button}
          type='submit'
          onSubmit={handleSubmit}>
          Підтвердити
        </button> */}
        </div>
      </form>
      {balance === 0 && <ModalBalanceError />}
    </>
  );
};

export { BalanceForm };
