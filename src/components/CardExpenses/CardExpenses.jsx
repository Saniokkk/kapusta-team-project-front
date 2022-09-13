// import { useState } from 'react';
// import { useSelector } from 'react-redux';
// import { getMonth, getYear } from 'redux/extraInfo/extraInfo-selectors';
// import { getTransactionsByCategory } from 'services/reportsApi';
import spriteIcons from '../../assets/sprite-icons.svg';
import styles from './CardExpenses.module.scss';

export const CardExpenses = ({ pathIcon, title, sum, onClick }) => {
  return (
    // <Link to={}></Link>
    <li className={styles.item}>
      <p className={styles.amount}>{sum}.00</p>

      <svg
        className={styles.icon}
        onClick={() => {
          onClick(pathIcon);
        }}
      >
        <use
          className={styles.svg1}
          href={`${spriteIcons}#icon-${pathIcon}_bg`}
        ></use>
        <use
          className={styles.svg2}
          href={`${spriteIcons}#icon-${pathIcon}`}
        ></use>
      </svg>

      <p className={styles.title}>{title}</p>
    </li>
  );
};

// const items = [
//   {
//     title: 'Продукти',
//     pathIcon: 'products',
//     sum: 5000.0,
//     category: 'products',
//     description: 'banana',
//   },
// ];
// {
//   "id": "630c6424c4126b2f6d97fa7f",
//   "date": "2022-01-01T00:00:00.000Z",
//   "owner": "_id: 630a4ce122d8de88190363c9",
//   "description": "banana",
//   "category": "products",
//   "sum": 100,
//   "createdAt": "2022-08-29T07:00:52.786Z",
//   "updatedAt": "2022-08-29T07:00:52.786Z"
// }

// {
//   "id": "630c6424c4126b2f6d97fa7f",
//   "date": "2022-01-01T00:00:00.000Z",
//   "owner": "_id: 630a4ce122d8de88190363c9",
//   "description": "premium",
//   "category": "Доп.дохід",
//   "sum": 6500,
//   "createdAt": "2022-08-29T07:00:52.786Z",
//   "updatedAt": "2022-08-29T07:00:52.786Z"
// }
