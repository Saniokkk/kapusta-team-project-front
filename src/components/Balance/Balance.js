import { Container } from "components/Container";
import styles from "./Balance.module.css";
import { BalanceForm } from "components/BalanceForm";
import { ModalBalanceError } from "components/ModalBalanceError";
import { Report } from "components/Report";

const Balance = () => {
  return (
    <Container>
      <section className={styles.balance}>
        <Report />
        <BalanceForm />
        <ModalBalanceError
          text1="Hello! To get started, enter the current balance of your account!"
          text2="You can't spend money until you have it :)"
        />
      </section>
    </Container>
  );
};

export default Balance;
