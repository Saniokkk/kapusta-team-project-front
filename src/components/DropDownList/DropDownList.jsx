import { useState, useContext } from "react";

import s from "./DropDownList.module.css";
import { optionsIncome } from "data/categoryIncom.json";
import { optionsExpense } from "data/categoryExpense.json";
import contextProps from "context/context";

function DropDownList({ category, setCategory }) {
    const [isActive, setIsActive] = useState(false);

    const { type } = useContext(contextProps);
    const options = type === "expense" ? optionsIncome : optionsExpense;

    return (
        <div className={s.dropdownlist}>
            <div
                tabIndex="0"
                className={s.dropdownlistbtn}
                onClick={e => setIsActive(!isActive)}>
                {!category && type === "expense"
                    ? "Категорія товару"
                    : !category && type === "income"
                        ? "Категорія доходів"
                        : category}

            </div>
            {isActive && (
                <div className={s.dropdownlistcontent}>
                    {options.map((option, idx) => (
                        <div
                            key={idx}
                            onClick={e => {
                                setCategory(option);
                                setIsActive(false);
                            }}
                            className={s.dropdownlistitem}>
                            {option}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
export { DropDownList };