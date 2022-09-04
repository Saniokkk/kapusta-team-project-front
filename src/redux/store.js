import { configureStore } from "@reduxjs/toolkit";
// import { contactsApi } from "redux/contacts/contactsApi";
// import { contactsSlice } from "redux/contacts/contactsSlice";
import authReducer from "./auth/auth-slice";
import storage from "redux-persist/lib/storage";
import extraInfoReducer from "./extraInfo/extraInfo-slice";
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
    extraInfo: extraInfoReducer,
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
