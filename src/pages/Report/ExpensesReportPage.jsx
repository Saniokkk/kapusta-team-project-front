import BackgroundBottom from 'components/BackgroundBottom/BackgroundBottom';
import { BalanceForm } from 'components/BalanceForm';
// import { BalanceReportSection } from 'components/BalanceReportSection';
import ButtonToHome from 'components/ButtonToHome';
import CurrentMonth from 'components/CurrentMonth/CurrentMonth';
import { ListExpenses } from 'components/ListExpenses/ListExpenses';
import styles from './ReportPage.module.css';

const ExpensesReportPage = () => {
  return (
    <BackgroundBottom>
      <div className={styles.reportWrapper}>
        <ButtonToHome />
        {/* <BalanceReportSection /> */}
        <BalanceForm />
        <CurrentMonth />
      </div>
      <ListExpenses />
    </BackgroundBottom>
  );
};

export default ExpensesReportPage;
