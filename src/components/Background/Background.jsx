import styled from "./Background.module.scss";

export const Background = ({}) => {
  return (
    <>
      <div className={styled.background}></div>
      <div className={styled.png}>
        <img src="../../assets/image/13cabbages1x.png" alt="" />
      </div>
    </>
  );
};
