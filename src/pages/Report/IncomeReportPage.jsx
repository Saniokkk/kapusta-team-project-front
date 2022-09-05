import BackgroundBottom from 'components/BackgroundBottom/BackgroundBottom';
import { BalanceForm } from 'components/BalanceForm';

import ButtonToHome from 'components/ButtonToHome';
import CurrentMonth from 'components/CurrentMonth/CurrentMonth';
import IncomeList from 'components/Income/IncomeList';
import styles from './ReportPage.module.css';

const IncomeReportPage = () => {
  return (
    <BackgroundBottom>
      <div className={styles.reportWrapper}>
        <ButtonToHome />
        <div className={styles.reportFlexbox}>
          <BalanceForm />
          <CurrentMonth />
        </div>
      </div>
      <IncomeList />
    </BackgroundBottom>
  );
};

export default IncomeReportPage;
