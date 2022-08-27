import { Container } from "../../Container/Container";
import logo from "../../../image/logo.svg";
import styled from "../Header/Header.module.scss";
export const Header = () => {
  return (
    <Container>
      <header className={styled.header}>
        <img src={logo} alt="Logo" />
      </header>
    </Container>
  );
};
