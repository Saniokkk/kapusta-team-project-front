import styles from "./BalanceForm.module.scss";
import { BalanceButton } from "components/BalanceButton";
import icon from "../../assets/symbol-icons.svg";
// import { useState } from 'react';
// import {converter} from "./converter"

const BalanceForm = () => {
  // const [amount,setAmount] = useState("")
  // const [formatted,setFormatted] = useState()

  // const  handleSubmit = (e) => {
  //   e.preventDefault()
  //   const value = converter(Number(amount), "UAH","fr")
  //   setAmount(value)
  //   }

  //   const  handleChange = (e) => {
  //     console.log(e.target.value)

  //   setAmount(e.target.value)

  //   }

  return (
    <form className={styles.form}>
      <div className={styles.form_title__box}>
        <h3 className={styles.form__title}>Баланс:</h3>
      </div>

      <div className={styles.form_input__box}>
        <input className={styles.form__input} autoComplete="off" name="input" />
        <BalanceButton className={styles.form__button}>
          <svg className={styles.form__icon}>
            <use href={`${icon}#icon-calculator`} />
          </svg>
        </BalanceButton>
      </div>
    </form>
  );
};

export { BalanceForm };
