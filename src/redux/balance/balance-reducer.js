import { createReducer } from "@reduxjs/toolkit";
import { combineReducers } from "@reduxjs/toolkit";
import { getBalance, updateBalance } from "redux/balance/balance-operation";

const totalBalance = createReducer(
  {},
  {
    [getBalance.fulfilled]: (_, { payload }) => payload,
    [updateBalance.fulfilled]: (state, { payload }) => {
      return { ...state, ...payload };
    },
  }
);

const loading = createReducer(false, {
  [getBalance.fulfilled]: () => false,
  [getBalance.pending]: () => true,
  [getBalance.rejected]: () => false,
  [updateBalance.fulfilled]: () => false,
  [updateBalance.pending]: () => true,
  [updateBalance.rejected]: () => false,
});

export default combineReducers({
  totalBalance,
  loading,
});
