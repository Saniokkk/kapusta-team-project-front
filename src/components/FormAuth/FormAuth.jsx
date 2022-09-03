import { useFormik } from "formik";
import authOperations from "redux/auth/auth-operations";
import { useDispatch } from "react-redux";
import styled from "./FormAuth.module.scss";

export const FormAuth = () => {
  const dispatch = useDispatch();

  const validate = (values) => {
    const errors = {};

    if (!values.email) {
      errors.email = "Обов'язкове поле для заповнення";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      errors.email = "Невірна адреса електронної пошти";
    }

    if (!values.password) {
      errors.password = "Обов'язкове поле для заповнення";
    } else if (
      !/^(?=.*[0-9])[a-zA-Z0-9!@#$%^&*]{6,16}$/.test(values.password)
    ) {
      errors.password =
        "пароль повинен містити принаймні одну цифру, одну велику та малу літеру та один спеціальний символ !@#$%^&*";
    }

    return errors;
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validate,
    onSubmit: (values, { resetForm }) => {
      const { email, password, button } = values;
      if (button === "register") {
        resetForm({ values: "" });
        dispatch(authOperations.register({ email, password }));
      } else if (button === "login") {
        resetForm({ values: "" });
        dispatch(authOperations.logIn({ email, password }));
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
          name="email"
          placeholder="your@mail.com"
          id="email"
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          value={formik.values.email}
        />

        {formik.touched.email || formik.errors.email ? (
          <span className={styled.error}>{formik.errors.email}</span>
        ) : null}

        <label htmlFor="password" className={styled.form__auth_label}>
          {formik.errors.password && <span className={styled.star}>*</span>}
          Пароль:
        </label>
        <input
          className={styled.form__auth_input}
          type="password"
          name="password"
          id="password"
          placeholder="Пароль"
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          value={formik.values.password}
        />
        {formik.touched.password || formik.errors.password ? (
          <span className={styled.error}>{formik.errors.password}</span>
        ) : null}

        <ul className={styled.list__button}>
          <li className={styled.list__button_item}>
            <button
              disabled={!formik.values.email || !formik.values.password}
              className={styled.form__auth_submit}
              type="submit"
              onClick={() => (formik.values.button = "login")}
            >
              Увійти
            </button>
          </li>
          <li className={styled.list__button_item}>
            <button
              disabled={!formik.values.email || !formik.values.password}
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
