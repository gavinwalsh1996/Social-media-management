import { configureStore } from "@reduxjs/toolkit";
import uiReducer from "./slices/uiSlice";
import postReducer from "./slices/postSlice";

export const store = configureStore({
  reducer: {
    ui: uiReducer,
    post: postReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
