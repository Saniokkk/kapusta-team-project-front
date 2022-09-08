import spriteIcons from '../../assets/sprite-icons.svg';
import styles from './CardExpenses.module.scss';

// { title: 'Продукти', pathIcon: 'products', sum: 5000.0 },
export const CardExpenses = ({ pathIcon, title, sum }) => {
  return (
    <li className={styles.item}>
      <p className={styles.amount}>{sum}</p>
      <svg className={styles.icon}>
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
