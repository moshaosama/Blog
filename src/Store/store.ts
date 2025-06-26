import { configureStore } from "@reduxjs/toolkit";
import BlogReducer from "../Reducer/BlogsSlice.ts";
import BlogByCategoryReducer from "../Reducer/BlogByCategory.ts";
import BlogByIdReducer from "../Reducer/BlogByIdSlice.ts";
export const Store = configureStore({
  reducer: {
    Blogs: BlogReducer,
    BlogbyCategory: BlogByCategoryReducer,
    BlogbyId: BlogByIdReducer,
  },
});

export type RootState = ReturnType<typeof Store.getState>;
export type AppDispatch = typeof Store.dispatch;
