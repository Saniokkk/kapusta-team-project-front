import { GoogleAuth } from "components/GoogleAuth";
import { FormAuth } from "components/FormAuth/FormAuth";
import styled from "./FormWrapper.module.scss";
import { motion } from "framer-motion";

export const FormWrapper = () => {
  return (
    <motion.div
      className={styled.auth}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.8,
        delay: 0.5,
        ease: [0, 0.71, 0.2, 1.01],
      }}
    >
      <GoogleAuth />
      <FormAuth />
    </motion.div>
  );
};
