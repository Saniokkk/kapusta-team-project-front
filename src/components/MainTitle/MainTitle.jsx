import { motion } from "framer-motion";
import { ReactComponent as KapustaTitle } from "assets/image/name.svg";
import styled from "./MainTitle.module.scss";

export const MainTitle = () => {
  return (
    <motion.div
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 100, delay: 0.5 }}
      className={styled.containerTitle}
    >
      <h1 className={styled.title}>
        <KapustaTitle className={styled.cabbage} />
      </h1>
      <p className={styled.preTitle}>Smart Finance</p>
    </motion.div>
  );
};
