import styles from './BalanceForm.module.scss';
export const BalanceBtn = ({ onSubmit }) => {
  return (
    <button className={styles.form__button} type='submit' onSubmit={onSubmit}>
      Підтвердити
    </button>
  );
};
