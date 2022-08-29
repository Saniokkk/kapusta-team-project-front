import styled from "./MainTitle.module.scss";

export const MainTitle = () => {
  return (
    <div className={styled.container__title}>
      <h1 className={styled.title}>Kapu$ta</h1>
      <p className={styled.pre__title}>Smart Finance</p>
    </div>
  );
};
