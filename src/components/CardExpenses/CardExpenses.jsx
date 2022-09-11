// import { useState } from 'react';
import spriteIcons from '../../assets/sprite-icons.svg';
import styles from './CardExpenses.module.scss';

// { title: 'Продукти', pathIcon: 'products', sum: 5000.0 },

const categoryItems = [
  {
    category: 'products',
    sum: 200,
    description: 'овочі',
  },
  {
    category: 'products',
    sum: 500,
    description: 'фрукти',
  },
];
export const CardExpenses = ({ pathIcon, title, sum }) => {
  // const [chartTitle, setChartTitle] = useState([]);
  // const [chartSum, setChartSum] = useState([]);

  const onBtnClick = (path) => {
    const res = categoryItems.filter((item) => path === item.category);
    console.log('res', res);
  };

  // console.log('path', path);

  // const getCategoryItems = () => {
  //   categoryItems.map((item) => {
  //     if (pathIcon === item.category) {
  //       setChartTitle(item.description);
  //       setChartSum(item.sum);
  //     }
  //   });
  // };

  // useEffect(() => {

  //   getCategoryItems();
  // }, []);

  // console.log('chartTitle', chartTitle);
  // console.log('chartSum', chartSum);

  return (
    <li className={styles.item}>
      <p className={styles.amount}>{sum}.00</p>

      <svg
        className={styles.icon}
        onClick={(e) => {
          onBtnClick(pathIcon);
          console.log('pathIcon', pathIcon);
          console.log('svg', e.currentTarget);
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
