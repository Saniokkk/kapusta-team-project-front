import icon from "assets/symbol-icons.svg";
import styled from "./GoogleAuth.module.scss";

export const GoogleAuth = () => {
  return (
    <div className={styled.google__auth}>
      <p className={styled.google__auth_title}>
        Вы можете авторизоваться с помощью Google Account:
      </p>
      <button className={styled.google__auth_btn} type="button">
        <svg className={styled.google__auth_btn_icon} width={17} height={18}>
          <use href={`${icon}#icon-google`} />
        </svg>
        Google
      </button>
    </div>
  );
};
