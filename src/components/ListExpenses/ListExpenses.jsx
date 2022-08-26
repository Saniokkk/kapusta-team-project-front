import { CardExpenses } from "../CardExpenses";
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
        <ul className={styles.list}>
            {items.map((item, index) => <CardExpenses key={index} {...item} />
            )}
        </ul>
    )
}