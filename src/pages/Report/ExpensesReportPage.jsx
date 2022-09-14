import BackgroundBottom from 'components/BackgroundBottom/BackgroundBottom';
import { BalanceForm } from 'components/BalanceForm';
// import Chart from 'components/BarChart/BarChart';
import ButtonToHome from 'components/ButtonToHome';
import CurrentMonth from 'components/CurrentMonth/CurrentMonth';

import styles from './ReportPage.module.css';

import { Dashboard } from 'components/Dashboard/Dashboard';
// import { useLocation } from 'react-router-dom';

const ExpensesReportPage = () => {
  return (
    <>
      <BackgroundBottom>
        <div className={styles.reportWrapper}>
          <ButtonToHome />
          <div className={styles.reportFlexbox}>
            <BalanceForm />
            <CurrentMonth />
          </div>
        </div>
        <Dashboard />
      </BackgroundBottom>
    </>
  );
};

export default ExpensesReportPage;
