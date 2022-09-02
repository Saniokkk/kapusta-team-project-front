import { GoogleAuth } from "components/GoogleAuth";
import { FormAuth } from "components/FormAuth/FormAuth";
import styled from "./FormWrapper.module.scss";

export const FormWrapper = () => {
  return (
    <div className={styled.auth}>
      <GoogleAuth />
      <FormAuth />
    </div>
  );
};
