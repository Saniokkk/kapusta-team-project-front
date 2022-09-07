// import { useEffect } from "react";
// import { useDispatch } from "react-redux";
// import authOperations from "redux/auth/auth-operations";
import { Outlet } from "react-router-dom";
import { Header } from "../Header/Header";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Layout = () => {
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(authOperations.fetchCurrentUser());
  // }, [dispatch]);

  return (
    <>
      <Header />
      <Outlet />
      <ToastContainer />
    </>
  );
};

export default Layout;
