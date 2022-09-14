import spriteIcons from '../../assets/sprite-icons.svg';
import styles from './CardExpenses.module.scss';

export const CardExpenses = ({ pathIcon, title, sum, onClick }) => {
  return (
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
