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
  const [amount, setAmount] = useState(0);
  const [disable, setDisable] = useState(false);
  const dispatch = useDispatch();
  const totalBalance = useSelector(selectors.getUserBalance);
  // const disabledButton = useRef(false)
  useEffect(() => {
    if (totalBalance) {
      setAmount(totalBalance);
      setBalance(totalBalance);
    }
    if (balance) {
      setDisable(true);
    }
  }, [balance, totalBalance]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log();
    setBalance(amount);
    dispatch(authOperations.updateCurrentUser({ totalBalance: amount }));
  };

  const handleChange = (e) => {
    const { value } = e.target;

    const valueInput = parseFloat(value.split(" ").join(""));
    console.log("value input:", valueInput, "type:", typeof valueInput);
    setAmount(valueInput);
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
            value={amount}
            onChange={handleChange}
            allowLeadingZeros={true}
            isNumericString={true}
            fixedDecimalScale={true}
            decimalScale={2}
            disabled={disable}
          />
          <div className={styles.modal}>
            {balance === 0 && <ModalBalanceError />}
          </div>

          {viewPort.width > 1279 && (
            <BalanceBtn onSubmit={handleSubmit} balance={balance} />
          )}
        </div>
      </form>
    </>
  );
};

export { BalanceForm };
