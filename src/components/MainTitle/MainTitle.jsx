import logo from "assets/image/name.svg";
import styled from "./MainTitle.module.scss";
import { motion } from "framer-motion";

export const MainTitle = () => {
  return (
    <motion.div
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 100, delay: 0.5 }}
      className={styled.container__title}
    >
      <h1 className={styled.title}>
        <img className={styled.cabbage} src={logo} alt="cabbage" />
      </h1>
      <p className={styled.pre__title}>Smart Finance</p>
    </motion.div>
  );
};
