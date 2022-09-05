import logo from "assets/image/logo.svg";
import styled from "./Logo.module.scss";

export const Logo = () => {
  return (
    <>
      <img className={styled.logo} src={logo} alt="Логотип" />
    </>
  );
};
