import { createSlice } from "@reduxjs/toolkit";
import authOperations from "./auth-operations";

const initialState = {
  user: { email: "", avatarURL: null, totalBalance: null },
  token: "",
  isLoggedIn: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: {
    [authOperations.register.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
    [authOperations.logIn.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
    [authOperations.logOut.fulfilled](state) {
      state.user = { email: null };
      state.token = null;
      state.isLoggedIn = false;
    },
    [authOperations.fetchCurrentUser.fulfilled](state, action) {
      state.user = action.payload;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
    [authOperations.updateCurrentUser.fulfilled](state, action) {
      state.user.totalBalance = action.payload;
    },
  },
});

export default authSlice.reducer;
