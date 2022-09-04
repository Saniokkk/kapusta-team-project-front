import { Background } from "components/Background";
import { MainTitle } from "components/MainTitle";
import { FormWrapper } from "components/FormWrapper";
import styled from "./Home.module.scss";

export const Home = () => {
  return (
    <>
      <Background />
      <div className={styled.container}>
        <div className={styled.wrapper}>
          <MainTitle />
          <FormWrapper />
        </div>
      </div>
    </>
  );
};
