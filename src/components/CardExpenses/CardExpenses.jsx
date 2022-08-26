import icons from '../../assets/symbol-icons.svg';
import styles from './CardExpenses.module.css';
    


export const CardExpenses = (props) => {
    const {amount, title} = props

    return (
        <li className={styles.item}>
            <p className={styles.amount}>{amount}</p>
            <svg className={styles.icon}>
                <use className={styles.icon} href={`${icons}#icon-${title}`}></use>
            </svg>
            <h3 className={styles.title}>{title}</h3>
        </li>
    )
}