import { Container } from "components/Container";
import { Logo } from "components/Logo";
import styled from "../Header/Header.module.scss";

export const Header = () => {
  return (
    <Container>
      <header className={styled.header}>
        <Logo />
      </header>
    </Container>
  );
};
