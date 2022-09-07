import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setToken } from "redux/auth/auth-slice";
import { Container } from "../Container";
import { useSearchParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const GoogleLoader = () => {
  const [searchParams] = useSearchParams();
  const dispatch = useDispatch();
  let navigate = useNavigate();
  const token = searchParams.get("token");

  useEffect(() => {
    dispatch(setToken({ token }));
    navigate("/", { replace: true });
  });

  return (
    <>
      <Container>
        <p>Loading...</p>
      </Container>
    </>
  );
};

export default GoogleLoader;
