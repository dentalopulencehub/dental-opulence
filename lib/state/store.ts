import { configureStore } from "@reduxjs/toolkit";
import formReducer from "./features/FormSlice"

export const store = configureStore({
  reducer: {
    formReducer
  },
});





export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;