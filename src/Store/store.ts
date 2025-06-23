import { configureStore } from "@reduxjs/toolkit";
import BlogReducer from "../Reducer/BlogsSlice.ts";
export const Store = configureStore({
  reducer: {
    Blogs: BlogReducer,
  },
});

export type RootState = ReturnType<typeof Store.getState>;
export type AppDispatch = typeof Store.dispatch;
