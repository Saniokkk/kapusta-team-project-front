import styles from './BalanceForm.module.scss';
 const BalanceBtn = ({ onSubmit}) => {
  return (
    <button className={styles.form__button} type="submit" onSubmit={onSubmit} name="button">
      Підтвердити
    </button>
  );
};

export {BalanceBtn}