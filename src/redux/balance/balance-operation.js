import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { useSelector } from "react-redux";
import authSelectors from "redux/auth/auth-selector";

axios.defaults.baseURL = "https://kapusta42back-end.herokuapp.com/api";

const getBalance = createAsyncThunk("/balance/getBalance", async () => {
  const res = await axios.get("/balance/current");
  return res.data;
});
const updateBalance = createAsyncThunk(
  "balance/updateBalance",
  async ({ totalBalance }) => {
    const token = useSelector(authSelectors.getToken);
    console.log(totalBalance);
    try {
      const res = await axios.patch(
        "/balance/update",
        { totalBalance },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      return res.data;
    } catch (error) {
      console.log(error.message);
    }
  }
);

export { getBalance, updateBalance };
