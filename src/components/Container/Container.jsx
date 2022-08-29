import styled from "./Container.module.scss";

export const Container = ({ children }) => {
  return <div className={styled.container}>{children}</div>;
};
