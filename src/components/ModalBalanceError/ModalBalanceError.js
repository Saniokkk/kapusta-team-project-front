import styles from "./ModalBalanceError.module.css";

const ModalBalanceError = ({ text1, text2 }) => {
  return (
    <div className={styles.modal}>
      <p className={styles.text}>{text1}</p>
      <p className={styles.text__modal}>{text2}</p>
    </div>
  );
};

export { ModalBalanceError };
