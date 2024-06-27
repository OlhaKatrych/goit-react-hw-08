import { configureStore } from "@reduxjs/toolkit";
import contactsSliceReducer from "./contacts/slice";
import filtersSliceReducer from "./filters/slice";
import AuthSliceReducer from "./auth/slice";
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
import storage from "redux-persist/lib/storage";

const authPersistConfig = {
  key: "auth",
  storage,
  whitelist: ["token"],
};

const persistedAuthReducer = persistReducer(
  authPersistConfig,
  AuthSliceReducer
);

export const store = configureStore({
  reducer: {
    contacts: contactsSliceReducer,
    filters: filtersSliceReducer,
    auth: persistedAuthReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
