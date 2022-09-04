import React, { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import s from "./ModalLogout.module.css";
import { gsap, Power1 } from "gsap";

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
        y: -150,
      },
      {
        y: 15,
        ease: Power1.easeInOut,
      }
    );
  }, []);

  return createPortal(
    <div className={s.backdrop} onClick={handleOverlayClick}>
      <div className={s.modal}>
        <span className={s.closeBtn} onClick={onClose}>
          &#10006;
        </span>
        <div className={s.title}>
          <p>{modalTitle}</p>
        </div>

        <div className={s.buttons}>
          <div ref={(el) => (buttons = el)}>
            <button className={s.outBtn} onClick={handleClickLeft}>
              {modalButtonLeft}
            </button>
            <button className={s.outBtn} onClick={handleClickRight}>
              {modalButtonRight}
            </button>
          </div>
        </div>
      </div>
    </div>,
    document.getElementById("modal-root")
  );
};

export { ModalLogout };
