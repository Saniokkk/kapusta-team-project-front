import { Container } from "components/Container";
import styles from "./Balance.module.scss";
import { BalanceForm } from "components/BalanceForm";
// import { ModalBalanceError } from "components/ModalBalanceError";
import { Report } from "components/Report";
import { Section } from "components/Section";

const BalanceReportSection = () => {
  return (
    <Container>
      <Section className={styles.balance}>
        <Report />
        <BalanceForm />
      </Section>
    </Container>
  );
};

export { BalanceReportSection };
