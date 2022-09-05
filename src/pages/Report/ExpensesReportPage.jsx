import BackgroundBottom from 'components/BackgroundBottom/BackgroundBottom';
import { BalanceReportSection } from 'components/BalanceReportSection';
import ButtonToHome from 'components/ButtonToHome';
import { ListExpenses } from 'components/ListExpenses/ListExpenses';
import { Summary } from 'components/Summary';

const ExpensesReportPage = () => {
  return (
    <BackgroundBottom>
      <div></div>
      <ButtonToHome />
      <BalanceReportSection />
      <Summary />
      <ListExpenses />
    </BackgroundBottom>
  );
};

export default ExpensesReportPage;
