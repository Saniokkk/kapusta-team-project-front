import React, { useState } from "react";

import s from "./CurrentMonth.module.css";

import months from "../../data/month.json";
import spriteIcons from "../../assets/symbol-icons.svg";

const CurrentMonth = () => {
  let date = new Date();
  let selectedMonth = date.getMonth() + 1;
  let selectedYear = date.getFullYear();
  const [currentMonth, setMonth] = useState(selectedMonth);
  const [currentYear, setYear] = useState(selectedYear);
  const onHandleClickRight = () => {
    if (currentMonth < 12) {
      setMonth((prev) => (prev += 1));
    } else {
      setMonth(1);
      setYear((prev) => (prev += 1));
    }
  };
  const onHandleClickLeft = () => {
    if (currentMonth <= 1) {
      setMonth(12);
      setYear((prev) => (prev -= 1));
    } else {
      setMonth((prev) => (prev -= 1));
    }
  };

  const monthToString = String(currentMonth);
  const selectMonth = months.filter((el) => el.id === monthToString);
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
          >{`${selectMonth[0].name} ${currentYear}`}</span>
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
