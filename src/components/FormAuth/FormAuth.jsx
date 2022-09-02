import { useFormik } from "formik";
import authOperations from "redux/auth/auth-operations";
import { useDispatch } from "react-redux";
import styled from "./FormAuth.module.scss";

export const FormAuth = () => {
  const dispatch = useDispatch();

  const validate = (values) => {
    const errors = {};

    if (!values.userEmail) {
      errors.email = "Обов'язкове поле для заповнення";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.userEmail)
    ) {
      errors.email = "Невірна адреса електронної пошти";
    }

    if (!values.userPassword) {
      errors.password = "Обов'язкове поле для заповнення";
    } else if (
      !/^(?=.*[0-9])[a-zA-Z0-9!@#$%^&*]{6,16}$/.test(values.userPassword)
    ) {
      errors.password =
        "пароль повинен містити принаймні одну цифру, одну велику та малу літеру та один спеціальний символ !@#$%^&*";
    }

    return errors;
  };

  const formik = useFormik({
    initialValues: {
      userEmail: "",
      userPassword: "",
    },
    validate,
    onSubmit: (values, { resetForm }) => {
      const { userEmail, userPassword, button } = values;
      if (button === "register") {
        resetForm({ values: "" });
        dispatch(authOperations.register({ userEmail, userPassword }));
      } else if (button === "login") {
        resetForm({ values: "" });
        dispatch(authOperations.logIn({ userEmail, userPassword }));
      }
    },
  });

  return (
    <>
      <p className={styled.form__auth_title}>
        Або зайти за допомогою e-mail та пароля, попередньо зареєструвавшись:
      </p>
      <form className={styled.form__auth} onSubmit={formik.handleSubmit}>
        <label htmlFor="email" className={styled.form__auth_label}>
          {formik.errors.email && <span className={styled.star}>*</span>}
          Електронна пошта:
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

        {formik.touched.userEmail || formik.errors.email ? (
          <span className={styled.error}>{formik.errors.email}</span>
        ) : null}

        <label htmlFor="password" className={styled.form__auth_label}>
          {formik.errors.password && <span className={styled.star}>*</span>}
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
        {formik.touched.userPassword || formik.errors.password ? (
          <span className={styled.error}>{formik.errors.password}</span>
        ) : null}

        <ul className={styled.list__button}>
          <li className={styled.list__button_item}>
            <button
              disabled={!formik.values.userEmail || !formik.values.userPassword}
              className={styled.form__auth_submit}
              type="submit"
              onClick={() => (formik.values.button = "login")}
            >
              Увійти
            </button>
          </li>
          <li className={styled.list__button_item}>
            <button
              disabled={!formik.values.userEmail || !formik.values.userPassword}
              className={styled.form__auth_signup}
              onClick={() => (formik.values.button = "register")}
              type="submit"
            >
              Реєстрація
            </button>
          </li>
        </ul>
      </form>
    </>
  );
};
