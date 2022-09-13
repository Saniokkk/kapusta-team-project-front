import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

axios.defaults.baseURL = "https://kapusta42back-end.herokuapp.com/api";

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = "";
  },
};

///Register User

const register = createAsyncThunk("/auth/register", async (credentials) => {
  try {
    const { data } = await axios.post("/auth/register", credentials);
    token.set(data.user.token);
    toast.success("You have successfully registered", {
      position: toast.POSITION.TOP_RIGHT,
      theme: "light",
    });
    return data;
  } catch (error) {
    const codeError = error.response.status;
    if (codeError === 409) {
      toast.error("You are already registered, please try to login", {
        position: toast.POSITION.TOP_RIGHT,
        theme: "light",
      });
    } else if (codeError === 500) {
      toast.error("Oops... Server error! Please try later!", {
        position: toast.POSITION.TOP_RIGHT,
        theme: "light",
      });
    } else {
      toast.error("Something went wrong!");
    }
    return codeError;
  }
});

//LogIn User

const logIn = createAsyncThunk("/auth/login", async (credentials) => {
  try {
    const { data } = await axios.post("/auth/login", credentials);
    token.set(data.user.token);
    return data;
  } catch (error) {
    const codeError = error.response.status;
    if (codeError === 401) {
      toast.error("Invalid address and/or password specified.", {
        position: toast.POSITION.TOP_RIGHT,
        theme: "light",
      });
    }
  }
});

//LogOut User

const logOut = createAsyncThunk("auth/logout", async (credentials) => {
  try {
    await axios.post("/auth/logout", credentials);
    token.unset();
  } catch (error) {
    const codeError = error.response.status;
    if (codeError === 500) {
      toast.error("Oops... something happened to the server", {
        position: toast.POSITION.TOP_RIGHT,
        theme: "light",
      });
    } else {
      toast.error("Something went wrong!");
    }
  }
});

//After refresh page

const fetchCurrentUser = createAsyncThunk(
  "user/current",
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistToken = state.auth.token;
    console.log(persistToken);
    if (persistToken === null) {
      return thunkAPI.rejectWithValue();
    }
    token.set(persistToken);
    try {
      const { data } = await axios.get("/user/current");
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(console.log(error));
    }
  }
);

// S1w5!sf

//UpdateUserBalance

const updateCurrentUser = createAsyncThunk(
  "balance/updateBalance",
  async (totalBalance, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;
    if (!persistedToken) {
      return thunkAPI.rejectWithValue();
    }
    token.set(persistedToken);
    try {
      const { data } = await axios.patch("/balance/update", totalBalance);
      return data.newBalance;
    } catch (error) {
      token.unset();
      console.log(error.message);
    }
  }
);

const operations = {
  register,
  logIn,
  logOut,
  fetchCurrentUser,
  updateCurrentUser,
};

export default operations;
