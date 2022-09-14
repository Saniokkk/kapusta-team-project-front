import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getCurrentType } from 'redux/extraInfo/extraInfo-selectors';
import { addCurrentType } from 'redux/extraInfo/extraInfo-slice';
import spriteIcons from '../../assets/sprite-icons.svg';

import styles from './ReportSummary.module.css';
import { useState } from 'react';

export const ReportTitle = ({ category, items, func }) => {
  const [array, setItems] = useState();
  const transactionOption = useSelector(getCurrentType);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  function onPageSwitch() {
    if (transactionOption === 'expense') {
      dispatch(addCurrentType('income'));
    }

    if (transactionOption === 'income') {
      dispatch(addCurrentType('expense'));
    }
  }

  return (
    <div className={styles.switching}>
      <button
        className={styles.btnToLeft}
        onClick={() => {
          navigate('/report');
          onPageSwitch();
        }}
      >
        <svg className={styles.icon}>
          <use
            className={styles.svg}
            href={`${spriteIcons}#icon-arrowLeft`}
          ></use>
        </svg>
      </button>
      <h2 className={styles.title}>{category}</h2>
      <button
        className={styles.btnToRight}
        onClick={() => {
          navigate('/report');
          onPageSwitch();
        }}
      >
        <svg className={styles.icon}>
          <use
            className={styles.svg}
            href={`${spriteIcons}#icon-arrowRight`}
          ></use>
        </svg>
      </button>
    </div>
  );
};
