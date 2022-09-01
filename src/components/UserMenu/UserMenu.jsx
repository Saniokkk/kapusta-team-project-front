import avatar from "assets/image/avatar.png";
import icon from "assets/sprite-icons.svg";
import styled from "./UserMenu.module.scss";

export const UserMenu = () => {
  return (
    <div className={styled.user}>
      <div className={styled.user__meta}>
        <img className={styled.user__avatar} src={avatar} alt="Аватар" />
        <p className={styled.user__name}>Жопіздан</p>
      </div>
      <button className={styled.user__logout} type="button">
        <span className={styled.user__btn_text}>Вийти</span>
        <svg className={styled.icon__logout} width={17} height={18}>
          <use href={`${icon}#icon-logout`} />
        </svg>
      </button>
    </div>
  );
};
