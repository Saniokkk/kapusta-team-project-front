import { useFormik } from "formik";
import authOperations from "redux/auth/auth-operations";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { ModalLogout } from "components/ModalLogout";

import { motion } from "framer-motion";

import styled from "./FormAuth.module.scss";
import icon from "assets/sprite-icons.svg";

export const FormAuth = () => {
  const [stateRegister, setStateRegister] = useState(false);
  const [statePass, setStatePass] = useState(false);
  const dispatch = useDispatch();

  const validate = (values) => {
    const errors = {};

    if (!values.email) {
      errors.email = "Обов'язкове поле для заповнення";
    } else if (
      !/^.{1,}[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
    ) {
      errors.email = "Невірна адреса електронної пошти";
    }

    if (!values.password) {
      errors.password = "Обов'язкове поле для заповнення";
    } else if (
      !/^(?=.*[0-9])[a-zA-Z0-9!@#$%^&*]{6,16}$/.test(values.password)
    ) {
      errors.password =
        "Пароль повинен містити принаймні одну цифру, одну велику та малу літеру та один спеціальний символ: !@#$%^&*";
    }

    return errors;
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validate,
    validateOnChange: false,
    validateOnBlur: false,
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
      <p className={styled.formAuthTitle}>
        Або зайти за допомогою e-mail та пароля, попередньо зареєструвавшись:
      </p>
      <form className={styled.formAuth} onSubmit={formik.handleSubmit}>
        <label htmlFor="email" className={styled.formAuthLabel}>
          {formik.errors.email && <span className={styled.star}>*</span>}
          Електронна пошта:
        </label>
        <input
          className={styled.formAuthInput}
          type="email"
          name="email"
          placeholder="your@mail.com"
          id="email"
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          value={formik.values.email}
        />
        {formik.errors.email ? (
          <span className={styled.error}>{formik.errors.email}</span>
        ) : null}
        <label htmlFor="password" className={styled.formAuthLabel}>
          {formik.errors.password && <span className={styled.star}>*</span>}
          Пароль:
        </label>
        <span className={styled.containerInputPass}>
          <input
            className={styled.formAuthInput}
            type={statePass ? "text" : "password"}
            name="password"
            id="password"
            placeholder="Пароль"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.password}
          />
          {statePass ? (
            <svg
              id="eye"
              className={styled.eye}
              width={20}
              height={20}
              onMouseDown={() => setStatePass(!statePass)}
              onMouseUp={() => setStatePass(!statePass)}
            >
              <use href={`${icon}#icon-eye`} />
            </svg>
          ) : (
            <svg
              id="eye"
              className={styled.eye}
              width={20}
              height={20}
              onMouseDown={() => setStatePass(!statePass)}
              onMouseUp={() => setStatePass(!statePass)}
            >
              <use href={`${icon}#icon-eye-blocked`} />
            </svg>
          )}
        </span>
        {formik.errors.password ? (
          <span className={styled.error}>{formik.errors.password}</span>
        ) : null}
        <ul className={styled.listButton}>
          <li className={styled.listButtonItem}>
            <motion.button
              className={styled.formAuthSubmit}
              type="submit"
              onClick={() => (formik.values.button = "login")}
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              Увійти
            </motion.button>
          </li>
          <li className={styled.listButtonItem}>
            <motion.button
              className={styled.formAuthSignup}
              onClick={() => (formik.values.button = "register")}
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              type="submit"
            >
              Реєстрація
            </motion.button>
          </li>
        </ul>
      </form>
      {stateRegister && (
        <ModalLogout
          modalTitle="на вашу пошту було відправлено листа з підтвердженням реєстрації"
          onClose={() => setStateRegister(!stateRegister)}
        />
      )}
    </>
  );
};
