import { Link } from "react-router-dom";
import { ReactComponent as KapustaLogo } from "assets/image/logo.svg";
import styled from "./Logo.module.scss";

export const Logo = () => {
  return (
    <Link to={"/"} className={styled.logo}>
      <KapustaLogo />
    </Link>
  );
};
