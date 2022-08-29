import { Outlet } from "react-router-dom";
import { Header } from "./Header/Header";
import { Background } from "components/Background";
import { MainTitle } from "components/MainTitle";
import { FormWrapper } from "components/FormWrapper";
import large from "assets/image/13cabbages1x.png";
import medium from "assets/image/7cabbages1x.png";
import small from "assets/image/2cabbage1x.png";
import styled from "./Layout.module.scss";

export const Layout = () => {
  return (
    <>
      <Header />
      <Background />
      <div className={styled.wrapper}>
        <MainTitle />
        <FormWrapper />
      </div>
      {/* <picture>
        <source srcset="./images/mobile/igor.jpg 1x, ./images/mobile/igor@2x.jpg 2x"
            media="(max-width: 767px)">
        <source srcset="./images/tablet/igor.jpg 1x, ./images/tablet/igor@2x.jpg 2x"
            media="(min-width: 768px)">
        <source srcset="./images/desktop/igor.jpg 1x, ./images/desktop/igor@2x.jpg 2x"
            media="(min-width: 1200px)">
        <img className={styled.png} src={png} alt="" />
    </picture> */}
      {/* <img
        className={styled.png}
        srcSet={`${png1x} 1x, ${png2x} 2x`}
        sizes="(min-width: 1200px)"
        alt="Логотип"
        src={png1x}
      />

      <img
        className={styled.png}
        srcSet={`${png1x} 1x, ${png2x} 2x`}
        sizes="(min-width: 1200px) 300px"
        alt="Логотип"
        src={png1x}
      /> */}
      <img
        className={styled.png}
        src={small}
        srcSet={`${small} 300w, ${medium} 768w, ${large} 1280w`}
        // sizes="(min-width: 1280px) 20vw, (max-width: 37.5em) 30vw, 300px"
        alt="logo"
      />
      <Outlet />
    </>
  );
};
