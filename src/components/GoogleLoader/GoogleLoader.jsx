// import React, { useEffect, useState } from "react";
// import { useLocation, Navigate } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import authSelectors from "../../redux/auth/auth-selector";
// import operations from "../../redux/auth/auth-operations";
// import authSlice from "../../redux/auth/auth-slice";
// import { Container } from "../Container";

// function useQuery() {
//     const { search } = useLocation();

//     return React.useMemo(() => new URLSearchParams(search), [search]);
// }

// const GoogleLoader = () => {
//     const query = useQuery();
//     const dispatch = useDispatch();
//     const storedToken = useSelector(authSelectors.getToken);
//     const [token, setToken] = useState(null);
//     const history = Navigate();

//     useEffect(() => {
//         setToken(query.get('token'));
//     }, [query]);

//     useEffect(() => {
//         dispatch(authSlice(token));
//     }, [dispatch, token]);

//     useEffect(() => {
//         if (storedToken) {
//             dispatch(operations.getCurrentUser());
//         }
//     }, [dispatch, history, storedToken]);

//     return (
//         <>
//             <Container>
//                 <p>Loading...</p>
//             </Container>
//         </>
//     );
// };

// export default GoogleLoader;

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

  // axios.defaults.headers.common.Authorization = `Bearer ${token}`;

  // dispatch(operations.fetchCurrentUser());

  // navigate("/", { replace: true });

  // const query = useQuery();
  // const token
  // const dispatch = useDispatch();
  // const storedToken = useSelector(authSelectors.getToken);
  // const [token, setToken] = useState(null);
  // const history = Navigate();

  // useEffect(() => {
  //     setToken(query.get('token'));
  // }, [query]);

  // useEffect(() => {
  //     dispatch(authSlice(token));
  // }, [dispatch, token]);

  // useEffect(() => {
  //     if (storedToken) {
  //         dispatch(operations.getCurrentUser());
  //     }
  // }, [dispatch, history, storedToken]);

  return (
    <>
      <Container>
        <p>Loading...</p>
      </Container>
    </>
  );
};

export default GoogleLoader;
