import { useSelector } from "react-redux";
import { useState } from "react";
import authSelectors from "redux/auth/auth-selector";
import authOperations from "redux/auth/auth-operations";
import { useDispatch } from "react-redux";
import icon from "assets/sprite-icons.svg";
import styled from "./UserMenu.module.scss";
import { ModalLogout } from "components/ModalLogout";
import { motion } from "framer-motion";

export const UserMenu = () => {
  const [modalState, setModalState] = useState(false);
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  const userName = useSelector(authSelectors.getUsername);

  const dispatch = useDispatch();

  return (
    <>
      {isLoggedIn && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className={styled.user}
        >
          <div className={styled.userMeta}>
            <span className={styled.userAvatar}>{userName.slice(0, 1)}</span>
            <p className={styled.userName}>{userName.split("@")[0]}</p>
          </div>
          <button
            className={styled.userLogout}
            type="button"
            onClick={() => setModalState(!modalState)}
          >
            <span className={styled.userBtnText}>Вийти</span>
            <svg className={styled.iconLogout} width={17} height={18}>
              <use href={`${icon}#icon-logout`} />
            </svg>
          </button>
          {modalState && (
            <ModalLogout
              onClose={() => setModalState(!modalState)}
              handleClickLeft={() => dispatch(authOperations.logOut())}
              handleClickRight={() => setModalState(!modalState)}
            />
          )}
        </motion.div>
      )}
    </>
  );
};
