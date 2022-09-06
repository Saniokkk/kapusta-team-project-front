import icon from "assets/sprite-icons.svg";
import styled from "./GoogleAuth.module.scss";
import { motion } from "framer-motion";

export const GoogleAuth = () => {
  return (
    <div className={styled.google__auth}>
      <a href="https://kapustaapplication.herokuapp.com/api/auth/google">
        <p className={styled.google__auth_title}>
          Ви можете авторизуватись за допомогою Google Account:
        </p>
        <motion.button
          className={styled.google__auth_btn}
          type="button"
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <svg className={styled.google__auth_btn_icon} width={17} height={18}>
            <use href={`${icon}#icon-google`} />
          </svg>
          Google
        </motion.button>
      </a>
    </div>
  );
};
