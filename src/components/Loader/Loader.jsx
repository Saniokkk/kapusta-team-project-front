import { TailSpin } from "react-loader-spinner";
import styled from "./Loader.module.scss";

export const Loader = () => {
  return (
    <div className={styled.wrapper}>
      <div>
        <TailSpin
          height="150"
          width="150"
          color="#081224"
          ariaLabel="loading-indicator"
        />
      </div>
    </div>
  );
};
