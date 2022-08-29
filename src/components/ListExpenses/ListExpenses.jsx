import { CardExpenses } from "../CardExpenses";
import spriteIcons from '../../assets/symbol-icons.svg';
import styles from './ListExpenses.module.css';

export const ListExpenses = () => {
    const items = [
        { title: 'products', amount: 5000.00 },
        { title: 'alcohol', amount: 200.00 },
        { title: 'entertainment', amount: 500.00 },
        { title: 'health', amount: 1000.00 },
        { title: 'transport', amount: 3000.00 },
        { title: 'housing', amount: 1500.00 },
        { title: 'tools', amount: 450.00 },
        { title: 'invoice', amount: 6000.00 },
        { title: 'hobby', amount: 5000.00 },
        { title: 'education', amount: 5000.00 },
        { title: 'other', amount: 4350.00 },
    ]
    return (
        <div className={styles.expenses}>
            <div className={styles.switching}>
                <button className={styles.btnToLeft}>
                    <svg className={styles.icon}>
                        <use className={styles.svg} href={`${spriteIcons}#icon-arrowLeft`}></use>
                    </svg>
                </button>
                <h2 className={styles.title}>EXPENSES</h2>
                <button className={styles.btnToRight}>
                    <svg className={styles.icon}>
                        <use className={styles.svg} href={`${spriteIcons}#icon-arrowRight`}></use>
                    </svg>
                </button>
            </div>
            <ul className={styles.list}>
                {items.map((item, index) => <CardExpenses key={index} {...item} />
            )}
            </ul>
        </div>
    )
}