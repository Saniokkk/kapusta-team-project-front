import { useState, useContext } from 'react';

import s from './DropDownList.module.css';
import contextProps from 'context/context';

import { optionsIncome } from 'data/categoryIncom.json';
import { optionsExpense } from 'data/categoryExpense.json';

function Dropdown({ category, setCategory }) {
    const [isActive, setIsActive] = useState(false);

    const { type } = useContext(contextProps);
    const options = type === 'expense' ? optionsIncome : optionsExpense;
    return (
        <div className={s.dropdown}>
            <div
                tabIndex="0"
                className={`${s.dropdownBtn}`}
                onClick={e => setIsActive(!isActive)}
            >
                {!category && type === 'expense'
                    ? 'Категория товара'
                    : !category && type === 'income'
                        ? 'Категория дохода'
                        : category}

            </div>
            {isActive && (
                <div className={s.dropdownContent}>
                    {options.map((option, idx) => (
                        <div
                            key={idx}
                            onClick={e => {
                                setCategory(option);
                                setIsActive(false);
                            }}
                            className={s.dropdownItem}
                        >
                            {option}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default Dropdown;