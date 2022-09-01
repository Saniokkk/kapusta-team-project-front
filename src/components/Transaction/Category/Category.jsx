import { useState } from "react";
import s from "./Category.module.css";
import icon from "assets/symbol-icons.svg";

const items = [
  { id: 1, title: "Продукти" },
  { id: 2, title: "Алкоголь" },
  { id: 3, title: "Розваги" },
  { id: 4, title: "Здоров'я" },
  { id: 5, title: "Транспорт" },
  { id: 6, title: "Дім" },
  { id: 7, title: "Інструменти" },
  { id: 8, title: "Рахунки" },
  { id: 9, title: "Хобі" },
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

  return (
    <div className={s.dropdown}>
      <div className={s.dropbtn}>
        <button
          className={s.button}
          type="button"
          onClick={() => (!menu ? setМenu(true) : setМenu(false))}
        >
          {value}

          <svg className={menu ? s.iconDown : ""} width="10" height="4">
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
