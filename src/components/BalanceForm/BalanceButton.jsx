import styles from './BalanceForm.module.scss';
 const BalanceBtn = ({ onSubmit,balance}) => {
  
  return (
    <button className={styles.form__button} type="submit" onSubmit={onSubmit} name="button" disabled={balance}>
      Підтвердити
    </button>
  );
};

export {BalanceBtn}