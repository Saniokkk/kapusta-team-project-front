import { Outlet } from "react-router-dom";
import { Header } from "./Header/Header";
import { Background } from "components/Background";
import { MainTitle } from "components/MainTitle";
import { FormAuth } from "components/FormAuth";
import styled from "./Layout.module.scss";

export const Layout = () => {
  return (
    <>
      <Header />
      <Background />
      <div className={styled.wrapper}>
        <MainTitle />
        <FormAuth />
      </div>

      <Outlet />
    </>
  );
};
