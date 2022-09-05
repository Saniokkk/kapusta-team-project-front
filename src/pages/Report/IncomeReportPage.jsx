import BackgroundBottom from 'components/BackgroundBottom/BackgroundBottom';
import { BalanceReportSection } from 'components/BalanceReportSection';
import ButtonToHome from 'components/ButtonToHome';
import IncomeList from 'components/Income/IncomeList';
import styles from './ReportPage.module.css';

const IncomeReportPage = () => {
  return (
    <BackgroundBottom>
      <div className={styles.reportWrapper}></div>
      <ButtonToHome />
      <BalanceReportSection />
      <IncomeList />
    </BackgroundBottom>
  );
};

export default IncomeReportPage;
