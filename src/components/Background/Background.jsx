import styled from "./Background.module.scss";
import large from "assets/image/kapusta1280_1x.png";
import large2 from "assets/image/kapusta1280_2x.png";
import medium from "assets/image/kapusta768_1x.png";
import medium2 from "assets/image/kapusta768_2x.png";
import small from "assets/image/kapusta320_1x.png";
import small2 from "assets/image/kapusta320_2x.png";
import cabbage1 from "assets/image/cabbage_1x.png";
import cabbage2 from "assets/image/cabbage_2x.png";
import cabbage_small from "assets/image/cabbage_320_1x.png";
import cabbage_small2 from "assets/image/cabbage_320_2x.png";

export const Background = () => {
  return (
    <>
      <div className={styled.background}>
        <div className={styled.wrapper__cabbage}>
          <picture>
            <source
              srcSet={`${large} 1x, ${large2} 2x`}
              media="(min-width: 1280px)"
            />
            <source
              srcSet={`${medium} 1x, ${medium2} 2x`}
              media="(min-width: 768px)"
            />
            <source
              srcSet={`${small} 1x, ${small2} 2x`}
              media="(max-width: 767px)"
            />
            <img className={styled.cabbage} src={large} alt="bg" />
          </picture>
        </div>
        <div className={styled.bottom__cabbage_wrapper}>
          <picture>
            <source
              srcSet={`${cabbage1} 1x, ${cabbage2} 2x`}
              media="(min-width: 768px)"
            />
            <source
              srcSet={`${cabbage_small} 1x, ${cabbage_small2} 2x`}
              media="(max-width: 767px)"
            />
            <img className={styled.cabbage_bottom} src={large} alt="bg" />
          </picture>
        </div>
      </div>
    </>
  );
};
