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

const register = createAsyncThunk("/users/register", async (credentials) => {
  try {
    const { data } = await axios.post("/users/register", credentials);
    token.set(data.token);
    return data;
  } catch (error) {
    const codeError = error.response.status;
    if (codeError === 400) {
      toast.error("You are already registered, please try to login", {
        position: toast.POSITION.TOP_RIGHT,
        theme: "dark",
      });
    } else if (codeError === 500) {
      toast.error("Oops... Server error! Please try later!", {
        position: toast.POSITION.TOP_RIGHT,
        theme: "dark",
      });
    } else {
      toast.error("Something went wrong!");
    }
  }
});

//LogIn User

const logIn = createAsyncThunk("/users/login", async (credentials) => {
  try {
    const { data } = await axios.post("/users/login", credentials);
    token.set(data.token);
    toast.success(`Welcome ${data.user.email.split("@")[0]}`, {
      position: toast.POSITION.TOP_RIGHT,
      theme: "dark",
    });
    return data;
  } catch (error) {
    const codeError = error.response.status;
    if (codeError === 400) {
      toast.error("Invalid address and/or password specified.", {
        position: toast.POSITION.TOP_RIGHT,
        theme: "dark",
      });
    }
  }
});

//LogOut User

const logOut = createAsyncThunk("users/logout", async (credentials) => {
  try {
    await axios.post("/users/logout", credentials);
    token.unset();
  } catch (error) {
    const codeError = error.response.status;
    if (codeError === 500) {
      toast.error("Oops... something happened to the server", {
        position: toast.POSITION.TOP_RIGHT,
        theme: "dark",
      });
    } else {
      toast.error("Something went wrong!");
    }
  }
});

//After refresh page

const fetchCurrentUser = createAsyncThunk(
  "users/current",
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    console.log(persistedToken);
    if (!persistedToken) {
      return thunkAPI.rejectWithValue();
    }

    token.set(persistedToken);
    try {
      const { data } = await axios.post("users/current");
      return data;
    } catch {
      token.unset();
      toast.warn("Authorization timed out! Please authenticate again!");
    }
  }
);

const operations = {
  register,
  logIn,
  logOut,
  fetchCurrentUser,
};

export default operations;
