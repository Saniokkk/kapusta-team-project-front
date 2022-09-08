import styles from "./ModalBalanceError.module.css";
import { Triangle } from "./Triangle";
import { createPortal } from "react-dom";
const ModalBalanceError = ({ text1, text2 }) => {
  return createPortal(
    <>
      <div className={styles.triangle__box}>
        <Triangle />
        <div className={styles.modal}>
          <p className={styles.text}>
            Привіт! Для початку роботы внесіть поточний баланс вашого рахунку!
          </p>
          <p className={styles.text__modal}>
            Ты не можешь витрачати гроші поки їх у тебя немає :)
          </p>
        </div>
      </div>
    </>,
    document.getElementById("modal-balance-root")
  );
};

export { ModalBalanceError };
