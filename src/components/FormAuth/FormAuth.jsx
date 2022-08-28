import { GoogleAuth } from "components/GoogleAuth";
import styled from "./FormAuth.module.scss";

export const FormAuth = () => {
  return (
    <div className={styled.auth}>
      <GoogleAuth />
      <p className={styled.form__wrapper_text}>
        Или зайти с помощью e-mail и пароля, предварительно зарегистрировавшись:
      </p>
      <form className={styled.form__auth}>
        <label htmlFor="email" className={styled.form__auth_label}>
          Электронная почта:
        </label>
        <input
          className={styled.form__auth_input}
          type="email"
          placeholder="your@mail.com"
          id="email"
        />
        <label htmlFor="email" className={styled.form__auth_label}>
          Пароль:
        </label>
        <input
          className={styled.form__auth_input}
          type="password"
          placeholder="Пароль"
        />

        <ul className={styled.list__button}>
          <li className={styled.list__button_item}>
            <button className={styled.form__auth_submit} type="submit">
              Войти
            </button>
          </li>
          <li className={styled.list__button_item}>
            <button className={styled.form__auth_signup} type="button">
              Регистрация
            </button>
          </li>
        </ul>
      </form>
    </div>
  );
};
