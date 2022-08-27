import styles from "./BalanceForm.module.css";

const BalanceForm = () => {
  return (
    <>
      <h3 className={styles.form__title}>Balance:</h3>
      <form className={styles.form}>
        <input
          className={styles.form__input}
          autoComplete="off"
          name="input"
          type="number"
        />
        <button className={styles.form__button} type="submit">
          CONFIRM
        </button>
      </form>
    </>
  );
};

export { BalanceForm };
