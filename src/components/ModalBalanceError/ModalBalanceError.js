import styles from "./ModalBalanceError.module.css";
import { Triangle } from "./Triangle";

const ModalBalanceError = ({ text1, text2 }) => {
  return (
    <>
      <div className={styles.triangle__box}>
        <Triangle />
        <div className={styles.modal}>
          <p className={styles.text}>{text1}</p>
          <p className={styles.text__modal}>{text2}</p>
        </div>
      </div>
    </>
  );
};

export { ModalBalanceError };
