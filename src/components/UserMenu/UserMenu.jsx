import { useSelector } from "react-redux";
import { useState } from "react";
import authSelectors from "redux/auth/auth-selector";
import avatar from "assets/image/avatar.png";
import authOperations from "redux/auth/auth-operations";
import { useDispatch } from "react-redux";
import icon from "assets/sprite-icons.svg";
import styled from "./UserMenu.module.scss";
import { ModalLogout } from "components/ModalLogout";

export const UserMenu = () => {
  const [modalState, setModalState] = useState(false);

  const userName = useSelector(authSelectors.getUsername);

  const dispatch = useDispatch();

  return (
    <div className={styled.user}>
      <div className={styled.user__meta}>
        <img className={styled.user__avatar} src={avatar} alt="Аватар" />
        <p className={styled.user__name}>{userName.split("@")[0]}</p>
      </div>
      <button
        className={styled.user__logout}
        type="button"
        onClick={() => setModalState(!modalState)}
      >
        <span className={styled.user__btn_text}>Вийти</span>
        <svg className={styled.icon__logout} width={17} height={18}>
          <use href={`${icon}#icon-logout`} />
        </svg>
      </button>
      {modalState && (
        <ModalLogout
          onClose={() => setModalState(!modalState)}
          handleClickLeft={() => dispatch(authOperations.logOut())}
        />
      )}
    </div>
  );
};
