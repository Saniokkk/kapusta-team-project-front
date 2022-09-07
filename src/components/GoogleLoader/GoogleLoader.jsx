import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import operations from "../../redux/auth/auth-operations";
import { Container } from "../Container";
import { useSearchParams } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const GoogleLoader = () => {
  const [searchParams] = useSearchParams();
  const dispatch = useDispatch();
  let navigate = useNavigate();
  const token = searchParams.get("token");
  console.log(token);
  useEffect(() => {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  });
  useEffect(() => {
    dispatch(operations.fetchCurrentUser());
  });
  useEffect(() => {
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
