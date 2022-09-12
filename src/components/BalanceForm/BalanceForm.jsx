import NumberFormat from "react-number-format";
import selectors from "redux/auth/auth-selector";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {toast} from "react-toastify"
import authOperations from "redux/auth/auth-operations";
import { ModalBalanceError } from "components/ModalBalanceError";
import { useState, useEffect } from "react";
import { BalanceBtn } from "./BalanceButton";

import useWindowDimensions from "hooks/useWindowDimensions";

import styles from "./BalanceForm.module.scss";

const BalanceForm = () => {
  const dispatch = useDispatch();
  const totalBalance = useSelector(selectors.getUserBalance);
  const [balance, setBalance] = useState(0);
  const [amount, setAmount] = useState("");
  const [disable, setDisable] = useState(false);

  useEffect(() => {
    if (totalBalance !== null) {
      setAmount(totalBalance);
      setBalance(totalBalance);
    }
    if (balance) {
      setDisable(!disable);
    }
  }, [balance, disable, totalBalance]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setBalance(amount);
    if(amount < 0){
      toast.warn("Баланс не може бути від'ємним")
      return
    }
    dispatch(authOperations.updateCurrentUser({ totalBalance: amount }));
  };

  const handleChange = (e) => {
    const { value } = e.target;
    const valueInput = parseFloat(value.split(" ").join(""));
    setAmount(valueInput);
  };

  const viewPort = useWindowDimensions();

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.formTitleBox}>
        <h3 className={styles.formTitle}>Баланс:</h3>
      </div>

      <div className={styles.formInputBox}>
        <NumberFormat
          className={styles.formInput}
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
          disabled={balance ? "disabled" : ""}
          placeholder={"00.00 UAH"}
        />
        {balance === 0 && <ModalBalanceError />}

        {viewPort.width > 1279 && (
          <BalanceBtn onSubmit={handleSubmit} balance={balance} />
        )}
      </div>
    </form>
  );
};

export { BalanceForm };
