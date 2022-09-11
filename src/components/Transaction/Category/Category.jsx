import { useSelector, useDispatch } from "react-redux";
import {
  getCurrentType,
  getCurrentCategory,
} from "redux/extraInfo/extraInfo-selectors";
import { addCurrentCategory } from "redux/extraInfo/extraInfo-slice";
import { useState } from "react";
import { categoriesExpense, categoriesIncome } from "./categories";
import icon from "assets/symbol-icons.svg";
import s from "./Category.module.scss";

const Category = () => {
  const [menu, setМenu] = useState(false);

  const dispatch = useDispatch();
  const transactionType = useSelector(getCurrentType);
  const currentCategory = useSelector(getCurrentCategory);

  const categoryType =
    transactionType === "expense" ? categoriesExpense : categoriesIncome;
  const dropDownClass = menu ? `${s.buttonActive}` : `${s.buttonCommon}`;
  const borderClass = menu ? `${s.borderTopActive}` : `${s.borderTop}`;

  const handleChange = (evt) => {
    const {
      dataset: { action },
    } = evt.target;
    dispatch(addCurrentCategory(action));
    setМenu(false);
  };

  return (
    <div className={s.wrapper}>
      <div
        className={menu ? s.backdrop : ""}
        onClick={() => setМenu(false)}
      ></div>

      <div className={s.dropDownWrapper}>
        <button
          className={`${s.dropDown} ${dropDownClass}`}
          type="button"
          onClick={() => (!menu ? setМenu(true) : setМenu(false))}
        >
          {currentCategory}

          <svg className={menu ? s.iconDown : ""} width="14" height="7">
            <use href={`${icon}#icon-categories`} />
          </svg>
        </button>
        <span className={borderClass}></span>
      </div>

      {menu && (
        <ul className={s.dropdownContent}>
          {categoryType.map(({ title }, index) => {
            return (
              <li key={index} data-action={title} onClick={handleChange}>
                {title}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default Category;
