import { NavLink } from "react-router-dom";

import s from "./ButtonToHome.module.css";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import spriteIcons from "../../assets/symbol-icons.svg";

const ButtonToHome = () => {
  const viewPort = useWindowDimensions();

  return (
    <div type="button" className={s.toGoHome}>
      <NavLink className={s.link} to="/">
        <svg className={s.icon}>
          <use href={`${spriteIcons}#icon-arrowToBack`}></use>
        </svg>
        <p className={s.arrow}>
          {viewPort.width > 767 && "Повернутись на головну"}
        </p>
      </NavLink>
    </div>
  );
};

export default ButtonToHome;
