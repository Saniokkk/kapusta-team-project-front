import spriteIcons from '../../assets/sprite-icons.svg';
import styles from './CardExpenses.module.scss';
    


export const CardExpenses = (props) => {
    const {amount, title} = props

    return (
        <li className={styles.item}>
            <p className={styles.amount}>{amount}</p>
                <svg className={styles.icon}>
                    <use className={styles.svg1} href={`${spriteIcons}#icon-${title}_bg`}></use>
                    <use className={styles.svg2} href={`${spriteIcons}#icon-${title}`}></use>
                </svg>
            <p className={styles.title}>{title}</p>
        </li>
    )
}