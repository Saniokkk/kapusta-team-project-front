import { Container } from "components/Container";
import styles from "./Balance.module.css";
import { BalanceForm } from "components/BalanceForm";
import { ModalBalanceError } from "components/ModalBalanceError";
import { Report } from "components/Report";
import { Section } from "components/Section";

const BalanceReportSection = () => {
  return (
    <Container>
      <Section className={styles.balance}>
        <Report />
        <BalanceForm />
        <ModalBalanceError
          text1="Привіт! Для початку роботи внеси поточний баланс свого рахунку!"
          text2="Ти не можеш витрачати гроші поки їх в тебе немає :)"
        />
      </Section>
    </Container>
  );
};

export { BalanceReportSection };
