import { configureStore } from "@reduxjs/toolkit";
// import { contactsApi } from "redux/contacts/contactsApi";
// import { contactsSlice } from "redux/contacts/contactsSlice";
import authReducer from "./auth/auth-slice";
import balanceReducer from "./balance/balance-reducer";
import storage from "redux-persist/lib/storage";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

const authPersistConfig = {
  key: "auth",
  storage,
  whitelist: ["token"],
};

export const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authReducer),
    balance: balanceReducer,
    // contacts: contactsSlice.reducer,
    // [contactsApi.reducerPath]: contactsApi.reducer,
  },
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
    // contactsApi.middleware,
  ],
});

export const persistor = persistStore(store);
