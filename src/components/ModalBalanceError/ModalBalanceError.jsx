import { Triangle } from "./Triangle";
import { motion } from "framer-motion";
import styles from "./ModalBalanceError.module.scss";

const ModalBalanceError = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className={styles.triangleBox}
    >
      <Triangle />
      <div className={styles.modal}>
        <p className={styles.text}>
          Привіт! Для початку роботы внесіть поточний баланс вашого рахунку!
        </p>
        <p className={styles.textModal}>
          Ты не можешь витрачати гроші поки їх у тебя немає :)
        </p>
      </div>
    </motion.div>
  );
};

export { ModalBalanceError };
