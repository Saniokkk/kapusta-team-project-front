import { Outlet } from "react-router-dom";
import { Header } from "./Header/Header";
import { Container } from "components/Container";
import { FormAuth } from "components/FormAuth";
import styled from "./Layout.module.scss";

export const Layout = () => {
  return (
    <>
      <Header />
      <main>
        <div className={styled.header__hero}>
          <div>
            <Container>
              <h1>Kapusta</h1>
              <p className={styled.pre__title}>Smart Finance</p>
            </Container>
          </div>
        </div>
        <FormAuth />
        <Outlet />
      </main>
    </>
  );
};
