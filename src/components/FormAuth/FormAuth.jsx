import { useFormik, useFormikContext } from "formik";
import { useState } from "react";
import authOperations from "redux/auth/auth-operations";
import authSelectors from "redux/auth/auth-selector";
import { useDispatch, useSelector } from "react-redux";
import styled from "./FormAuth.module.scss";

export const FormAuth = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  const values = useFormikContext();

  const validate = (values) => {
    const errors = {};

    if (!values.userEmail) {
      errors.email = "Обов'язкове поле для заповнення";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.userEmail)
    ) {
      errors.email = "Invalid email address";
    }

    if (!values.userPassword) {
      errors.password = "Обов'язкове поле для заповнення";
    } else if (
      !/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/.test(
        values.userPassword
      )
    ) {
      errors.password =
        "password should contain atleast one number and one special character !@#$%^&*";
    }

    return errors;
  };

  const formik = useFormik({
    initialValues: {
      userEmail: "",
      userPassword: "",
    },
    validate,
    onSubmit: (values) => {
      // alert(JSON.stringify(values, null, 2));
      dispatch(authOperations.logIn(values));
    },
  });

  return (
    <>
      <form className={styled.form__auth} onSubmit={formik.handleSubmit}>
        <label htmlFor="email" className={styled.form__auth_label}>
          Электронная почта:
        </label>
        <input
          className={styled.form__auth_input}
          type="email"
          name="userEmail"
          placeholder="your@mail.com"
          id="email"
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          value={formik.values.userEmail}
        />

        {formik.touched.userEmail && formik.errors.email ? (
          <span className={styled.error}>{formik.errors.email}</span>
        ) : null}

        <label htmlFor="password" className={styled.form__auth_label}>
          Пароль:
        </label>
        <input
          className={styled.form__auth_input}
          type="password"
          name="userPassword"
          id="password"
          placeholder="Пароль"
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          value={formik.values.userPassword}
        />
        {formik.touched.password && formik.errors.password ? (
          <span className={styled.error}>{formik.errors.password}</span>
        ) : null}

        <ul className={styled.list__button}>
          <li className={styled.list__button_item}>
            <button
              disabled={!formik.values.userEmail || !formik.values.userPassword}
              className={styled.form__auth_submit}
              type="submit"
            >
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
    </>
  );
};
