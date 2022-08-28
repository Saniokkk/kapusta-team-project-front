// import icon from "assets/symbol-icons.svg";
import logo from "image/logo.svg";
import styled from "./Logo.module.scss";

export const Logo = () => {
  return (
    <>
      {/* <img src={`${icon}#icon-calculator`} alt="Logo" /> */}
      <img className={styled.logo} src={logo} alt="Логотип" />
    </>
  );
};
