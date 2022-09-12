import styles from "./BalanceForm.module.scss";

const BalanceBtn = ({ onSubmit, balance }) => {
  return (
    <button
      className={styles.formButton}
      type="submit"
      onSubmit={onSubmit}
      name="button"
      disabled={balance ? "disabled" : ""}
    >
      Підтвердити
    </button>
  );
};

export { BalanceBtn };
