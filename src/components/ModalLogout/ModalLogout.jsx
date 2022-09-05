import React, { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import s from "./ModalLogout.module.scss";
import icon from "assets/sprite-icons.svg";
import { gsap, Power1 } from "gsap";
import { motion } from "framer-motion";

const ModalLogout = ({
  handleClickLeft,
  handleClickRight,
  onClose,
  modalTitle = "Ви дійсно бажаєте вийти?",
  modalButtonLeft = "Так",
  modalButtonRight = "Ні",
}) => {
  useEffect(() => {
    window.document.body.style.overflowY = "hidden";
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.document.body.style.overflowY = "visible";
    };
  });

  const handleKeyDown = (e) => {
    if (e.code === "Escape") {
      onClose();
    }
  };

  const handleOverlayClick = (e) => {
    if (e.currentTarget === e.target) {
      onClose();
    }
  };

  let buttons = useRef(null);
  useEffect(() => {
    gsap.fromTo(
      buttons,
      0.7,
      {
        y: 0,
      },
      {
        y: 15,
        ease: Power1.easeInOut,
      }
    );
  }, []);

  return createPortal(
    <div className={s.backdrop} onClick={handleOverlayClick}>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.6 }}
        className={s.modal}
      >
        <svg className={s.closeBtn} onClick={onClose} width={17} height={18}>
          <use href={`${icon}#icon-close`} />
        </svg>
        <div className={s.title}>
          <p>{modalTitle}</p>
        </div>

        <div className={s.buttons}>
          <div className={s.divbtn} ref={(el) => (buttons = el)}>
            <motion.button
              className={s.outBtnn}
              onClick={handleClickLeft}
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              {modalButtonLeft}
            </motion.button>
            <motion.button
              className={s.outBtn}
              onClick={handleClickRight}
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              {modalButtonRight}
            </motion.button>
          </div>
        </div>
      </motion.div>
    </div>,
    document.getElementById("modal-root")
  );
};

export { ModalLogout };
