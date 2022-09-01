import React from "react";
import icon from "assets/symbol-icons.svg";
import s from "./ProductList.module.css";

const ProductList = ({ visible, deleteContact }) => {
  return (
    <ul>
      {visible.map(({ id, description, categories, sum }) => {
        return (
          <li key={id} className={s.item}>
            <div className={s.description}>{description}</div>
            <div className={s.categories}>{categories}</div>
            <div className={s.sum}>{sum}</div>

            <button
              className={s.button}
              type="button"
              onClick={() => deleteContact(id)}
            >
              <svg className={s.icon} width="18" height="18">
                <use href={`${icon}#icon-delete`} />
              </svg>
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default ProductList;
