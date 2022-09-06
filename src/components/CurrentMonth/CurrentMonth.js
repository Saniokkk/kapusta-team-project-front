import { useDispatch, useSelector } from "react-redux";
import {
  goBackOneMonth,
  goForwardOneMonth,
} from "redux/extraInfo/extraInfo-slice";

import { calendarSelectors } from "redux/extraInfo";

import s from "./CurrentMonth.module.css";

import months from "data/month.json";
import spriteIcons from "../../assets/symbol-icons.svg";

const CurrentMonth = () => {
  const dispatch = useDispatch();

  const month = useSelector(calendarSelectors.getMonth);
  const year = useSelector(calendarSelectors.getYear);

  const correctMonth = months.find((el) => Number(el.id) === Number(month));

  const onHandleClickLeft = () => {
    dispatch(goBackOneMonth());
  };

  const onHandleClickRight = () => {
    dispatch(goForwardOneMonth());
  };
  return (
    <div className={s.reportMonth}>
      <p className={s.title}>Поточний період:</p>
      <div className={s.transactionWrapper}>
        <button className={s.btnToLeft} onClick={onHandleClickLeft}>
          <svg className={s.icon}>
            <use className={s.svg} href={`${spriteIcons}#icon-arrowLeft`}></use>
          </svg>
        </button>

        {
          <span
            className={s.reportMonthTitle}
          >{`${correctMonth.name} ${year}`}</span>
        }
        <button className={s.btnToRight} onClick={onHandleClickRight}>
          <svg className={s.icon}>
            <use
              className={s.svg}
              href={`${spriteIcons}#icon-arrowRight`}
            ></use>
          </svg>
        </button>
      </div>
    </div>
  );
};
export default CurrentMonth;
