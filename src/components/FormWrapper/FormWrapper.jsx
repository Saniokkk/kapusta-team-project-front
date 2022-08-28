import { GoogleAuth } from "components/GoogleAuth";
import { FormAuth } from "components/FormAuth";
import styled from "./FormWrapper.module.scss";

export const FormWrapper = () => {
  return (
    <div className={styled.auth}>
      <GoogleAuth />
      <p className={styled.form__wrapper_text}>
        Или зайти с помощью e-mail и пароля, предварительно зарегистрировавшись:
      </p>
      <FormAuth />
    </div>
  );
};
