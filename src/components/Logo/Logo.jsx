import { Link } from "react-router-dom";
import logo from "assets/image/logo.svg";
import styled from "./Logo.module.scss";

export const Logo = () => {
  return (
    <Link to={"/"}>
      <img className={styled.logo} src={logo} alt="Логотип" />
    </Link>
  );
};
