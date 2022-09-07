// import icon from "assets/sprite-icons.svg";
// import styled from "./GoogleAuth.module.scss";
// import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import authOperations from "redux/auth/auth-operations";

// export const GoogleAuth = () => {
//   const dispatch = useDispatch();

//   return (
// {/* <a href="http://localhost:5000/api/auth/google"> */ }
//     <div className={styled.google__auth}>
//       <button type="button" onClick={() => dispatch(authOperations.logIn())}>
//       </button>
//       <p className={styled.google__auth_title}>
//         Ви можете авторизуватись за допомогою Google Account:
//       </p>
//       <motion.button
//         className={styled.google__auth_btn}
//         type="button"
//         whileHover={{ scale: 1.1 }}
//         transition={{ type: "spring", stiffness: 400, damping: 10 }}
//       >
//         <svg className={styled.google__auth_btn_icon} width={17} height={18}>
//           <use href={`${icon}#icon-google`} />
//         </svg>
//         Google
//       </motion.button>
//     </div>
//   );
// };


import icon from "assets/sprite-icons.svg";
import styled from "./GoogleAuth.module.scss";
import { motion } from "framer-motion";

export const GoogleAuth = () => {
  const dispatch = useDispatch();
  return (
    <div className={styled.google__auth}>
      <a href="https://kapusta42back-end.herokuapp.com/api/auth/google">Жми мене</a>
      <p className={styled.google__auth_title}>
        Ви можете авторизуватись за допомогою Google Account:
      </p>
      <motion.button onClick={() => dispatch(authOperations.logInGoogle())}
        className={styled.google__auth_btn}
        type="button"
        whileHover={{ scale: 1.1 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
      >
        <svg className={styled.google__auth_btn_icon} width={17} height={18}>
          <use href={`${icon}#icon-google`} />
        </svg>
        Google
      </motion.button>
      {/* </a> */}
    </div>
  );
};