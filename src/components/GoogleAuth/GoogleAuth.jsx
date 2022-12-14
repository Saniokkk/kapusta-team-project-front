import { useDispatch } from "react-redux";
import authOperations from "redux/auth/auth-operations";

import icon from "assets/sprite-icons.svg";
import styled from "./GoogleAuth.module.scss";
import { motion } from "framer-motion";

export const GoogleAuth = () => {
  const dispatch = useDispatch();
  return (
    <div className={styled.googleAuth}>
      <p className={styled.googleAuthTitle}>
        Ви можете авторизуватись за допомогою Google Account:
      </p>
      <motion.a
        href="https://kapusta42back-end.herokuapp.com/api/auth/google"
        onClick={() => dispatch(authOperations.logInGoogle())}
        className={styled.googleAuthBtn}
        type="button"
        whileHover={{ scale: 1.1 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
      >
        <svg className={styled.googleAuthBtnIcon} width={17} height={18}>
          <use href={`${icon}#icon-google`} />
        </svg>
        Google
      </motion.a>
    </div>
  );
};
