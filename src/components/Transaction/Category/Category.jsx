import { useState } from "react";
import s from "./Category.module.css";
import icon from "assets/symbol-icons.svg";

const items = [
  { id: 1, title: "products" },
  { id: 2, title: "alcohol" },
  { id: 3, title: "entertainment" },
  { id: 4, title: "health" },
  { id: 5, title: "transport" },
  { id: 6, title: "housing" },
  { id: 7, title: "tools" },
  { id: 8, title: "invoice" },
  { id: 9, title: "hobby" },
  { id: 10, title: "education" },
  { id: 11, title: "other" },
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

          <svg className={s.icon} width="10" height="4">
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
