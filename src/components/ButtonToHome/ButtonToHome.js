import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addDate } from "redux/extraInfo/extraInfo-slice";

import s from "./ButtonToHome.module.css";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import spriteIcons from "../../assets/symbol-icons.svg";

const ButtonToHome = () => {
  const viewPort = useWindowDimensions();
  const dispatch = useDispatch();

  const updateDate = () => {
    const date = new Date();
    const year = String(date.getFullYear());
    const month = String(date.getMonth() + 1);
    const day = String(date.getDate());
    dispatch(addDate({ month, day, year }));
  };

  return (
    <div type="button" className={s.toGoHome} onClick={updateDate}>
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
