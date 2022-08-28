import styles from "./BalanceForm.module.scss";

const BalanceForm = () => {
  return (
    <form className={styles.form}>
      <div className={styles.form_title__box}>
        <h3 className={styles.form__title}>Баланс:</h3>
      </div>

      <div className={styles.form_input__box}>
        <input className={styles.form__input} autoComplete="off" name="input" />
        <button className={styles.form__button} type="submit">
          Підтвердити
        </button>
      </div>
    </form>
  );
};

export { BalanceForm };
