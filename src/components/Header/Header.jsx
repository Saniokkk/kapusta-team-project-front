import authSelectors from "redux/auth/auth-selector";
import { useSelector } from "react-redux";
import { Container } from "components/Container";
import { Logo } from "components/Logo";
import { UserMenu } from "components/UserMenu";
import styled from "../Header/Header.module.scss";

export const Header = () => {
  const user = useSelector(authSelectors.getIsLoggedIn);

  return (
    <Container>
      <header className={styled.header}>
        <Logo />
        {user && <UserMenu />}
      </header>
    </Container>
  );
};
