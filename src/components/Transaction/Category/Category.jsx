import { useState } from "react";
import s from "./Category.module.css";
import icon from "assets/symbol-icons.svg";

const items = [
  { id: 1, title: "Транспорт" },
  { id: 2, title: "Продукти" },
  { id: 3, title: "Здоров'я" },
  { id: 4, title: "Алкоголь" },
  { id: 5, title: "Розваги" },
  { id: 6, title: "Дім" },
  { id: 7, title: "Техніка" },
  { id: 8, title: "Комуналка" },
  { id: 9, title: "Спорт, хобі" },
  { id: 10, title: "Освіта" },
  { id: 11, title: "Інше" },
];

const Category = ({ onSubmit, value }) => {
  const [menu, setМenu] = useState(false);

  const handleChange = (evt) => {
    const {
      dataset: { action },
    } = evt.target;
    onSubmit(action);
    setМenu(false);
  };

  const isActiveClass = menu ? `${s.buttonActive}` : `${s.buttonCommon}`;

  return (
    <div className={s.dropdown}>
      <div
        className={menu ? s.backdrop : ""}
        onClick={() => setМenu(false)}
      ></div>

      <div className={s.dropbtn}>
        <button
          className={`${s.button} ${isActiveClass}`}
          type="button"
          onClick={() => (!menu ? setМenu(true) : setМenu(false))}
        >
          {value}

          <svg className={menu ? s.iconDown : ""} width="14" height="7">
            <use href={`${icon}#icon-categories`} />
          </svg>
        </button>
      </div>

      {menu && (
        <ul className={s.dropdown__content}>
          {items.map(({ title }, index) => {
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
