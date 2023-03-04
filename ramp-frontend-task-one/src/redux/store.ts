import { configureStore } from "@reduxjs/toolkit";
import transactionReducer from "./features/transaction/transactionSlice";
import logger from "redux-logger";

export const store = configureStore({
  reducer: {
    data: transactionReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
