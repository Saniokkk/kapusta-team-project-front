import logo from "assets/image/name.svg";
import styled from "./MainTitle.module.scss";

export const MainTitle = () => {
  return (
    <div className={styled.container__title}>
      <h1 className={styled.title}>
        <img className={styled.cabbage} src={logo} alt="cabbage" />
      </h1>
      <p className={styled.pre__title}>Smart Finance</p>
    </div>
  );
};
